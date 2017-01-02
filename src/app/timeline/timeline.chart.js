angular.module('app')
  .service('Timeline', (TIMELINE_CONFIG, TIMELINE_COLORS, $translate, $filter) => {
    class Timeline extends Koto {
      constructor(svg) {
        super(svg);

        // define configs
        this.configs = TIMELINE_CONFIG;

        // Bind local method to this
        this.transitionValues = this.transitionValues.bind(this);
        this.isHighlighted = this.isHighlighted.bind(this);
        this.updateBubbles = this.updateBubbles.bind(this);
        this.resetBubbles = this.resetBubbles.bind(this);
        this.deleteBubbles = this.deleteBubbles.bind(this);
        this.highlightGroups = this.highlightGroups.bind(this);
        this.updateLabel = this.updateLabel.bind(this);
        this.bindLayer = this.bindLayer.bind(this);
        this.colors = this.colors.bind(this);
        this.categoryColors = this.categoryColors.bind(this);

        // Create scale
        this.xScale = d3.scaleLinear();
        this.yScale = d3.scaleLinear();

        // Create axis's layers
        this.base.append("g.axis.axis--x");
        this.base.append("g.axis.axis--y");
        // Create ruler layer
        this.base.append('g.ruler');
        // Create shapes layers
        const area = this.base.append('g.area');
        const line = this.base.append('g.line');
        const label = this.base.append('g.label');
        // Create interaction layer
        this.base.append('rect.event')
          .on('mousemove', this.updateBubbles)
          .on('mouseout', this.resetBubbles);
        // Create a bubbles layer
        this.base.append('g.bubble');

        // Create a drop-shadow filter
        this.base.append('filter#dropshadow')
          .attrs({height: '130%'})
          .append('feGaussianBlur')
            .attrs({in: 'SourceAlpha', stdDeviation: 2})
            .select(this.parent)
          .append('feOffset')
            .attrs({dx: 0, dy: 2, result: 'offsetblur'})
            .select(this.parent)
          .append('feFlood')
            .attr('flood-opacity', 0.4)
            .select(this.parent)
          .append('feComposite')
            .attrs({in2: "offsetblur", operator: "in"})
            .select(this.parent)
          .append('feMerge')
            .append('feMergeNode')
              .select(this.parent)
            .append('feMergeNode')
              .attr('in', "SourceGraphic");

        // Function to draw a line
        this.line = d3.line()
          .x(d => this.xScale(d.id))
          .y(d => this.yScale(d.value));

        // Function to draw an area
        this.area = d3.area()
          .x(d => this.xScale(d.id))
          .y0(d => this.isStacked ? this.yScale(d.stack[0]) : this.height)
          .y1(d => this.yScale(d.value));

        // Setup areas' layer
        this.layer('area', area, angular.extend(this.bindLayer(this.area), {
          dataBind: function dataBind(data) {
            // Disable on lines
            const rows = data.type === 'line' ? [] : data.rows.reverse();
            return this.selectAll('.area__group').data(rows, d => d.id);
          },
          insert: selection => {
            // Add the path to the current selection and clip its path the rect
            return selection.append('path.area__group')
                .classed('highlighted', this.isHighlighted)
                .style('opacity', d => this.isHighlighted(d) ? 1 : 0.3)
                .attr('d', d => this.area(d.values))
                .style('fill', this.colors);
          }
        }));
        // Setup lines' layer
        this.layer('line', line, angular.extend(this.bindLayer(this.line), {
          dataBind: function dataBind(data) {
            return this.selectAll('.line__group').data(data.rows, d => d.id);
          },
          insert: selection => {
            // Add the path to the current selection and clip its path the rect
            return selection.append('path.line__group')
                .classed('highlighted', this.isHighlighted)
                .style('opacity', d => this.isHighlighted(d) ? 1 : 0.3)
                .attr('d', d => this.line(d.values))
                .style('stroke', this.colors);
          }
        }));
        // Setup labels layer
        this.layer('label', label, {
          dataBind: function dataBind(data) {
            return this.selectAll('.label text').data(data.rows, d => d.id);
          },
          insert: selection => {
            return selection.append('text').text(d => d.id)
              .classed('highlighted', this.isHighlighted)
              .attr("text-anchor", "end")
              .attr("dy", '-1em')
              .attr("dx", '-1em')
              .call(this.updateLabel)
              .style('opacity', 0);
          },
          events: {
            'enter:transition': t => t.duration(this.c('transition')).style('opacity', 1),
            'update': selection => selection.classed('highlighted', this.isHighlighted),
            'update:transition': t => t.duration(this.c('transition')).call(this.updateLabel),
            'merge': selection => selection.classed('highlighted', this.isHighlighted),
            'merge:transition': t => t.duration(this.c('transition')).call(this.updateLabel),
            'exit:transition': t => t.duration(this.c('transition')).style('opacity', 0).remove()
          }
        });
      }
      formatY(n) {
        return $filter('number')(n, 0);
      }
      updateBubbles() {
        // Helper function to move all groups
        const moveGroup = selection => {
          selection.attr('transform', d => {
            return `translate(${this.c('padding').left}, ${this.yScale(d.value)})`;
          });
          // Move text with the right anchor
          selection.select('text')
            .attr('text-anchor', this.half < anchorX ? 'end' : 'start')
            .each(_.partial(function insert(that) {
              const text = d3.select(this);
              // Remove all children from text element
              text.selectAll("*").remove();
              // Add values on multiline
              text.tspans(d => [d.year, d.id, that.formatY(d.value)]);
              // Get size of the text box
              const bbox = text.node().getBBox();
              text.attrs({y: that.c('padding').top});
              // To add padding outside the box
              const p = 2;
              // Add rect as background
              selection.select('rect').attrs({
                x: bbox.x - p * 2,
                y: bbox.y - p,
                width: bbox.width + 4 * p,
                height: bbox.height + 2 * p
              });
            }, this));
          return selection;
        };
        // Get the value for this y position
        const value = this.yScale.invert(d3.event.layerY);
        // Year value at this for this x position
        const y = Math.round(this.xScale.invert(d3.event.layerX));
        // Get the closest year in the dataset
        const year = _.first(this.data.years.sort((a, b) => {
          return Math.abs(y - a) - Math.abs(y - b);
        }));
        // Get the anchor value for this year
        const anchorX = this.xScale(year);
        // Simplify rows to extract only the data for the current year
        const data = _.chain(this.data.rows).map(r => {
          const row = _.find(r.values, {id: year});
          return angular.extend(r, {
            year,
            value: row.value,
            hover: value >= row.stack[0] && value <= row.stack[1]
          });
        // Then find the closest group according to y position
        }).thru(rows => {
          if (this.isStacked) {
            rows = _.filter(rows, {hover: true});
          } else {
            rows = rows.sort((a, b) => {
              // Iterate over every row to find the smallest distance
              return Math.abs(value - a.value) - Math.abs(value - b.value);
            });
          }
          return rows;
        // Return an array with only the irst value
        }).first().castArray().compact().value();
        // The layer that holds bubbles
        const groups = this.base.select('.bubble')
          // Move the layer on the right year
          .call(this.translate(anchorX, this.c('padding').top))
          // Create group for each row
          .selectAll('.bubble__group')
          // JOIN data to for the selected year
          .data(data, d => d.id);
        // REMOVE old bubbles
        groups.exit().remove();
        // UPDATE current bubbles
        groups.call(moveGroup);
        // CREATE new bubbles
        const entering = groups.enter().append('g').classed('bubble__group', true);
        // Add corner points
        entering.append('circle').attrs({
          'cx': 0, 'cy': 0, 'r': 5,
          'stroke': this.categoryColors,
          'stroke-width': 5,
          'fill': d => {
            const c = this.categoryColors(d);
            return chroma.mix(c, this.contrast(c));
          }
        });
        // Add text label
        entering.append('text').style('fill', _.flow(this.categoryColors, this.contrast));
        // Add text background
        entering.insert('rect', ':first-child')
          .attrs({rx: 2, ry: 2})
          .style('fill', this.categoryColors);
        entering
          .attr('fill', 'red')
          .style('filter', 'url(#dropshadow)')
          .call(moveGroup);
        // Highlight groups
        this.highlightGroups(_.map(data, 'id'));
      }
      resetBubbles() {
        // Delete all bubbles
        this.deleteBubbles();
        // Remove highlighted groups by passing an empty array of ids
        this.highlightGroups();
      }
      deleteBubbles() {
        this.base.selectAll('.bubble__group').remove();
      }
      parent() {
        return this.parentNode;
      }
      bindLayer(pathFn) {
        return {
          events: {
            enter: selection => {
              // Create a unique id for this element clip
              const id = _.uniqueId('rectClip-');
              // Add the clip to the current selection
              const clipRect = this.base.append("clipPath").attr("id", id).append("rect");
              // Clip path to the current selection
              selection.attr('clip-path', `url(#${id})`);
              // Apply the transition on the clip's rect
              clipRect
                .attrs({width: 0, height: this.height})
                .transition()
                  .duration(this.c('transition'))
                  .attr('width', this.width)
                  // After the transition ends
                  .on("end", function end() {
                    // Remove the clip-path from the selection
                    selection.attr('clip-path', null);
                    // And remove its holding element
                    d3.select(this.parentNode).remove();
                  });
            },
            merge: this.transitionValues(pathFn),
            update: this.transitionValues(pathFn),
            exit: selection => {
              selection
                .transition()
                  .duration(this.c('transition'))
                  .style('opacity', 0)
                  .on('end', () => selection.remove());
            }
          }
        };
      }
      get width() {
        return this.c('width') - this.c('padding').left - this.c('padding').right;
      }
      get height() {
        return this.c('height') - this.c('padding').top - this.c('padding').bottom;
      }
      get half() {
        return this.width / 2;
      }
      get isStacked() {
        return this.c('type') === 'stacked-area';
      }
      get isLine() {
        return this.c('type') === 'line';
      }
      get isArea() {
        return this.c('type') === 'area';
      }
      get hasHighligths() {
        return this.c('highlights').length > 0;
      }
      transitionValues(pathFn) {
        return selection => {
          selection.transition()
            .duration(this.c('transition'))
            .style('opacity', d => this.isHighlighted(d) ? 1 : 0.3)
            .attr("d", d => pathFn(d.values));
        };
      }
      updateLabel(selection) {
        return selection
          .attr("x", d => this.xScale(_.last(d.values).id))
          .attr("y", d => {
            const row = _.last(d.values);
            return this.yScale(row.value);
          });
      }
      isHighlighted(d) {
        return !this.hasHighligths || this.c('highlights').indexOf(d.id) > -1;
      }
      highlightGroups(ids = []) {
        // True if the given set of ids includes the selection
        const includes = d => ids.indexOf(d.id) > -1;
        // Change opacity and stroke accordingly
        this.base.selectAll('.line__group,.area__group')
          .style('opacity', d => includes(d) || this.isHighlighted(d) ? 1 : 0.3);
        this.base.selectAll('.line__group')
          .style('stroke', d => includes(d) ? this.categoryColors(d) : this.colors(d));
        this.base.selectAll('.area__group')
          .style('fill', d => includes(d) ? this.categoryColors(d) : this.colors(d));
      }
      contrast(c) {
        return chroma(c).luminance() > 0.5 ? 'black' : 'white';
      }
      colors(d) {
        // return a different color if the element is not highlighted
        const color = this.categoryColors(d);
        // return a different color if the element is not highlighted
        return this.isHighlighted(d) ? color : chroma(color).desaturate(1).hex();
      }
      categoryColors(d) {
        // Create color schema if undefined
        if (!this._colors) {
          this._colors = d3.scaleOrdinal(TIMELINE_COLORS);
        }
        return this._colors(d.id);
      }
      smooth(hash) {
        // Iterate over the hash
        _.each(hash, (value, key) => {
          // Skip non-numeric keys and the first year
          if (!isNaN(key) && hash.hasOwnProperty(Number(key) - 1)) {
            // Every values to use in the moving average
            const values = [];
            // Go backward and forward the current year
            for (let i = -this.c('smoothing'); i <= this.c('smoothing'); i++) {
              // Build the hash key to the year
              const year = Number(key) + i;
              // Since the mean function ignore undefined element, we do not check
              // that there is a value for the year!
              values.push(hash[year]);
            }
            // Calculate the mean for all values
            hash[key] = d3.mean(values);
          }
        });
        return hash;
      }
      transform(data) {
        // Extract years from the first line
        const years = this.years(data[0]);
        // Smooth all the rows
        data = data.map(this.smooth.bind(this));
        // Get groups of data
        const groups = _.chain(data).map(r => _.values(r).pop()).value();
        // Transpose data to be able to stack them
        const transpose = _.map(years, year => {
          return angular.extend({year}, _.reduce(groups, (hash, group, i) => {
            hash[group] = data[i][year];
            return hash;
          }, {}));
        });
        // Stack data for stacked representation
        const stack = d3.stack().keys(groups)(transpose);
        // Create an object for each group
        const rows = _.reduce(data, (res, hash, i) => {
          // Create a new object as row, describing this group
          res.push({
            // The last element of this hash is the group id
            id: $translate.instant('timeline.labels.' + hash.label),
            // Collect value for each year
            values: _.map(years, year => {
              // Create a stack for this year
              const yearStack = _.find(stack[i], d => d.data.year === year);
              // Returns a hash
              return {
                id: year,
                stack: yearStack,
                value: this.isStacked ? yearStack[1] : hash[year]
              };
            })
          });
          return res;
        }, []);
        // Return an object with several precalculated fields
        return {
          years, rows, stack,
          // Save the type of the chart for nested access
          type: this.c('type'),
          // First year in this dataset
          begin: years[0],
          // Last year in this dataset
          end: years[years.length - 1],
          // Minimum value among all row
          min: d3.min(rows, c => d3.min(c.values, d => this.isStacked ? d.stack[0] : d.value)),
          // Maximum value among all row
          max: d3.max(rows, c => d3.max(c.values, d => d.value))
        };
      }
      years(hash) {
        // Extract year from a given object
        return _.chain(hash).keys().remove(y => !isNaN(y)).map(y => Number(y)).sort().value();
      }
      translate(left = 0, top = 0) {
        return selection => {
          return selection.attr('transform', `translate(${left}, ${top})`);
        };
      }
      isYearVisible(year) {
        // Year must strictly in bounds
        return year >= this.data.begin && year < this.data.end;
      }
      updateRulers() {
        const t = d3.transition().duration(this.c('transition'));
        const moveGroup = selection => {
          return selection.attr('transform', d => {
            const left = this.c('padding').left + this.xScale(d[0]);
            const top = this.c('padding').top;
            return `translate(${left}, ${top})`;
          });
        };
        let data = this.c('rulers');
        // Reove rulers that are under 0
        data = data.filter(d => this.isYearVisible(d[0]));
        // JOIN new data to rulers
        const rulers = this.base.select('.ruler').selectAll('.ruler__group').data(data, d => d[0]);
        // REMOVE old rulers
        rulers.exit().transition(t).style("opacity", 0).remove();
        // UPDATE old rulers
        rulers.transition(t).call(moveGroup).style('opacity', 1);
        rulers.selectAll('line').transition(t).attr('y2', this.height);
        // CREATE new rulers
        const groups = rulers.enter().append('g').classed('ruler__group', true);
        // Move the new ruler to the right position
        groups.call(moveGroup)
          .style('opacity', 0)
          .transition(t)
            .style('opacity', 1);
        groups.append('line')
          .attrs({x1: 0, y1: 0, x2: 0, y2: this.height});
        groups.append('text')
          .text(d => d[1])
          .attrs({dy: '.85em', dx: '1em'});
      }
      preDraw(data) {
        const p = this.c('padding');
        let min = this.c('min');
        let max = this.c('max');
        // Fixed minimum value
        if (min === null) {
          min = this.isLine ? Math.max(data.min - (data.max - data.min) * 1 / 8, 0) : data.min;
        }
        // Fixed maximum value
        if (max === null) {
          max = data.max + (data.max - data.min) * 1 / 8;
        }
        // Save the data before the chart is rendered
        this.data = data;
        // Set xScale according to the size of the container and the last year
        this.xScale.range([0, this.width]).domain([data.begin, data.end]);
        this.yScale.range([this.height, 0]).domain([min, max]);
        // Set sizes explicitely
        this.base.attr(_.pick(this, ['width', 'height']));
        this.base.classed('timeline__chart--highlights', this.hasHighligths);
        this.base.selectAll('.line, .area, .event').call(this.translate(p.left, p.top));
        // Update rulers according to the new scales
        this.updateRulers();
        // Remove existing bubble
        this.deleteBubbles();
        // Resize interaction layer
        this.base.select('.event')
          .attrs(_.pick(this, ['width', 'height']))
          .call(this.translate(p.left, p.top));
        // Select the existing X axis to update it
        this.base.select('.axis--x')
          .call(this.translate(p.left, this.height + p.top))
          // Animate the axis creation/update
          .transition()
            .duration(this.c('transition'))
            .call(d3.axisBottom(this.xScale)
              .tickValues(data.years.slice(1, -1))
              .tickSize(0).tickPadding(10));
        // Select the existing Y axis to update it
        this.base.select('.axis--y')
          .call(this.translate(p.left, p.top))
          // Animate the axis creation/update
          .transition()
            .duration(this.c('transition'))
            .call(d3.axisLeft(this.yScale)
              .tickSizeOuter(0)
              .tickFormat(this.formatY)
              .tickSize(-this.width))
              // After the transition ends
              .on("end", () => {
                // Add unit  to the last child
                this.base.select('.axis--y .tick:last-child text').text(d => {
                  return `${this.formatY(d)} ${this.c('yunit') || ''}`;
                });
              });
        // Changed text alignment on y axis
        this.base.selectAll('.axis--y text')
          .attr("y", 2)
          .attr("x", 0)
          .attr("dx", "4px")
          .attr("dy", "-1em")
          .style("text-anchor", "start");
      }
    }

    return Timeline;
  });
