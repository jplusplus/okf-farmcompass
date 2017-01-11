angular
  .module('app')
  .directive('youtubeBackgroundVideo', youtubeBackgroundVideoDirective);

/** @ngInject */
function youtubeBackgroundVideoDirective() {
  return  {
    restrict: 'A',
    link: (scope, el, attr) => {
      $(el).addClass('youtube-background-video').YTPlayer({
        fitToBackground: true,
        videoId: attr.youtubeBackgroundVideo
      });
    }
  }
}
