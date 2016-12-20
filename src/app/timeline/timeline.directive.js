angular
  .module('app')
  .directive('timeline', function() {
    return {
      restrict: 'E',
      scope: {
        meta: '=',
        step: '='
      },
      replace: true,
      template: '<div class="timeline"><svg class="timeline__chart"></svg></div>',
      link: (scope, element, attrs) => {
        // Create a SVG and append it to the element
        let svg = d3.select(element[0]).select('svg');
        // Get SVG sizes
        let { width, height } = svg.node().getBoundingClientRect();
        // Create a Timeline instance
        let timeline = new Timeline(svg);
        // Get last available data for the given step
        let data = s => s >= 0 ? scope.meta[s].data || data( s - 1) : [];
        // Use dynamic sizes
        timeline.config({ width, height });
        // Watch for change on the step attribute
        scope.$watch('step', function(step) {
          // Don't go too far!
          if(step < scope.meta.length){
            // Configure the chart with the new step
            timeline.draw( data(step) );
          }
        });
      }
    };
  });
