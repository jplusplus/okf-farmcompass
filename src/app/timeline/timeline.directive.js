angular
  .module('app')
  .directive('timeline', ($window, $filter, $translate, Timeline) => {
    return {
      restrict: 'E',
      scope: {
        meta: '=',
        step: '='
      },
      replace: true,
      template: '<div class="timeline"><svg class="timeline__chart"></svg></div>',
      link: (scope, element) => {
        return new class {
          constructor() {
            // Get i18n filter function
            this.i18n = $filter('i18n');
            // Resize the parent element to fit to the screen
            this.fit();
            // Create a SVG and append it to the element
            this.svg = d3.select(element[0]).select('svg');
            // Create a Timeline instance
            this.timeline = new Timeline(this.svg);
            // Use dynamic sizes
            this.timeline.config(this.bounding());
            // Watch for change on the step attribute
            scope.$watch('step', step => {
              // Don't go too far!
              if (step < scope.meta.length) {
                // Draw the timeline at a given step
                this.draw(step);
              }
            });
            // Watch for windows resize
            angular.element($window).on(this.windowResizeEvent, _.throttle(this.resize.bind(this), 150));
            // Watch for scope destruction
            scope.$on('$destroy', () => angular.element($window).off(this.windowResizeEvent));
          }
          bounding() {
            // Get SVG sizes
            return _.pick(this.svg.node().getBoundingClientRect(), ['width', 'height']);
          }
          // Get last available data for the given step
          data(step) {
            return step >= 0 ? scope.meta[step].data || this.data(step - 1) : [];
          }
          smoothing(step) {
            return (scope.meta[step] || {}).smoothing || 0;
          }
          draw(step) {
            this.timeline.config({
              yunit: this.i18n(scope.meta[step].yaxislabel),
              highlights: this.i18n(scope.meta[step].highlights),
              smoothing: this.smoothing(step),
              rulers: [
                [2004, $translate.instant('timeline.rulers.10-new-country')],
                [2007, $translate.instant('timeline.rulers.romania-bulgaria')],
                [2013, $translate.instant('timeline.rulers.croatia')]
              ],
              type: scope.meta[step].charttype,
              min: scope.meta[step].min,
              max: scope.meta[step].max
            });
            // Configure the chart with the new step
            this.timeline.draw(this.data(step));
          }
          resize() {
            // Parent element must fit to the new window's height
            this.fit();
            // Use dynamic sizes
            this.timeline.config(this.bounding());
            // And redraw at the current step
            this.draw(scope.step);
          }
          fit() {
            angular.element(element).css('height', angular.element(window).height() - angular.element(element).offset().top);
          }
          // Uniq event on window element to destroy it with the directive
          get windowResizeEvent() {
            // Create the event tken only once
            this._windowResizeEvent = this._windowResizeEvent || (`${_.uniqueId()} resize`);
            // Simply return the event string
            return this._windowResizeEvent;
          }
        };
      }
    };
  });
