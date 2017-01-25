angular.module("app").run(["$templateCache",function(n){n.put("app/main/main.html",'<div class="main">\n  <ui-view>\n    <div class="main__intro" ui-sref="main.step({ index: 0 })">\n      <div class="main__intro__bg" youtube-background-video="9pYqdGqyLdU">\n        <!-- Play \'9pYqdGqyLdU\' -->\n      </div>\n      <div class="main__intro__heading">\n        <div class="main__intro__heading__start">\n          <span ng-bind-html="\'main.intro.read-story\' | translate | unsafe"></span>\n          <i class="fa fa-play-circle"></i>\n        </div>\n        <h1 class="main__intro__heading__title" ng-bind-html="\'main.intro.headline\' | translate | unsafe"></h1>\n        <p class="main__intro__heading__abstract lead" ng-bind-html="\'main.intro.abstract\' | translate | unsafe"></p>\n      </div>\n    </div>\n  </ui-view>\n</div>\n'),n.put("app/main/about/about.html",'<div class="main__about">\n  <h1 class="main__about__title">\n    {{ \'main.about.title\' | translate }}\n  </h1>\n  <div class="main__about__content" ng-bind-html="\'main.about.content\' | translate | unsafe"></div>\n  <a ui-sref="main.step">\n    <i class="fa fa-arrow-left"></i>\n    Back to the story\n  </a>\n</div>\n'),n.put("app/main/step/step.html",'<div class="main__step">\n  <div class="main__step__heading">\n    <h2 class="main__step__heading__title">\n      {{ $ctrl.current().slidetitle | i18n }}\n    </h2>\n    <div class="main__step__heading__controls">\n      <a ui-sref="main.about" class="btn btn-link btn-sm main__step__heading__controls__about">\n        {{ \'main.step.about\' | translate}}\n      </a>\n      <div class="btn-group btn-group-sm">\n        <button class="btn btn-primary btn-sm" ng-click="$ctrl.previous()" ng-disabled="$ctrl.isFirst()" ng-attr-title="{{ \'main.step.previous\' | translate }}">\n          <span class="sr-only">{{ \'main.step.previous\' | translate }}</span>\n          <i class="fa fa-fw fa-chevron-left"></i>\n        </button>\n        <button class="btn btn-primary btn-sm" ng-click="$ctrl.next()" ng-disabled="$ctrl.isOutro()" ng-attr-title="{{ \'main.step.next\' | translate }}">\n          <span class="sr-only">{{ \'main.step.next\' | translate }}</span>\n          <i class="fa fa-fw fa-chevron-right"></i>\n        </button>\n      </div>\n    </div>\n    <div class="main__step__heading__progress" ng-style="{ width: $ctrl.progress() + \'%\' }"></div>\n  </div>\n  <div class="main__step__wrapper" ng-swipe-right="$ctrl.previous()" ng-swipe-left="$ctrl.next()">\n    <div class="main__step__description lead">\n      <span ng-bind-html="$ctrl.current().slidetext | i18n | unsafe"></span>\n    </div>\n    <timeline meta="$ctrl.meta" step="$ctrl.step" ng-click="$ctrl.next()"></timeline>\n  </div>\n  <div ng-if="$ctrl.isOutro()" class="main__step__outro">\n    <div class="main__step__outro__backdrop" ng-click="$ctrl.previous()"></div>\n    <div class="main__step__outro__content">\n      <div class="row">\n        <div class="col-sm-8 lead" ng-bind-html="\'main.step.outro.content\' | translate | unsafe"></div>\n        <div class="col-sm-4 main__step__outro__content__sidebar">\n          <img src="images/vroom.svg" class="img-fluid w-100 pl-3 pr-3 pb-1 pt-0 hidden-xs-down" alt="">\n          <p class="text-xs-center">\n            {{ \'main.step.outro.get-link\' | translate }}\n          </p>\n          <div class="input-group mb-1">\n            <input type="text" readonly="readonly" value="{{ $ctrl.location }}" class="form-control">\n            <div class="input-group-btn">\n              <button class="btn btn-primary" ui-zeroclip zeroclip-text="{{ $ctrl.location }}">\n                <i class="fa fa-copy fa-fw"></i>\n              </button>\n            </div>\n          </div>\n          <button class="btn btn-primary btn-block" ui-sref="main.step({ index: 0 })">\n            <i class="fa fa-repeat fa-fw"></i>\n            {{ \'main.step.outro.play-again\' | translate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n')}]);
//# sourceMappingURL=maps/templateCacheHtml-273e2c94bf.js.map
