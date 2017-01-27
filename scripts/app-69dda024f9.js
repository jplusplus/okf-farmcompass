"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function unsafeFilter(t){return t.trustAsHtml}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i18nFilter(t){return function(e){return e[t.use()]||_(e).values().first()}}function youtubeBackgroundVideoDirective(){return{restrict:"A",link:function(t,e,n){$(e).addClass("youtube-background-video").YTPlayer({fitToBackground:!0,videoId:n.youtubeBackgroundVideo})}}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function routesConfig(t,e,n){n.html5Mode(!1),e.otherwise("/en_BE"),t.state("main",{url:"/:language",component:"main",resolve:{use:["$translate","$stateParams",function(t,e){"ngInject";return t.use(e.language)}]}}).state("main.about",{component:"main.about",url:"/about"}).state("main.step",{component:"main.step",params:{index:{value:null,dynamic:!0}},resolve:{meta:["$http",function(t){"ngInject";return t.get("data/meta.json",{cache:!0}).then(function(t){return t.data})}]}}).state("main.step.outro",{})}function gaRun(t,e,n){t.onSuccess({},function(t,i){var a=t.targetState().identifier(),r=_.reduce(t.targetState().params(),function(t,e,n){return t.addQueryParam(n,e)},new Uri(n.url()));e.ga("send","pageview",{name:a.name||a,page:r.toString()})})}function translateConfig(t,e,n){"ngInject";e.localeLocationPattern("//code.angularjs.org/1.2.20/i18n/angular-locale_{{locale}}.js"),n.setZcConf({swfPath:"bower_components/zeroclipboard/dist/ZeroClipboard.swf"}),t.useStaticFilesLoader({prefix:"locales/",suffix:".json"}).registerAvailableLanguageKeys(["en_BE","fr_FR"],{"*":"en_BE",fr:"fr_FR","fr-FR":"fr_FR",fr_FR:"fr_FR","fr-BE":"fr_FR",fr_BE:"fr_FR","fr-CA":"fr_FR",fr_CA:"fr_FR"}).determinePreferredLanguage().fallbackLanguage("en_BE").useLocalStorage().useSanitizeValueStrategy(null)}unsafeFilter.$inject=["$sce"],i18nFilter.$inject=["$translate"],routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],gaRun.$inject=["$transitions","$window","$location"],translateConfig.$inject=["$translateProvider","tmhDynamicLocaleProvider","uiZeroclipConfigProvider"],angular.module("app",["ngAnimate","ngTouch","ngCookies","ui.router","cfp.hotkeys","pascalprecht.translate","tmh.dynamicLocale","zeroclipboard"]);var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),MainStepController=function(){function t(e,n,i,a,r,s,l){"ngInject";_classCallCheck(this,t),angular.extend(this,{$state:i,$scope:a,$sce:s,$window:l}),this.uiOnParamsChanged(e),this.use=n.use,this.next=this.next.bind(this),this.previous=this.previous.bind(this),this.current=this.current.bind(this),this.isFirst=this.isFirst.bind(this),this.isLast=this.isLast.bind(this),this.progress=this.progress.bind(this),this.current=this.current.bind(this),r.add({combo:["left"],callback:this.previous}),r.add({combo:["space","right"],callback:this.next})}return t.$inject=["$stateParams","$translate","$state","$scope","hotkeys","$sce","$window"],_createClass(t,[{key:"uiOnParamsChanged",value:function(t){this._step=Number(t.index||0)}},{key:"next",value:function(){this.isLast()?this.$state.go("main.step.outro"):this.$state.go("main.step",{index:this.step+1})}},{key:"previous",value:function(){this.isOutro()?this.$state.go("main.step"):this.isFirst()?this.$state.go("main"):this.step>0&&this.$state.go("main.step",{index:this.step-1})}},{key:"isFirst",value:function(){return 0===this.step}},{key:"isLast",value:function(){return this.step===this.meta.length-1}},{key:"isOutro",value:function(){return this.$state.is("main.step.outro")}},{key:"current",value:function(){return this.meta[this.step]}},{key:"progress",value:function(){return(this.step+this.isOutro())/this.meta.length*100}},{key:"trustAs",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"HTML",e=arguments[1];return this.$sce.trustAs(this.$sce[t],e)}},{key:"step",get:function(){return this._step}},{key:"location",get:function(){return this.$window.location.href}}]),t}();angular.module("app").component("main.step",{templateUrl:"app/main/step/step.html",controller:MainStepController,bindings:{meta:"<"}}),angular.module("app").filter("unsafe",unsafeFilter);var MainAboutController=function t(){"ngInject";_classCallCheck(this,t)};angular.module("app").component("main.about",{templateUrl:"app/main/about/about.html",controller:MainAboutController}),angular.module("app").filter("i18n",i18nFilter),angular.module("app").directive("youtubeBackgroundVideo",youtubeBackgroundVideoDirective);var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();angular.module("app").directive("timeline",["$window","$filter","$translate","Timeline",function(t,e,n,i){return{restrict:"E",scope:{meta:"=",step:"="},replace:!0,template:'<div class="timeline"><svg class="timeline__chart"></svg></div>',link:function(a,r){return new(function(){function s(){var n=this;_classCallCheck(this,s),this.i18n=e("i18n"),this.fit(),this.svg=d3.select(r[0]).select("svg"),this.timeline=new i(this.svg),this.timeline.config(this.bounding()),a.$watch("step",function(t){t<a.meta.length&&n.draw(t)}),angular.element(t).on(this.windowResizeEvent,_.throttle(this.resize.bind(this),150)),a.$on("$destroy",function(){return angular.element(t).off(n.windowResizeEvent)})}return _createClass(s,[{key:"bounding",value:function(){return _.pick(this.svg.node().getBoundingClientRect(),["width","height"])}},{key:"data",value:function(t){return t>=0?a.meta[t].data||this.data(t-1):[]}},{key:"smoothing",value:function(t){return(a.meta[t]||{}).smoothing||0}},{key:"draw",value:function(t){this.timeline.config({yunit:this.i18n(a.meta[t].yaxislabel),highlights:this.i18n(a.meta[t].highlights),smoothing:this.smoothing(t),rulers:[[2004,n.instant("timeline.rulers.10-new-country")],[2007,n.instant("timeline.rulers.romania-bulgaria")],[2013,n.instant("timeline.rulers.croatia")]],type:a.meta[t].charttype,min:a.meta[t].min,max:a.meta[t].max}),this.timeline.draw(this.data(t))}},{key:"resize",value:function(){this.fit(),this.timeline.config(this.bounding()),this.draw(a.step)}},{key:"fit",value:function(){angular.element(r).css("height",angular.element(window).height()-angular.element(r).offset().top)}},{key:"windowResizeEvent",get:function(){return this._windowResizeEvent=this._windowResizeEvent||_.uniqueId()+" resize",this._windowResizeEvent}}]),s}())}}}]),angular.module("app").constant("TIMELINE_COLORS",chroma.brewer.Spectral).constant("TIMELINE_CONFIG",{height:{name:"height",description:"The height of the chart.",value:500,type:"number",units:"px",category:"Size"},width:{name:"width",description:"The width of the chart.",value:800,units:"px",type:"number",category:"Size"},padding:{name:"padding",description:"Space between the chart and the SVG borders.",type:"object",units:"px",category:"Size",value:{top:20,bottom:40,left:20,right:20}},transition:{name:"transition",description:"Transition delay.",type:"number",units:"ms",value:700},smoothing:{name:"smoothing",description:"Moving average amplitude",type:"number",value:0},type:{name:"type",description:"Type of the visualization",type:"string",value:"line",setter:function(t){return _.kebabCase(t)}},yunit:{name:"yunit",description:"Unit of Y axis",type:"string",value:""},min:{name:"min",description:"Force the minimum value on the y axis",type:"number",value:null},max:{name:"max",description:"Force the maximum value on the y axis",type:"number",value:null},highlights:{name:"highlights",type:"array",value:[]},rulers:{name:"rulers",description:"A hash of rulers to display alongside the x axis",type:"array",value:[[2004,"10 new countries join the EU"],[2007,"Romania and Bulgaria join"],[2013,"Croatia joins"]]}});var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();angular.module("app").service("Timeline",["TIMELINE_CONFIG","TIMELINE_COLORS","$translate","$filter",function(t,e,n,i){var a=function(a){function r(e){_classCallCheck(this,r);var n=_possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));n.configs=t,n.transitionValues=n.transitionValues.bind(n),n.isHighlighted=n.isHighlighted.bind(n),n.updateBubbles=n.updateBubbles.bind(n),n.resetBubbles=n.resetBubbles.bind(n),n.deleteBubbles=n.deleteBubbles.bind(n),n.highlightGroups=n.highlightGroups.bind(n),n.updateLabel=n.updateLabel.bind(n),n.bindLayer=n.bindLayer.bind(n),n.colors=n.colors.bind(n),n.categoryColors=n.categoryColors.bind(n),n.xScale=d3.scaleLinear(),n.yScale=d3.scaleLinear(),n.base.append("g.axis.axis--x"),n.base.append("g.axis.axis--y"),n.base.append("g.ruler");var i=n.base.append("g.area"),a=n.base.append("g.line"),s=n.base.append("g.label");return n.base.append("rect.event").on("mousemove",n.updateBubbles).on("mouseout",n.resetBubbles),n.base.append("g.bubble"),n.base.append("filter#dropshadow").attrs({height:"130%"}).append("feGaussianBlur").attrs({"in":"SourceAlpha",stdDeviation:2}).select(n.parent).append("feOffset").attrs({dx:0,dy:2,result:"offsetblur"}).select(n.parent).append("feFlood").attr("flood-opacity",.4).select(n.parent).append("feComposite").attrs({in2:"offsetblur",operator:"in"}).select(n.parent).append("feMerge").append("feMergeNode").select(n.parent).append("feMergeNode").attr("in","SourceGraphic"),n.line=d3.line().x(function(t){return n.xScale(t.id)}).y(function(t){return n.yScale(t.value)}),n.area=d3.area().x(function(t){return n.xScale(t.id)}).y0(function(t){return n.isStacked?n.yScale(t.stack[0]):n.height}).y1(function(t){return n.yScale(t.value)}),n.layer("area",i,angular.extend(n.bindLayer(n.area),{dataBind:function(t){var e="line"===t.type?[]:t.rows.reverse();return this.selectAll(".area__group").data(e,function(t){return t.id})},insert:function(t){return t.append("path.area__group").classed("highlighted",n.isHighlighted).style("opacity",function(t){return n.isHighlighted(t)?1:.3}).attr("d",function(t){return n.area(t.values)}).style("fill",n.colors)}})),n.layer("line",a,angular.extend(n.bindLayer(n.line),{dataBind:function(t){return this.selectAll(".line__group").data(t.rows,function(t){return t.id})},insert:function(t){return t.append("path.line__group").classed("highlighted",n.isHighlighted).style("opacity",function(t){return n.isHighlighted(t)?1:.3}).attr("d",function(t){return n.line(t.values)}).style("stroke",n.colors)}})),n.layer("label",s,{dataBind:function(t){return this.selectAll(".label text").data(t.rows,function(t){return t.id})},insert:function(t){return t.append("text").text(function(t){return t.id}).classed("highlighted",n.isHighlighted).attr("text-anchor","end").attr("dy","-1em").attr("dx","-1em").call(n.updateLabel).style("opacity",0)},events:{"enter:transition":function(t){return t.duration(n.c("transition")).style("opacity",1)},update:function(t){return t.classed("highlighted",n.isHighlighted)},"update:transition":function(t){return t.duration(n.c("transition")).call(n.updateLabel)},merge:function(t){return t.classed("highlighted",n.isHighlighted)},"merge:transition":function(t){return t.duration(n.c("transition")).call(n.updateLabel)},"exit:transition":function(t){return t.duration(n.c("transition")).style("opacity",0).remove()}}}),n}return _inherits(r,a),_createClass(r,[{key:"formatY",value:function(t){return i("number")(t,0)}},{key:"updateBubbles",value:function(){var t=this,e=function(e){return e.attr("transform",function(e){return"translate("+t.c("padding").left+", "+t.yScale(e.value)+")"}),e.select("text").attr("text-anchor",t.half<r?"end":"start").each(_.partial(function(t){var n=d3.select(this);n.selectAll("*").remove(),n.tspans(function(e){return[e.year,e.id,t.formatY(e.value)]});var i=n.node().getBBox();n.attrs({y:t.c("padding").top});var a=2;e.select("rect").attrs({x:i.x-2*a,y:i.y-a,width:i.width+4*a,height:i.height+2*a})},t)),e},n=this.yScale.invert(d3.event.layerY),i=Math.round(this.xScale.invert(d3.event.layerX)),a=_.first(this.data.years.sort(function(t,e){return Math.abs(i-t)-Math.abs(i-e)})),r=this.xScale(a),s=_.chain(this.data.rows).map(function(t){var e=_.find(t.values,{id:a});return angular.extend(t,{year:a,value:e.value,hover:n>=e.stack[0]&&n<=e.stack[1]})}).thru(function(e){return e=t.isStacked?_.filter(e,{hover:!0}):e.sort(function(t,e){return Math.abs(n-t.value)-Math.abs(n-e.value)})}).first().castArray().compact().value(),l=this.base.select(".bubble").call(this.translate(r,this.c("padding").top)).selectAll(".bubble__group").data(s,function(t){return t.id});l.exit().remove(),l.call(e);var o=l.enter().append("g").classed("bubble__group",!0);o.append("circle").attrs({cx:0,cy:0,r:5,stroke:this.categoryColors,"stroke-width":5,fill:function(e){var n=t.categoryColors(e);return chroma.mix(n,t.contrast(n))}}),o.append("text").style("fill",_.flow(this.categoryColors,this.contrast)),o.insert("rect",":first-child").attrs({rx:2,ry:2}).style("fill",this.categoryColors),o.attr("fill","red").style("filter","url(#dropshadow)").call(e),this.highlightGroups(_.map(s,"id"))}},{key:"resetBubbles",value:function(){this.deleteBubbles(),this.highlightGroups()}},{key:"deleteBubbles",value:function(){this.base.selectAll(".bubble__group").remove()}},{key:"parent",value:function(){return this.parentNode}},{key:"bindLayer",value:function(t){var e=this;return{events:{enter:function(t){var n=_.uniqueId("rectClip-"),i=e.base.append("clipPath").attr("id",n).append("rect");t.attr("clip-path","url(#"+n+")"),i.attrs({width:0,height:e.height}).transition().duration(e.c("transition")).attr("width",e.width).on("end",function(){t.attr("clip-path",null),d3.select(this.parentNode).remove()})},merge:this.transitionValues(t),update:this.transitionValues(t),exit:function(t){t.transition().duration(e.c("transition")).style("opacity",0).on("end",function(){return t.remove()})}}}}},{key:"transitionValues",value:function(t){var e=this;return function(n){n.transition().duration(e.c("transition")).style("opacity",function(t){return e.isHighlighted(t)?1:.3}).attr("d",function(e){return t(e.values)})}}},{key:"updateLabel",value:function(t){var e=this;return t.attr("x",function(t){return e.xScale(_.last(t.values).id)}).attr("y",function(t){var n=_.last(t.values);return e.yScale(n.value)})}},{key:"isHighlighted",value:function(t){return!this.hasHighligths||this.c("highlights").indexOf(t.id)>-1}},{key:"highlightGroups",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=function(t){return e.indexOf(t.id)>-1};this.base.selectAll(".line__group,.area__group").style("opacity",function(e){return n(e)||t.isHighlighted(e)?1:.3}),this.base.selectAll(".line__group").style("stroke",function(e){return n(e)?t.categoryColors(e):t.colors(e)}),this.base.selectAll(".area__group").style("fill",function(e){return n(e)?t.categoryColors(e):t.colors(e)})}},{key:"contrast",value:function(t){return chroma(t).luminance()>.5?"black":"white"}},{key:"colors",value:function(t){var e=this.categoryColors(t);return this.isHighlighted(t)?e:chroma(e).desaturate(1).hex()}},{key:"categoryColors",value:function(t){return this._colors||(this._colors=d3.scaleOrdinal(e)),this._colors(t.id)}},{key:"smooth",value:function(t){var e=this;return _.each(t,function(n,i){if(!isNaN(i)&&t.hasOwnProperty(Number(i)-1)){for(var a=[],r=-e.c("smoothing");r<=e.c("smoothing");r++){var s=Number(i)+r;a.push(t[s])}t[i]=d3.mean(a)}})}},{key:"transform",value:function(t){var e=this,i=this.years(t[0]);t=angular.copy(t).map(this.smooth.bind(this));var a=_.chain(t).map(function(t){return _.values(t).pop()}).value(),r=_.map(i,function(e){return angular.extend({year:e},_.reduce(a,function(n,i,a){return n[i]=t[a][e],n},{}))}),s=d3.stack().keys(a)(r),l=_.reduce(t,function(t,a,r){return t.push({id:n.instant("timeline.labels."+a.label),values:_.map(i,function(t){var n=_.find(s[r],function(e){return e.data.year===t});return{id:t,stack:n,value:e.isStacked?n[1]:a[t]}})}),t},[]);return{years:i,rows:l,stack:s,type:this.c("type"),begin:i[0],end:i[i.length-1],min:d3.min(l,function(t){return d3.min(t.values,function(t){return e.isStacked?t.stack[0]:t.value})}),max:d3.max(l,function(t){return d3.max(t.values,function(t){return t.value})})}}},{key:"years",value:function(t){return _.chain(t).keys().remove(function(t){return!isNaN(t)}).map(function(t){return Number(t)}).sort().value()}},{key:"translate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return n.attr("transform","translate("+t+", "+e+")")}}},{key:"isYearVisible",value:function(t){return t>=this.data.begin&&t<this.data.end}},{key:"updateRulers",value:function(){var t=this,e=d3.transition().duration(this.c("transition")),n=function(e){return e.attr("transform",function(e){var n=t.c("padding").left+t.xScale(e[0]),i=t.c("padding").top;return"translate("+n+", "+i+")"})},i=this.c("rulers");i=i.filter(function(e){return t.isYearVisible(e[0])});var a=this.base.select(".ruler").selectAll(".ruler__group").data(i,function(t){return t[0]});a.exit().transition(e).style("opacity",0).remove(),a.transition(e).call(n).style("opacity",1),a.selectAll("line").transition(e).attr("y2",this.height);var r=a.enter().append("g").classed("ruler__group",!0);r.call(n).style("opacity",0).transition(e).style("opacity",1),r.append("line").attrs({x1:0,y1:0,x2:0,y2:this.height}),r.append("text").text(function(t){return t[1]}).attrs({dy:".85em",dx:"1em"})}},{key:"preDraw",value:function(t){var e=this,n=this.c("padding"),i=this.c("min"),a=this.c("max");null===i&&(i=this.isLine?Math.max(t.min-1*(t.max-t.min)/8,0):t.min),null===a&&(a=t.max+1*(t.max-t.min)/8),this.data=t,this.xScale.range([0,this.width]).domain([t.begin,t.end]),this.yScale.range([this.height,0]).domain([i,a]),this.base.attr(_.pick(this,["width","height"])),this.base.classed("timeline__chart--highlights",this.hasHighligths),this.base.selectAll(".line, .area, .event, .label").call(this.translate(n.left,n.top)),this.updateRulers(),this.deleteBubbles(),this.base.select(".event").attrs(_.pick(this,["width","height"])).call(this.translate(n.left,n.top)),this.base.select(".axis--x").call(this.translate(n.left,this.height+n.top)).transition().duration(this.c("transition")).call(d3.axisBottom(this.xScale).tickFormat(d3.format("")).tickValues(t.years.slice(1,-1)).tickSize(0).tickPadding(10)),this.base.select(".axis--y").call(this.translate(n.left,n.top)).transition().duration(this.c("transition")).call(d3.axisLeft(this.yScale).tickSizeOuter(0).tickFormat(this.formatY).tickSize(-this.width)).on("end",function(){e.base.select(".axis--y .tick:last-child text").text(function(t){return e.formatY(t)+" "+(e.c("yunit")||"")})}),this.base.selectAll(".axis--y text").attr("y",2).attr("x",0).attr("dx","4px").attr("dy","-1em").style("text-anchor","start")}},{key:"width",get:function(){return this.c("width")-this.c("padding").left-this.c("padding").right}},{key:"height",get:function(){return this.c("height")-this.c("padding").top-this.c("padding").bottom}},{key:"half",get:function(){return this.width/2}},{key:"isStacked",get:function(){return"stacked-area"===this.c("type")}},{key:"isLine",get:function(){return"line"===this.c("type")}},{key:"isArea",get:function(){return"area"===this.c("type")}},{key:"hasHighligths",get:function(){return this.c("highlights").length>0}}]),r}(Koto);return a}]);var MainController=function e(t,n,i){"ngInject";_classCallCheck(this,e),t.get("data/meta.json",{cache:!0}).then(function(t){return t.data}),i.set(n.use().slice(0,2));var a=angular.element("head link[type='text/css']"),r=a.filter("[title='index@"+n.use()+"']");a.not(r).prop("disabled",!0),r.prop("disabled",!1)};MainController.$inject=["$http","$translate","tmhDynamicLocale"],angular.module("app").component("main",{templateUrl:"app/main/main.html",controller:MainController}),angular.module("app").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="main">\n  <ui-view>\n    <div class="main__intro" ui-sref="main.step({ index: 0 })">\n      <div class="main__intro__bg" youtube-background-video="9pYqdGqyLdU">\n        <!-- Play \'9pYqdGqyLdU\' -->\n      </div>\n      <div class="main__intro__heading">\n        <div class="main__intro__heading__start">\n          <span ng-bind-html="\'main.intro.read-story\' | translate | unsafe"></span>\n          <i class="fa fa-play-circle"></i>\n        </div>\n        <h1 class="main__intro__heading__title" ng-bind-html="\'main.intro.headline\' | translate | unsafe"></h1>\n        <p class="main__intro__heading__abstract lead" ng-bind-html="\'main.intro.abstract\' | translate | unsafe"></p>\n      </div>\n    </div>\n  </ui-view>\n</div>\n'),t.put("app/main/about/about.html",'<div class="main__about">\n  <h1 class="main__about__title">\n    {{ \'main.about.title\' | translate }}\n  </h1>\n  <div class="main__about__content" ng-bind-html="\'main.about.content\' | translate | unsafe"></div>\n  <a ui-sref="main.step">\n    <i class="fa fa-arrow-left"></i>\n    Back to the story\n  </a>\n</div>\n'),t.put("app/main/step/step.html",'<div class="main__step">\n  <div class="main__step__heading">\n    <h2 class="main__step__heading__title">\n      {{ $ctrl.current().slidetitle | i18n }}\n    </h2>\n    <div class="main__step__heading__controls">\n      <a ui-sref="main.about" class="btn btn-link btn-sm main__step__heading__controls__about">\n        {{ \'main.step.about\' | translate}}\n      </a>\n      <div class="btn-group btn-group-sm">\n        <button class="btn btn-primary btn-sm" ng-click="$ctrl.previous()" ng-disabled="$ctrl.isFirst()" ng-attr-title="{{ \'main.step.previous\' | translate }}">\n          <span class="sr-only">{{ \'main.step.previous\' | translate }}</span>\n          <i class="fa fa-fw fa-chevron-left"></i>\n        </button>\n        <button class="btn btn-primary btn-sm" ng-click="$ctrl.next()" ng-disabled="$ctrl.isOutro()" ng-attr-title="{{ \'main.step.next\' | translate }}">\n          <span class="sr-only">{{ \'main.step.next\' | translate }}</span>\n          <i class="fa fa-fw fa-chevron-right"></i>\n        </button>\n      </div>\n    </div>\n    <div class="main__step__heading__progress" ng-style="{ width: $ctrl.progress() + \'%\' }"></div>\n  </div>\n  <div class="main__step__wrapper" ng-swipe-right="$ctrl.previous()" ng-swipe-left="$ctrl.next()">\n    <div class="main__step__description lead">\n      <span ng-bind-html="$ctrl.current().slidetext | i18n | unsafe"></span>\n    </div>\n    <timeline meta="$ctrl.meta" step="$ctrl.step" ng-click="$ctrl.next()"></timeline>\n  </div>\n  <div ng-if="$ctrl.isOutro()" class="main__step__outro">\n    <div class="main__step__outro__backdrop" ng-click="$ctrl.previous()"></div>\n    <div class="main__step__outro__content">\n      <div class="row">\n        <div class="col-sm-8 lead" ng-bind-html="\'main.step.outro.content\' | translate | unsafe"></div>\n        <div class="col-sm-4 main__step__outro__content__sidebar">\n          <img src="images/vroom.svg" class="img-fluid w-100 pl-3 pr-3 pb-1 pt-0 hidden-xs-down" alt="">\n          <p class="text-xs-center">\n            {{ \'main.step.outro.get-link\' | translate }}\n          </p>\n          <div class="input-group mb-1">\n            <input type="text" readonly="readonly" value="{{ $ctrl.location }}" class="form-control">\n            <div class="input-group-btn">\n              <button class="btn btn-primary" ui-zeroclip zeroclip-text="{{ $ctrl.location }}">\n                <i class="fa fa-copy fa-fw"></i>\n              </button>\n            </div>\n          </div>\n          <button class="btn btn-primary btn-block" ui-sref="main.step({ index: 0 })">\n            <i class="fa fa-repeat fa-fw"></i>\n            {{ \'main.step.outro.play-again\' | translate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n')}]),angular.module("app").config(routesConfig).run(gaRun),angular.module("app").config(translateConfig);
//# sourceMappingURL=../maps/scripts/app-69dda024f9.js.map