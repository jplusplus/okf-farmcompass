angular.module('app')
  .service('Timeline', (TIMELINE_CONFIG, TIMELINE_COLORS) => {
    class Timeline extends Koto {
      constructor(svg) {
        super(svg);

        // define configs
        this.configs = TIMELINE_CONFIG;

        // Bind local method to this
        this.transitionValues = this.transitionValues.bind(this);
        this.isHighlighted = this.isHighlighted.bind(this);
        this.updateBubbles = this.updateBubbles.bind(this);
        this.updateLabel = this.updateLabel.bind(this);
        this.bindLayer = this.bindLayer.bind(this);
        this.colors = this.colors.bind(this);

        // Create scale
        this.xScale = d3.scaleLinear();
        this.yScale = d3.scaleLinear();

        // Create axis's layers
        this.base.append("g").attr("class", "axis axis--x");
        this.base.append("g").attr("class", "axis axis--y");
        // Create ruler layer
        this.base.append('g').attr('class', 'ruler');
        // Create shapes layers
        const area = this.base.append('g').attr('class', 'area');
        const line = this.base.append('g').attr('class', 'line');
        const label = this.base.append('g').attr('class', 'label');
        // Create interaction layer
        // this.base.append('rect').attr('class', 'event').on('mousemove', this.updateBubbles);
        // Create a bubbles layer
        this.base.append('g').attr('class', 'bubble')

        // Function to draw a line
        this.line = d3.line()
          .x(d => this.xScale(d.id))
          .y(d => this.yScale(this.isStacked ? d.stack[1] : d.value));

        // Function to draw an area
        this.area = d3.area()
          .x(d => this.xScale(d.id))
          .y0(d => this.isStacked ? this.yScale(d.stack[0]) : this.height)
          .y1(d => this.yScale(this.isStacked ? d.stack[1] : d.value));

        // Setup areas' layer
        this.layer('area', area, angular.extend(this.bindLayer(this.area), {
          dataBind: function dataBind(data) {
            // Disable on lines
            const rows = data.type === 'line' ? [] : data.rows.reverse();
            return this.selectAll('.area__group').data(rows, d => d.id);
          },
          insert: selection => {
            // Add the path to the current selection and clip its path the rect
            return selection.append('path')
                .classed('area__group', true)
                .classed('highlighted', this.isHighlighted)
                .style('opacity', d => this.isHighlighted(d) ? 1 : 0.3)
                .attr('d', d => this.area(d.values))
                .style('fill', d => chroma(this.colors(d)).hex());
          }
        }));
        // Setup lines' layer
        this.layer('line', line, angular.extend(this.bindLayer(this.line), {
          dataBind: function dataBind(data) {
            return this.selectAll('.line__group').data(data.rows, d => d.id);
          },
          insert: selection => {
            // Add the path to the current selection and clip its path the rect
            return selection.append('path')
                .classed('line__group', true)
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
      updateBubbles() {
        const t = d3.transition().duration(this.c('transition'));
        // Helper function to move all groups
        const moveGroup = selection => {
          return selection.attr('transform', d=> {
            const y = _.find(d.values, {id: year}).value;
            return `translate(0, ${this.yScale(y)})`;
          });
        };
        // Get the year for this x position
        const year = Math.round(this.xScale.invert(event.clientX));
        // The layer that holds bubbles
        const groups = this.base.select('.bubble')
          // Move the layer on the right year
          .call(this.translate(this.xScale(year), 0))
          // Create group for each row
          .selectAll('.bubble__group')
          // JOIN data to for the selected year
          .data(this.data.rows, d => d.id);
        // REMOVE old bubbles
        groups.exit().transition(t).style("opacity", 0).remove();
        // UPDATE current bubbles
        groups.call(moveGroup).style('opacity', 1);
        // CREATE new bubbles
        const entering = groups.enter().append('g').classed('bubble__group', true);
        // Add text label
        entering.call(moveGroup).append('text').text(d => d.id);
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
                .attr('width', 0)
                .attr('height', this.height)
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
            return this.yScale(this.isStacked ? row.stack[1] : row.value);
          });
      }
      isHighlighted(d) {
        return !this.hasHighligths || this.c('highlights').indexOf(d.id) > -1;
      }
      colors(d) {
        // Create color schema if undefined
        this._colors = this._colors || d3.scaleOrdinal(TIMELINE_COLORS);
        // return a different color if the element is not highlighted
        const color = this._colors(d.id);
        return this.isHighlighted(d) ? color : chroma(color).desaturate(2).hex();
      }
      smooth(hash) {
        // Iterate over the hash
        _.each(hash, (value, key) => {
          // Skip non-numeric keys and the first year
          if (!isNaN(key) && hash.hasOwnProperty(Number(key) - 1)) {
            // Every values to use in the moving average
            let values = [];
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
            id: _.values(hash).pop(),
            // Collect value for each year
            values: _.map(years, year => {
              return {
                value: hash[year],
                stack: _.find(stack[i], d => d.data.year === year),
                id: year
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
          max: d3.max(rows, c => d3.max(c.values, d => this.isStacked ? d.stack[1] : d.value))
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
      updateRulers(min, max) {
        const t = d3.transition().duration(this.c('transition'));
        const moveGroup = selection => {
          return selection.attr('transform', d => {
            const left = this.c('padding').left + this.xScale(d[0]);
            const top = this.c('padding').top;
            return `translate(${left}, ${top})`;
          });
        };
        var data = this.c('rulers');
        // Reove rulers that are under 0
        data = data.filter(d => this.isYearVisible(d[0]));
        // JOIN new data to rulers
        const rulers = this.base.select('.ruler').selectAll('.ruler__group').data(data, d => d[0]);
        // REMOVE old rulers
        rulers.exit().transition(t).style("opacity", 0).remove();
        // UPDATE old rulers
        rulers.transition(t).call(moveGroup).style('opacity', 1);
        rulers.selectAll('line').transition(t).attr('y2', this.yScale(min))
        // CREATE new rulers
        const groups = rulers.enter().append('g').classed('ruler__group', true)
        // Move the new ruler to the right position
        groups.call(moveGroup)
          .style('opacity', 0)
          .transition(t)
            .style('opacity', 1)
        groups.append('line')
          .attr('x1', 0)
          .attr('y1', 0)
          .attr('x2', 0)
          .attr('y2', this.yScale(min))
        groups.append('text')
          .text(d => d[1])
          .attr('dy', '.85em')
          .attr('dx', '1em')
      }
      preDraw(data) {
        const p = this.c('padding');
        var min = this.c('min');
        var max = this.c('max');
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
        this.base.attr({width: this.width, height: this.height});
        this.base.classed('timeline__chart--highlights', this.hasHighligths);
        this.base.selectAll('.line, .area, .label').call(this.translate(p.left, p.top));
        // Update rulers according to the new scales
        this.updateRulers(min, max);
        // Resize interaction layer
        this.base.select('.event')
          .attr('x', 0)
          .attr('y', 0)
          .attr('width', this.width)
          .attr('height', this.height)
          .call(this.translate(p.left, p.top))
        // Select the existing X axis to update it
        this.base.select('.axis--x')
          .call(this.translate(p.left, this.height + p.top))
          // Animate the axis creation/update
          .transition()
            .duration(this.c('transition'))
            .call(d3.axisBottom(this.xScale)
              .tickValues(data.years.slice(1, -1))
              .tickFormat(d3.format(""))
              .tickSize(0).tickPadding(10));
        // Select the existing Y axis to update it
        this.base.select('.axis--y')
          .call(this.translate(p.left, p.top))
          // Animate the axis creation/update
          .transition()
            .duration(this.c('transition'))
            .call(d3.axisLeft(this.yScale)
              .tickSizeOuter(0)
              .tickSize(-this.width))
              // After the transition ends
              .on("end", () => {
                // Add unit  to the last child
                this.base.select('.axis--y .tick:last-child text').text(d => {
                  return `${d} ${this.c('yunit') || ''}`;
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
