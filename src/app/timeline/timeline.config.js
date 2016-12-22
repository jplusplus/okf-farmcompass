const TIMELINE_COLORS = [
  '#8c510a',
  '#bf812d',
  '#dfc27d',
  '#f6e8c3',
  '#f5f5f5',
  '#c7eae5',
  '#80cdc1',
  '#35978f',
  '#01665e'
];

const TIMELINE_CONFIG = {
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
    value: { top: 20, bottom: 40, left: 20, right: 20 }
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
    setter: function (newValue){
      return newValue.toLowerCase().replace(/\s/, '-');
    }
  },
  yunit: {
    name: 'yunit',
    description: 'Unit of Y axis',
    type: 'string',
    value: ''
  }
};
