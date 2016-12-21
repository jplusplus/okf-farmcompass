class Timeline extends Koto {
  constructor(svg){
    super(svg)
    // define configs
    this.configs = {
      height: {
        name: 'height',
        description: 'The height of the chart.',
        value: 500,
        type: 'number',
        units: 'px',
        category: 'Size'
      },
      width: {
        name: 'width',
        description: 'The width of the chart.',
        value: 800,
        units: 'px',
        type: 'number',
        category: 'Size'
      },
      padding: {
        name: 'padding',
        description: 'Space between the chart and the SVG borders.',
        type: 'object',
        units: 'px',
        category: 'Size',
        value: { top: 60, bottom: 40, left: 60, right: 20 }
      },
      transition: {
        name: 'transition',
        description: 'Transition delay.',
        type: 'number',
        units: 'ms',
        value: 700
      },
      smoothing: {
        name: 'smoothing',
        description: 'Moving average amplitude',
        type: 'number',
        value: 0
      }
    };
    // Bind local method to this
    this.transitionValues = this.transitionValues.bind(this);
    // Create scale
    let xScale = this.xScale = d3.scaleLinear();
    let yScale = this.yScale = d3.scaleLinear();
    // Function to draw the line
    let path = this.path = d3.line().x(d => xScale(d.id)).y(d => yScale(d.value));
    // Create axis's layers
    this.base.append("g").attr("class", "axis axis--x");
    this.base.append("g").attr("class", "axis axis--y");
    // Setup chart's layers
    this.layer('lines', this.base.append('g').attr('class',' lines'), {
      dataBind: function(data) {
        return this.selectAll('path').data(data.rows, d => d.id)
      },
      insert: function() {
        return this.append('path').attr('d', d => path(d.values));
      },
      events: {
        'enter': selection => {
          let length = 0;
          // This selection may target several elements
          selection.each(function(){
            // Take the longest path
            length = Math.max(length, d3.select(this).node().getTotalLength());
          })
          // Selection refer to a path
          selection
            .attr("stroke-dasharray", length + " " + length)
            .attr("stroke-dashoffset", length)
            .transition()
              .duration(this.config('transition'))
              .attr("stroke-dashoffset", 0);
        },
        'merge:transition':  t => t.call(this.transitionValues),
        'update:transition': t => t.call(this.transitionValues),
        'exit:transition':   t => t.duration(this.config('transition')).style('opacity', 0).remove()
      }
    })
  }
  smooth(hash) {
    // Iterate over the hash
    _.each(hash, (value, key)=> {
      // Skip non-numeric keys
      if(!isNaN(key)) {
        // Every values to use in the moving average
        let values = [];
        let smoothing = this.config('smoothing');
        // Go backward and forward the current year
        for(let i = -smoothing; i <= smoothing; i++) {
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
  transitionValues(selection) {
    selection.duration(this.config('transition')).attr("d", d => this.path(d.values));
  }
  preDraw(data) {
    let padding = this.config('padding');
    let [width, height] = [
      this.config('width') - padding.left - padding.right,
      this.config('height') - padding.top - padding.bottom
    ];
    // Set xScale according to the size of the container and the last year
    this.xScale.range([0, width]).domain([data.begin, data.end]);
    this.yScale.range([height, 0]).domain([data.min, data.max]);
    // Set sizes explicitely
    this.base.attr({ width, height });
    this.base.select('.lines').call(this.translate(padding.left, padding.top));
    // Select the existing X axis to update it
    this.base.select('.axis--x')
      .call(this.translate(padding.left, height + padding.top))
      // Animate the axis creation/update
      .transition()
        .duration(this.config('transition'))
        .call(d3.axisBottom(this.xScale).tickFormat(d3.format("")))
    // Select the existing Y axis to update it
    this.base.select('.axis--y')
      .call(this.translate(padding.left, padding.top))
      // Animate the axis creation/update
      .transition()
        .duration(this.config('transition'))
        .call(d3.axisLeft(this.yScale).tickSizeOuter(0))
  }
}
