angular
  .module('app')
  .constant('TIMELINE_COLORS', chroma.brewer.Spectral)
  .constant('TIMELINE_CONFIG', {
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
      value: {top: 20, bottom: 40, left: 20, right: 20}
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
    },
    type: {
      name: 'type',
      description: 'Type of the visualization',
      type: 'string',
      value: 'line',
      setter: newValue => {
        return _.kebabCase(newValue);
      }
    },
    yunit: {
      name: 'yunit',
      description: 'Unit of Y axis',
      type: 'string',
      value: ''
    },
    min: {
      name: 'min',
      description: 'Force the minimum value on the y axis',
      type: 'number',
      value: null
    },
    max: {
      name: 'max',
      description: 'Force the maximum value on the y axis',
      type: 'number',
      value: null
    },
    highlights: {
      name: 'highlights',
      type: 'array',
      value: []
    },
    rulers: {
      name: 'rulers',
      description: 'A hash of rulers to display alongside the x axis',
      type: 'array',
      value: [
        [2004, '10 new countries join the EU'],
        [2007, 'Romania and Bulgaria join'],
        [2013, 'Croatia joins']
      ]
    }
  });
