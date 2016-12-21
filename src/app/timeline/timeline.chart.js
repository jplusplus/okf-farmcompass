class Timeline extends Koto {
  constructor(svg){
    super(svg)
    // define configs
    this.configs = TIMELINE_CONFIG;
    // Bind local method to this
    this.transitionValues = this.transitionValues.bind(this);
    this.bindLayer = this.bindLayer.bind(this);
    // Create scale
    let xScale = this.xScale = d3.scaleLinear();
    let yScale = this.yScale = d3.scaleLinear();
    // Create axis's layers
    this.base.append("g").attr("class", "axis axis--x");
    this.base.append("g").attr("class", "axis axis--y");
    // Function to draw the line
    this.line = d3.line().x(d => this.xScale(d.id)).y(d => this.yScale(d.value));
    this.area = d3.area().x(d => this.xScale(d.id)).y1(d => this.yScale(d.value))
    // Setup areas' layer
    this.layer('area', this.base.append('g').attr('class', 'area'), angular.extend(this.bindLayer(this.area), {
      dataBind: function(data) {
        if(data.type !== 'line') {;
          return this.selectAll('path').data(data.rows, d => d.id);
        } else {
          return this.selectAll('path').data([], d => d.id);
        }
      }
    }));
    // Setup lines' layer
    this.layer('line', this.base.append('g').attr('class', 'line'), angular.extend(this.bindLayer(this.line), {
      dataBind: function(data) {
        return this.selectAll('path').data(data.rows, d => d.id);
      }
    }));
  }
  bindLayer(path) {
    return {
      insert: function() {
        // Add the path to the current selection and clip its path the rect
        return this.append('path').attr('d', d => path(d.values))
      },
      events: {
        'enter': selection => {
          // Create a unique id for this element clip
          let id = _.uniqueId('rectClip-');
          // Add the clip to the current selection
          let clipRect = this.base.append("clipPath").attr("id", id).append("rect");
          // Clip path to the current selection
          selection.attr('clip-path', `url(#${id})`);
          // Apply the transition on the clip's rect
          clipRect
            .attr('width', 0)
            .attr('height', this.height)
            .transition()
              .duration(this.c('transition'))
              .attr('width',this.width)
              // After the transition ends
              .on("end", function(){
                // Remove the clip-path from the selection
                selection.attr('clip-path', null);
                // And remove its holding element
                d3.select(this.parentNode).remove();
              })
        },
        'merge:transition':  t => t.call(this.transitionValues(path)),
        'update:transition': t => t.call(this.transitionValues(path)),
        'exit:transition':   t => t.duration(this.c('transition')).style('opacity', 0).remove()
      }
    }
  }
  get width() {
    return this.c('width') - this.c('padding').left - this.c('padding').right;
  }
  get height() {
    return this.c('height') - this.c('padding').top - this.c('padding').bottom;
  }
  smooth(hash) {
    // Iterate over the hash
    _.each(hash, (value, key)=> {
      // Skip non-numeric keys
      if(!isNaN(key)) {
        // Every values to use in the moving average
        let values = [];
        // Go backward and forward the current year
        for(let i = -this.c('smoothing'); i <= this.c('smoothing'); i++) {
          // Build the hash key to the year
          let year = (1 * key) + i;
          // Since the mean function ignore undefined element, we do not check
          // that there is a value for the year!
          values.push(hash[year]);
        }
        // Calculate the mean for all values
        hash[key] = d3.mean(values);
      }
    });
    return hash
  }
  transform(data) {
    // Extract years from the first line
    let years = this.years(data[0]);
    // Create an object for each group
    let rows = _.reduce(data, (res, hash)=>{
      // Smooth the given object
      hash = this.smooth(hash);
      // Create a new object as row, describing this group
      res.push({
        // The last element of this hash is the group id
        id: _.values(hash).pop(),
        // Collect value for each year
        values: _.map(years, (year)=>{
          return {
            value: hash[year],
            id: year
          };
        })
      })
      return res;
    }, []);
    // Return an object with several precalculated fields
    return {
      years, rows,
      // Save the type of the chart for nested access
      type: this.c('type'),
      // First year in this dataset
      begin: years[0],
      // Last year in this dataset
      end: years[years.length -1],
      // Minimum value among all row
      min: d3.min(rows, c => d3.min(c.values, d => d.value)),
      // Maximum value among all row
      max: d3.max(rows, c => d3.max(c.values, d => d.value))
    };
  }
  years(hash) {
    // Extract year from a given object
    return _.chain(hash).keys().remove(y => !isNaN(y)).map(y => 1*y).sort().value()
  }
  translate(left = 0, top = 0) {
    return function(selection){
      return selection.attr('transform', `translate(${left}, ${top})`);
    }
  }
  transitionValues(path) {
    return selection => {
      selection.duration(this.c('transition')).attr("d", d => path(d.values));
    }
  }
  preDraw(data) {
    let p = this.c('padding');
    // Set xScale according to the size of the container and the last year
    this.xScale.range([0, this.width]).domain([data.begin, data.end]);
    this.yScale.range([this.height, 0]).domain([data.min, data.max]);
    // Update area according to height
    this.area.y0(this.height);
    // Set sizes explicitely
    this.base.attr({ width: this.width, height: this.height });
    this.base.selectAll('.line, .area').call(this.translate(p.left, p.top));
    // Select the existing X axis to update it
    this.base.select('.axis--x')
      .call(this.translate(p.left, this.height + p.top))
      // Animate the axis creation/update
      .transition()
        .duration(this.c('transition'))
        .call(d3.axisBottom(this.xScale).tickFormat(d3.format("")))
    // Select the existing Y axis to update it
    this.base.select('.axis--y')
      .call(this.translate(p.left, p.top))
      // Animate the axis creation/update
      .transition()
        .duration(this.c('transition'))
        .call(d3.axisLeft(this.yScale).tickSizeOuter(0))
  }
}
