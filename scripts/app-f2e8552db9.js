"use strict";function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function _inherits(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function routesConfig(n,e,l){++cov_1doetww3ux.f[0],++cov_1doetww3ux.s[1],l.html5Mode(!1),++cov_1doetww3ux.s[2],e.otherwise("/"),++cov_1doetww3ux.s[3],n.state("main",{url:"/",component:"main",resolve:{meta:["$http",function(n){"ngInject";return++cov_1doetww3ux.f[1],++cov_1doetww3ux.s[4],n.get("data/meta.json").then(function(n){return++cov_1doetww3ux.f[2],++cov_1doetww3ux.s[5],n.data})}]}}).state("main.step",{url:"playing/:index",template:'<timeline meta="$ctrl.meta" step="$ctrl.step"></timeline>',params:{index:{value:null,dynamic:!0}}})}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"];var cov_1b5vlgt8pi=function(){var n="/home/pirhoo/Repositories/okf-farmcompass/src/index.js",e="8bc9441ba2274f9ab552c711cb1174d0801b94ec",l=new Function("return this")(),t="__coverage__",o={path:"/home/pirhoo/Repositories/okf-farmcompass/src/index.js",statementMap:{0:{start:{line:1,column:0},end:{line:6,column:5}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},c=l[t]||(l[t]={});return c[n]&&c[n].hash===e?c[n]:(o.hash=e,c[n]=o)}();++cov_1b5vlgt8pi.s[0],angular.module("app",["ngAnimate","ui.router","angularVideoBg"]);var cov_1pi3m85sja=function(){var n="/home/pirhoo/Repositories/okf-farmcompass/src/app/timeline/timeline.directive.js",e="f4b9e3ab564dc6be5228f64c1529e56ec1a9dcd4",l=new Function("return this")(),t="__coverage__",o={path:"/home/pirhoo/Repositories/okf-farmcompass/src/app/timeline/timeline.directive.js",statementMap:{0:{start:{line:1,column:0},end:{line:69,column:5}},1:{start:{line:4,column:4},end:{line:68,column:6}},2:{start:{line:13,column:8},end:{line:66,column:9}},3:{start:{line:16,column:12},end:{line:16,column:59}},4:{start:{line:18,column:12},end:{line:18,column:51}},5:{start:{line:20,column:12},end:{line:20,column:50}},6:{start:{line:22,column:12},end:{line:28,column:26}},7:{start:{line:24,column:14},end:{line:27,column:15}},8:{start:{line:26,column:16},end:{line:26,column:32}},9:{start:{line:30,column:12},end:{line:30,column:88}},10:{start:{line:32,column:12},end:{line:32,column:92}},11:{start:{line:32,column:39},end:{line:32,column:91}},12:{start:{line:36,column:12},end:{line:36,column:88}},13:{start:{line:40,column:12},end:{line:40,column:76}},14:{start:{line:43,column:12},end:{line:43,column:59}},15:{start:{line:46,column:12},end:{line:49,column:15}},16:{start:{line:51,column:12},end:{line:51,column:50}},17:{start:{line:55,column:12},end:{line:55,column:50}},18:{start:{line:57,column:12},end:{line:57,column:34}},19:{start:{line:62,column:12},end:{line:62,column:92}},20:{start:{line:64,column:12},end:{line:64,column:43}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:25},end:{line:3,column:26}},loc:{start:{line:3,column:43},end:{line:69,column:3}}},1:{name:"(anonymous_1)",decl:{start:{line:12,column:12},end:{line:12,column:13}},loc:{start:{line:12,column:39},end:{line:67,column:7}}},2:{name:"(anonymous_2)",decl:{start:{line:14,column:10},end:{line:14,column:11}},loc:{start:{line:14,column:24},end:{line:33,column:11}}},3:{name:"(anonymous_3)",decl:{start:{line:22,column:33},end:{line:22,column:34}},loc:{start:{line:22,column:48},end:{line:28,column:13}}},4:{name:"(anonymous_4)",decl:{start:{line:32,column:34},end:{line:32,column:35}},loc:{start:{line:32,column:39},end:{line:32,column:91}}},5:{name:"(anonymous_5)",decl:{start:{line:34,column:10},end:{line:34,column:11}},loc:{start:{line:34,column:21},end:{line:37,column:11}}},6:{name:"(anonymous_6)",decl:{start:{line:39,column:10},end:{line:39,column:11}},loc:{start:{line:39,column:21},end:{line:41,column:11}}},7:{name:"(anonymous_7)",decl:{start:{line:42,column:10},end:{line:42,column:11}},loc:{start:{line:42,column:26},end:{line:44,column:11}}},8:{name:"(anonymous_8)",decl:{start:{line:45,column:10},end:{line:45,column:11}},loc:{start:{line:45,column:21},end:{line:52,column:11}}},9:{name:"(anonymous_9)",decl:{start:{line:53,column:10},end:{line:53,column:11}},loc:{start:{line:53,column:19},end:{line:58,column:11}}},10:{name:"(anonymous_10)",decl:{start:{line:60,column:10},end:{line:60,column:11}},loc:{start:{line:60,column:34},end:{line:65,column:11}}}},branchMap:{0:{loc:{start:{line:24,column:14},end:{line:27,column:15}},type:"if",locations:[{start:{line:24,column:14},end:{line:27,column:15}},{start:{line:24,column:14},end:{line:27,column:15}}]},1:{loc:{start:{line:40,column:19},end:{line:40,column:75}},type:"cond-expr",locations:[{start:{line:40,column:31},end:{line:40,column:70}},{start:{line:40,column:73},end:{line:40,column:75}}]},2:{loc:{start:{line:40,column:31},end:{line:40,column:70}},type:"binary-expr",locations:[{start:{line:40,column:31},end:{line:40,column:52}},{start:{line:40,column:56},end:{line:40,column:70}}]},3:{loc:{start:{line:43,column:19},end:{line:43,column:58}},type:"binary-expr",locations:[{start:{line:43,column:19},end:{line:43,column:53}},{start:{line:43,column:57},end:{line:43,column:58}}]},4:{loc:{start:{line:43,column:20},end:{line:43,column:42}},type:"binary-expr",locations:[{start:{line:43,column:20},end:{line:43,column:36}},{start:{line:43,column:40},end:{line:43,column:42}}]},5:{loc:{start:{line:62,column:38},end:{line:62,column:91}},type:"binary-expr",locations:[{start:{line:62,column:38},end:{line:62,column:61}},{start:{line:62,column:66},end:{line:62,column:90}}]}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},c=l[t]||(l[t]={});return c[n]&&c[n].hash===e?c[n]:(o.hash=e,c[n]=o)}(),_createClass=function(){function n(n,e){for(var l=0;l<e.length;l++){var t=e[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(e,l,t){return l&&n(e.prototype,l),t&&n(e,t),e}}();++cov_1pi3m85sja.s[0],angular.module("app").directive("timeline",["$window",function(n){return++cov_1pi3m85sja.f[0],++cov_1pi3m85sja.s[1],{restrict:"E",scope:{meta:"=",step:"="},replace:!0,template:'<div class="timeline"><svg class="timeline__chart"></svg></div>',link:function(e,l,t){++cov_1pi3m85sja.f[1],++cov_1pi3m85sja.s[2],new(function(){function t(){var o=this;_classCallCheck(this,t),++cov_1pi3m85sja.f[2],++cov_1pi3m85sja.s[3],this.svg=d3.select(l[0]).select("svg"),++cov_1pi3m85sja.s[4],this.timeline=new Timeline(this.svg),++cov_1pi3m85sja.s[5],this.timeline.config(this.bounding()),++cov_1pi3m85sja.s[6],e.$watch("step",function(n){++cov_1pi3m85sja.f[3],++cov_1pi3m85sja.s[7],n<e.meta.length?(++cov_1pi3m85sja.b[0][0],++cov_1pi3m85sja.s[8],this.draw(n)):++cov_1pi3m85sja.b[0][1]}.bind(this)),++cov_1pi3m85sja.s[9],angular.element(n).on(this.windowResizeEvent,this.resize.bind(this)),++cov_1pi3m85sja.s[10],e.$on("$destroy",function(e){return++cov_1pi3m85sja.f[4],++cov_1pi3m85sja.s[11],angular.element(n).off(o.windowResizeEvent)})}return _createClass(t,[{key:"bounding",value:function(){return++cov_1pi3m85sja.f[5],++cov_1pi3m85sja.s[12],_.pick(this.svg.node().getBoundingClientRect(),["width","height"])}},{key:"data",value:function(n){function e(e){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return++cov_1pi3m85sja.f[6],++cov_1pi3m85sja.s[13],n>=0?(++cov_1pi3m85sja.b[1][0],++cov_1pi3m85sja.b[2][0],e.meta[n].data||(++cov_1pi3m85sja.b[2][1],data(n-1))):(++cov_1pi3m85sja.b[1][1],[])})},{key:"smoothing",value:function(n){return++cov_1pi3m85sja.f[7],++cov_1pi3m85sja.s[14],++cov_1pi3m85sja.b[3][0],(++cov_1pi3m85sja.b[4][0],e.meta[n]||(++cov_1pi3m85sja.b[4][1],{})).smoothing||(++cov_1pi3m85sja.b[3][1],0)}},{key:"draw",value:function(n){++cov_1pi3m85sja.f[8],++cov_1pi3m85sja.s[15],this.timeline.config({smoothing:this.smoothing(n),type:e.meta[n].charttype}),++cov_1pi3m85sja.s[16],this.timeline.draw(this.data(n))}},{key:"resize",value:function(){++cov_1pi3m85sja.f[9],++cov_1pi3m85sja.s[17],this.timeline.config(this.bounding()),++cov_1pi3m85sja.s[18],this.draw(e.step)}},{key:"windowResizeEvent",get:function(){return++cov_1pi3m85sja.f[10],++cov_1pi3m85sja.s[19],this._windowResizeEvent=(++cov_1pi3m85sja.b[5][0],this._windowResizeEvent||(++cov_1pi3m85sja.b[5][1],_.uniqueId()+" resize")),++cov_1pi3m85sja.s[20],this._windowResizeEvent}}]),t}())}}}]);var cov_vkmhu3e83=function(){var n="/home/pirhoo/Repositories/okf-farmcompass/src/app/timeline/timeline.constant.js",e="832074f8be5a7c7966ba32ebc81dbdb959697c2c",l=new Function("return this")(),t="__coverage__",o={path:"/home/pirhoo/Repositories/okf-farmcompass/src/app/timeline/timeline.constant.js",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},c=l[t]||(l[t]={});return c[n]&&c[n].hash===e?c[n]:(o.hash=e,c[n]=o)}(),cov_15mbw7ylqy=function(){var n="/home/pirhoo/Repositories/okf-farmcompass/src/app/timeline/timeline.config.js",e="0930c5018512627caa7cab1aa27f37e1d0225dec",l=new Function("return this")(),t="__coverage__",o={path:"/home/pirhoo/Repositories/okf-farmcompass/src/app/timeline/timeline.config.js",statementMap:{0:{start:{line:1,column:24},end:{line:13,column:1}},1:{start:{line:15,column:24},end:{line:62,column:1}},2:{start:{line:59,column:6},end:{line:59,column:55}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:58,column:12},end:{line:58,column:13}},loc:{start:{line:58,column:31},end:{line:60,column:5}}}},branchMap:{},s:{0:0,1:0,2:0},f:{0:0},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},c=l[t]||(l[t]={});return c[n]&&c[n].hash===e?c[n]:(o.hash=e,c[n]=o)}(),TIMELINE_COLORS=(++cov_15mbw7ylqy.s[0],["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"]),TIMELINE_CONFIG=(++cov_15mbw7ylqy.s[1],{height:{name:"height",description:"The height of the chart.",value:500,type:"number",units:"px",category:"Size"},width:{name:"width",description:"The width of the chart.",value:800,units:"px",type:"number",category:"Size"},padding:{name:"padding",description:"Space between the chart and the SVG borders.",type:"object",units:"px",category:"Size",value:{top:60,bottom:40,left:60,right:20}},transition:{name:"transition",description:"Transition delay.",type:"number",units:"ms",value:700},smoothing:{name:"smoothing",description:"Moving average amplitude",type:"number",value:0},type:{name:"type",description:"Type of the visualization",type:"string",value:"line",setter:function(n){return++cov_15mbw7ylqy.f[0],++cov_15mbw7ylqy.s[2],n.toLowerCase().replace(/\s/,"-")}}}),cov_19djytm2gv=function(){var n="/home/pirhoo/Repositories/okf-farmcompass/src/app/timeline/timeline.chart.js",e="056e44bfd6e83066ff6a36426634642aefb4e303",l=new Function("return this")(),t="__coverage__",o={path:"/home/pirhoo/Repositories/okf-farmcompass/src/app/timeline/timeline.chart.js",statementMap:{0:{start:{line:3,column:4},end:{line:3,column:14}},1:{start:{line:6,column:4},end:{line:6,column:35}},2:{start:{line:9,column:4},end:{line:9,column:61}},3:{start:{line:10,column:4},end:{line:10,column:47}},4:{start:{line:13,column:4},end:{line:13,column:51}},5:{start:{line:16,column:4},end:{line:16,column:35}},6:{start:{line:17,column:4},end:{line:17,column:35}},7:{start:{line:20,column:4},end:{line:20,column:56}},8:{start:{line:21,column:4},end:{line:21,column:56}},9:{start:{line:24,column:4},end:{line:26,column:66}},10:{start:{line:25,column:14},end:{line:25,column:31}},11:{start:{line:26,column:14},end:{line:26,column:64}},12:{start:{line:29,column:4},end:{line:32,column:67}},13:{start:{line:30,column:14},end:{line:30,column:31}},14:{start:{line:31,column:15},end:{line:31,column:69}},15:{start:{line:32,column:15},end:{line:32,column:65}},16:{start:{line:35,column:4},end:{line:48,column:8}},17:{start:{line:38,column:19},end:{line:38,column:56}},18:{start:{line:39,column:8},end:{line:40,column:33}},19:{start:{line:40,column:27},end:{line:40,column:31}},20:{start:{line:44,column:8},end:{line:46,column:47}},21:{start:{line:45,column:30},end:{line:45,column:47}},22:{start:{line:46,column:26},end:{line:46,column:45}},23:{start:{line:50,column:4},end:{line:60,column:8}},24:{start:{line:52,column:8},end:{line:52,column:65}},25:{start:{line:52,column:59},end:{line:52,column:63}},26:{start:{line:56,column:8},end:{line:58,column:47}},27:{start:{line:57,column:32},end:{line:57,column:49}},28:{start:{line:58,column:26},end:{line:58,column:45}},29:{start:{line:63,column:4},end:{line:91,column:5}},30:{start:{line:67,column:19},end:{line:67,column:42}},31:{start:{line:69,column:25},end:{line:69,column:83}},32:{start:{line:71,column:10},end:{line:71,column:53}},33:{start:{line:73,column:10},end:{line:85,column:16}},34:{start:{line:82,column:16},end:{line:82,column:50}},35:{start:{line:84,column:16},end:{line:84,column:52}},36:{start:{line:87,column:34},end:{line:87,column:69}},37:{start:{line:88,column:34},end:{line:88,column:69}},38:{start:{line:89,column:34},end:{line:89,column:95}},39:{start:{line:94,column:4},end:{line:94,column:78}},40:{start:{line:97,column:4},end:{line:97,column:79}},41:{start:{line:100,column:4},end:{line:100,column:45}},42:{start:{line:104,column:4},end:{line:120,column:7}},43:{start:{line:106,column:6},end:{line:119,column:7}},44:{start:{line:108,column:21},end:{line:108,column:23}},45:{start:{line:110,column:8},end:{line:116,column:9}},46:{start:{line:112,column:21},end:{line:112,column:34}},47:{start:{line:115,column:10},end:{line:115,column:34}},48:{start:{line:118,column:8},end:{line:118,column:36}},49:{start:{line:121,column:4},end:{line:121,column:15}},50:{start:{line:125,column:16},end:{line:125,column:35}},51:{start:{line:127,column:4},end:{line:127,column:44}},52:{start:{line:129,column:17},end:{line:129,column:66}},53:{start:{line:129,column:40},end:{line:129,column:57}},54:{start:{line:131,column:20},end:{line:136,column:6}},55:{start:{line:132,column:6},end:{line:135,column:14}},56:{start:{line:133,column:8},end:{line:133,column:36}},57:{start:{line:134,column:8},end:{line:134,column:20}},58:{start:{line:138,column:16},end:{line:138,column:50}},59:{start:{line:140,column:15},end:{line:155,column:10}},60:{start:{line:142,column:6},end:{line:153,column:8}},61:{start:{line:147,column:10},end:{line:151,column:12}},62:{start:{line:149,column:40},end:{line:149,column:60}},63:{start:{line:154,column:6},end:{line:154,column:17}},64:{start:{line:157,column:4},end:{line:169,column:6}},65:{start:{line:166,column:29},end:{line:166,column:89}},66:{start:{line:166,column:51},end:{line:166,column:88}},67:{start:{line:168,column:29},end:{line:168,column:89}},68:{start:{line:168,column:51},end:{line:168,column:88}},69:{start:{line:173,column:4},end:{line:173,column:83}},70:{start:{line:173,column:44},end:{line:173,column:53}},71:{start:{line:173,column:64},end:{line:173,column:67}},72:{start:{line:176,column:4},end:{line:178,column:5}},73:{start:{line:177,column:6},end:{line:177,column:71}},74:{start:{line:181,column:4},end:{line:183,column:5}},75:{start:{line:182,column:6},end:{line:182,column:78}},76:{start:{line:182,column:62},end:{line:182,column:76}},77:{start:{line:186,column:12},end:{line:186,column:29}},78:{start:{line:188,column:4},end:{line:188,column:70}},79:{start:{line:189,column:4},end:{line:189,column:69}},80:{start:{line:191,column:4},end:{line:191,column:63}},81:{start:{line:192,column:4},end:{line:192,column:76}},82:{start:{line:194,column:4},end:{line:199,column:67}},83:{start:{line:201,column:4},end:{line:206,column:56}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:2},end:{line:2,column:3}},loc:{start:{line:2,column:18},end:{line:61,column:3}}},1:{name:"(anonymous_1)",decl:{start:{line:25,column:9},end:{line:25,column:10}},loc:{start:{line:25,column:14},end:{line:25,column:31}}},2:{name:"(anonymous_2)",decl:{start:{line:26,column:9},end:{line:26,column:10}},loc:{start:{line:26,column:14},end:{line:26,column:64}}},3:{name:"(anonymous_3)",decl:{start:{line:30,column:9},end:{line:30,column:10}},loc:{start:{line:30,column:14},end:{line:30,column:31}}},4:{name:"(anonymous_4)",decl:{start:{line:31,column:10},end:{line:31,column:11}},loc:{start:{line:31,column:15},end:{line:31,column:69}}},5:{name:"(anonymous_5)",decl:{start:{line:32,column:10},end:{line:32,column:11}},loc:{start:{line:32,column:15},end:{line:32,column:65}}},6:{name:"(anonymous_6)",decl:{start:{line:36,column:16},end:{line:36,column:17}},loc:{start:{line:36,column:31},end:{line:41,column:7}}},7:{name:"(anonymous_7)",decl:{start:{line:40,column:22},end:{line:40,column:23}},loc:{start:{line:40,column:27},end:{line:40,column:31}}},8:{name:"(anonymous_8)",decl:{start:{line:42,column:14},end:{line:42,column:15}},loc:{start:{line:42,column:28},end:{line:47,column:7}}},9:{name:"(anonymous_9)",decl:{start:{line:45,column:25},end:{line:45,column:26}},loc:{start:{line:45,column:30},end:{line:45,column:47}}},10:{name:"(anonymous_10)",decl:{start:{line:46,column:21},end:{line:46,column:22}},loc:{start:{line:46,column:26},end:{line:46,column:45}}},11:{name:"(anonymous_11)",decl:{start:{line:51,column:16},end:{line:51,column:17}},loc:{start:{line:51,column:31},end:{line:53,column:7}}},12:{name:"(anonymous_12)",decl:{start:{line:52,column:54},end:{line:52,column:55}},loc:{start:{line:52,column:59},end:{line:52,column:63}}},13:{name:"(anonymous_13)",decl:{start:{line:54,column:15},end:{line:54,column:16}},loc:{start:{line:54,column:28},end:{line:59,column:7}}},14:{name:"(anonymous_14)",decl:{start:{line:57,column:27},end:{line:57,column:28}},loc:{start:{line:57,column:32},end:{line:57,column:49}}},15:{name:"(anonymous_15)",decl:{start:{line:58,column:21},end:{line:58,column:22}},loc:{start:{line:58,column:26},end:{line:58,column:45}}},16:{name:"(anonymous_16)",decl:{start:{line:62,column:2},end:{line:62,column:3}},loc:{start:{line:62,column:18},end:{line:92,column:3}}},17:{name:"(anonymous_17)",decl:{start:{line:65,column:17},end:{line:65,column:18}},loc:{start:{line:65,column:30},end:{line:86,column:9}}},18:{name:"(anonymous_18)",decl:{start:{line:80,column:25},end:{line:80,column:26}},loc:{start:{line:80,column:35},end:{line:85,column:15}}},19:{name:"(anonymous_19)",decl:{start:{line:87,column:29},end:{line:87,column:30}},loc:{start:{line:87,column:34},end:{line:87,column:69}}},20:{name:"(anonymous_20)",decl:{start:{line:88,column:29},end:{line:88,column:30}},loc:{start:{line:88,column:34},end:{line:88,column:69}}},21:{name:"(anonymous_21)",decl:{start:{line:89,column:29},end:{line:89,column:30}},loc:{start:{line:89,column:34},end:{line:89,column:95}}},22:{name:"(anonymous_22)",decl:{start:{line:93,column:2},end:{line:93,column:3}},loc:{start:{line:93,column:14},end:{line:95,column:3}}},23:{name:"(anonymous_23)",decl:{start:{line:96,column:2},end:{line:96,column:3}},loc:{start:{line:96,column:15},end:{line:98,column:3}}},24:{name:"(anonymous_24)",decl:{start:{line:99,column:2},end:{line:99,column:3}},loc:{start:{line:99,column:18},end:{line:101,column:3}}},25:{name:"(anonymous_25)",decl:{start:{line:102,column:2},end:{line:102,column:3}},loc:{start:{line:102,column:15},end:{line:122,column:3}}},26:{name:"(anonymous_26)",decl:{start:{line:104,column:17},end:{line:104,column:18}},loc:{start:{line:104,column:32},end:{line:120,column:5}}},27:{name:"(anonymous_27)",decl:{start:{line:123,column:2},end:{line:123,column:3}},loc:{start:{line:123,column:18},end:{line:170,column:3}}},28:{name:"(anonymous_28)",decl:{start:{line:129,column:35},end:{line:129,column:36}},loc:{start:{line:129,column:40},end:{line:129,column:57}}},29:{name:"(anonymous_29)",decl:{start:{line:131,column:33},end:{line:131,column:34}},loc:{start:{line:131,column:40},end:{line:136,column:5}}},30:{name:"(anonymous_30)",decl:{start:{line:132,column:55},end:{line:132,column:56}},loc:{start:{line:132,column:74},end:{line:135,column:7}}},31:{name:"(anonymous_31)",decl:{start:{line:140,column:30},end:{line:140,column:31}},loc:{start:{line:140,column:46},end:{line:155,column:5}}},32:{name:"(anonymous_32)",decl:{start:{line:146,column:29},end:{line:146,column:30}},loc:{start:{line:146,column:37},end:{line:152,column:9}}},33:{name:"(anonymous_33)",decl:{start:{line:149,column:36},end:{line:149,column:37}},loc:{start:{line:149,column:40},end:{line:149,column:60}}},34:{name:"(anonymous_34)",decl:{start:{line:166,column:24},end:{line:166,column:25}},loc:{start:{line:166,column:29},end:{line:166,column:89}}},35:{name:"(anonymous_35)",decl:{start:{line:166,column:46},end:{line:166,column:47}},loc:{start:{line:166,column:51},end:{line:166,column:88}}},36:{name:"(anonymous_36)",decl:{start:{line:168,column:24},end:{line:168,column:25}},loc:{start:{line:168,column:29},end:{line:168,column:89}}},37:{name:"(anonymous_37)",decl:{start:{line:168,column:46},end:{line:168,column:47}},loc:{start:{line:168,column:51},end:{line:168,column:88}}},38:{name:"(anonymous_38)",decl:{start:{line:171,column:2},end:{line:171,column:3}},loc:{start:{line:171,column:14},end:{line:174,column:3}}},39:{name:"(anonymous_39)",decl:{start:{line:173,column:39},end:{line:173,column:40}},loc:{start:{line:173,column:44},end:{line:173,column:53}}},40:{name:"(anonymous_40)",decl:{start:{line:173,column:59},end:{line:173,column:60}},loc:{start:{line:173,column:64},end:{line:173,column:67}}},41:{name:"(anonymous_41)",decl:{start:{line:175,column:2},end:{line:175,column:3}},loc:{start:{line:175,column:31},end:{line:179,column:3}}},42:{name:"(anonymous_42)",decl:{start:{line:176,column:11},end:{line:176,column:12}},loc:{start:{line:176,column:30},end:{line:178,column:5}}},43:{name:"(anonymous_43)",decl:{start:{line:180,column:2},end:{line:180,column:3}},loc:{start:{line:180,column:25},end:{line:184,column:3}}},44:{name:"(anonymous_44)",decl:{start:{line:181,column:11},end:{line:181,column:12}},loc:{start:{line:181,column:24},end:{line:183,column:5}}},45:{name:"(anonymous_45)",decl:{start:{line:182,column:57},end:{line:182,column:58}},loc:{start:{line:182,column:62},end:{line:182,column:76}}},46:{name:"(anonymous_46)",decl:{start:{line:185,column:2},end:{line:185,column:3}},loc:{start:{line:185,column:16},end:{line:207,column:3}}}},branchMap:{0:{loc:{start:{line:26,column:26},end:{line:26,column:63}},type:"cond-expr",locations:[{start:{line:26,column:43},end:{line:26,column:53}},{start:{line:26,column:56},end:{line:26,column:63}}]},1:{loc:{start:{line:31,column:15},end:{line:31,column:69}},type:"cond-expr",locations:[{start:{line:31,column:32},end:{line:31,column:55}},{start:{line:31,column:58},end:{line:31,column:69}}]},2:{loc:{start:{line:32,column:27},end:{line:32,column:64}},type:"cond-expr",locations:[{start:{line:32,column:44},end:{line:32,column:54}},{start:{line:32,column:57},end:{line:32,column:64}}]},3:{loc:{start:{line:38,column:19},end:{line:38,column:56}},type:"cond-expr",locations:[{start:{line:38,column:42},end:{line:38,column:44}},{start:{line:38,column:47},end:{line:38,column:56}}]},4:{loc:{start:{line:106,column:6},end:{line:119,column:7}},type:"if",locations:[{start:{line:106,column:6},end:{line:119,column:7}},{start:{line:106,column:6},end:{line:119,column:7}}]},5:{loc:{start:{line:166,column:51},end:{line:166,column:88}},type:"cond-expr",locations:[{start:{line:166,column:68},end:{line:166,column:78}},{start:{line:166,column:81},end:{line:166,column:88}}]},6:{loc:{start:{line:168,column:51},end:{line:168,column:88}},type:"cond-expr",locations:[{start:{line:168,column:68},end:{line:168,column:78}},{start:{line:168,column:81},end:{line:168,column:88}}]},7:{loc:{start:{line:175,column:12},end:{line:175,column:20}},type:"default-arg",locations:[{start:{line:175,column:19},end:{line:175,column:20}}]},8:{loc:{start:{line:175,column:22},end:{line:175,column:29}},type:"default-arg",locations:[{start:{line:175,column:28},end:{line:175,column:29}}]}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,75:0,76:0,77:0,78:0,79:0,80:0,81:0,82:0,83:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0],8:[0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},c=l[t]||(l[t]={});return c[n]&&c[n].hash===e?c[n]:(o.hash=e,c[n]=o)}(),_createClass=function(){function n(n,e){for(var l=0;l<e.length;l++){var t=e[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(e,l,t){return l&&n(e.prototype,l),t&&n(e,t),e}}(),Timeline=function(n){function e(n){_classCallCheck(this,e),++cov_19djytm2gv.f[0],++cov_19djytm2gv.s[0];var l=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return++cov_19djytm2gv.s[1],l.configs=TIMELINE_CONFIG,++cov_19djytm2gv.s[2],l.transitionValues=l.transitionValues.bind(l),++cov_19djytm2gv.s[3],l.bindLayer=l.bindLayer.bind(l),++cov_19djytm2gv.s[4],l.colors=d3.scaleOrdinal(TIMELINE_COLORS),++cov_19djytm2gv.s[5],l.xScale=d3.scaleLinear(),++cov_19djytm2gv.s[6],l.yScale=d3.scaleLinear(),++cov_19djytm2gv.s[7],l.base.append("g").attr("class","axis axis--x"),++cov_19djytm2gv.s[8],l.base.append("g").attr("class","axis axis--y"),++cov_19djytm2gv.s[9],l.line=d3.line().x(function(n){return++cov_19djytm2gv.f[1],++cov_19djytm2gv.s[10],l.xScale(n.id)}).y(function(n){return++cov_19djytm2gv.f[2],++cov_19djytm2gv.s[11],l.yScale(l.isStacked?(++cov_19djytm2gv.b[0][0],n.stack[1]):(++cov_19djytm2gv.b[0][1],n.value))}),++cov_19djytm2gv.s[12],l.area=d3.area().x(function(n){return++cov_19djytm2gv.f[3],++cov_19djytm2gv.s[13],l.xScale(n.id)}).y0(function(n){return++cov_19djytm2gv.f[4],++cov_19djytm2gv.s[14],l.isStacked?(++cov_19djytm2gv.b[1][0],l.yScale(n.stack[0])):(++cov_19djytm2gv.b[1][1],l.height)}).y1(function(n){return++cov_19djytm2gv.f[5],++cov_19djytm2gv.s[15],l.yScale(l.isStacked?(++cov_19djytm2gv.b[2][0],n.stack[1]):(++cov_19djytm2gv.b[2][1],n.value))}),++cov_19djytm2gv.s[16],l.layer("area",l.base.append("g").attr("class","area"),angular.extend(l.bindLayer(l.area),{dataBind:function(n){++cov_19djytm2gv.f[6];var e=(++cov_19djytm2gv.s[17],"line"===n.type?(++cov_19djytm2gv.b[3][0],[]):(++cov_19djytm2gv.b[3][1],n.rows));return++cov_19djytm2gv.s[18],this.selectAll("path").data(e,function(n){return++cov_19djytm2gv.f[7],++cov_19djytm2gv.s[19],n.id})},insert:function(n){return++cov_19djytm2gv.f[8],++cov_19djytm2gv.s[20],n.append("path").style("fill",function(n){return++cov_19djytm2gv.f[9],++cov_19djytm2gv.s[21],l.colors(n.id)}).attr("d",function(n){return++cov_19djytm2gv.f[10],++cov_19djytm2gv.s[22],l.area(n.values)})}})),++cov_19djytm2gv.s[23],l.layer("line",l.base.append("g").attr("class","line"),angular.extend(l.bindLayer(l.line),{dataBind:function(n){return++cov_19djytm2gv.f[11],++cov_19djytm2gv.s[24],this.selectAll("path").data(n.rows,function(n){return++cov_19djytm2gv.f[12],++cov_19djytm2gv.s[25],n.id})},insert:function(n){return++cov_19djytm2gv.f[13],++cov_19djytm2gv.s[26],n.append("path").style("stroke",function(n){return++cov_19djytm2gv.f[14],++cov_19djytm2gv.s[27],l.colors(n.id)}).attr("d",function(n){return++cov_19djytm2gv.f[15],++cov_19djytm2gv.s[28],l.line(n.values)})}})),l}return _inherits(e,n),_createClass(e,[{key:"bindLayer",value:function(n){var e=this;return++cov_19djytm2gv.f[16],++cov_19djytm2gv.s[29],{events:{enter:function(n){++cov_19djytm2gv.f[17];var l=(++cov_19djytm2gv.s[30],_.uniqueId("rectClip-")),t=(++cov_19djytm2gv.s[31],e.base.append("clipPath").attr("id",l).append("rect"));++cov_19djytm2gv.s[32],n.attr("clip-path","url(#"+l+")"),++cov_19djytm2gv.s[33],t.attr("width",0).attr("height",e.height).transition().duration(e.c("transition")).attr("width",e.width).on("end",function(){++cov_19djytm2gv.f[18],++cov_19djytm2gv.s[34],n.attr("clip-path",null),++cov_19djytm2gv.s[35],d3.select(this.parentNode).remove()})},"merge:transition":function(l){return++cov_19djytm2gv.f[19],++cov_19djytm2gv.s[36],l.call(e.transitionValues(n))},"update:transition":function(l){return++cov_19djytm2gv.f[20],++cov_19djytm2gv.s[37],l.call(e.transitionValues(n))},"exit:transition":function(n){return++cov_19djytm2gv.f[21],++cov_19djytm2gv.s[38],n.duration(e.c("transition")).style("opacity",0).remove()}}}}},{key:"smooth",value:function(n){var e=this;return++cov_19djytm2gv.f[25],++cov_19djytm2gv.s[42],_.each(n,function(l,t){if(++cov_19djytm2gv.f[26],++cov_19djytm2gv.s[43],isNaN(t))++cov_19djytm2gv.b[4][1];else{++cov_19djytm2gv.b[4][0];var o=(++cov_19djytm2gv.s[44],[]);++cov_19djytm2gv.s[45];for(var c=-e.c("smoothing");c<=e.c("smoothing");c++){var i=(++cov_19djytm2gv.s[46],1*t+c);++cov_19djytm2gv.s[47],o.push(n[i])}++cov_19djytm2gv.s[48],n[t]=d3.mean(o)}}),++cov_19djytm2gv.s[49],n}},{key:"transform",value:function(n){var e=this;++cov_19djytm2gv.f[27];var l=(++cov_19djytm2gv.s[50],this.years(n[0]));++cov_19djytm2gv.s[51],n=n.map(this.smooth.bind(this));var t=(++cov_19djytm2gv.s[52],_.chain(n).map(function(n){return++cov_19djytm2gv.f[28],++cov_19djytm2gv.s[53],_.values(n).pop()}).value()),o=(++cov_19djytm2gv.s[54],_.map(l,function(e){return++cov_19djytm2gv.f[29],++cov_19djytm2gv.s[55],angular.extend({year:e},_.reduce(t,function(l,t,o){return++cov_19djytm2gv.f[30],++cov_19djytm2gv.s[56],l[t]=n[o][e],++cov_19djytm2gv.s[57],l},{}))})),c=(++cov_19djytm2gv.s[58],d3.stack().keys(t)(o)),i=(++cov_19djytm2gv.s[59],_.reduce(n,function(n,e,t){return++cov_19djytm2gv.f[31],++cov_19djytm2gv.s[60],n.push({id:_.values(e).pop(),values:_.map(l,function(n){return++cov_19djytm2gv.f[32],++cov_19djytm2gv.s[61],{value:e[n],stack:_.find(c[t],function(e){return++cov_19djytm2gv.f[33],++cov_19djytm2gv.s[62],e.data.year===n}),id:n}})}),++cov_19djytm2gv.s[63],n},[]));return++cov_19djytm2gv.s[64],{years:l,rows:i,stack:c,type:this.c("type"),begin:l[0],end:l[l.length-1],min:d3.min(i,function(n){return++cov_19djytm2gv.f[34],++cov_19djytm2gv.s[65],d3.min(n.values,function(n){return++cov_19djytm2gv.f[35],++cov_19djytm2gv.s[66],e.isStacked?(++cov_19djytm2gv.b[5][0],n.stack[0]):(++cov_19djytm2gv.b[5][1],n.value)})}),max:d3.max(i,function(n){return++cov_19djytm2gv.f[36],++cov_19djytm2gv.s[67],d3.max(n.values,function(n){return++cov_19djytm2gv.f[37],++cov_19djytm2gv.s[68],e.isStacked?(++cov_19djytm2gv.b[6][0],n.stack[1]):(++cov_19djytm2gv.b[6][1],n.value)})})}}},{key:"years",value:function(n){return++cov_19djytm2gv.f[38],++cov_19djytm2gv.s[69],_.chain(n).keys().remove(function(n){return++cov_19djytm2gv.f[39],++cov_19djytm2gv.s[70],!isNaN(n)}).map(function(n){return++cov_19djytm2gv.f[40],++cov_19djytm2gv.s[71],1*n}).sort().value()}},{key:"translate",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(++cov_19djytm2gv.b[7][0],0),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(++cov_19djytm2gv.b[8][0],0);return++cov_19djytm2gv.f[41],
++cov_19djytm2gv.s[72],function(l){return++cov_19djytm2gv.f[42],++cov_19djytm2gv.s[73],l.attr("transform","translate("+n+", "+e+")")}}},{key:"transitionValues",value:function(n){var e=this;return++cov_19djytm2gv.f[43],++cov_19djytm2gv.s[74],function(l){++cov_19djytm2gv.f[44],++cov_19djytm2gv.s[75],l.duration(e.c("transition")).attr("d",function(e){return++cov_19djytm2gv.f[45],++cov_19djytm2gv.s[76],n(e.values)})}}},{key:"preDraw",value:function(n){++cov_19djytm2gv.f[46];var e=(++cov_19djytm2gv.s[77],this.c("padding"));++cov_19djytm2gv.s[78],this.xScale.range([0,this.width]).domain([n.begin,n.end]),++cov_19djytm2gv.s[79],this.yScale.range([this.height,0]).domain([n.min,n.max]),++cov_19djytm2gv.s[80],this.base.attr({width:this.width,height:this.height}),++cov_19djytm2gv.s[81],this.base.selectAll(".line, .area").call(this.translate(e.left,e.top)),++cov_19djytm2gv.s[82],this.base.select(".axis--x").call(this.translate(e.left,this.height+e.top)).transition().duration(this.c("transition")).call(d3.axisBottom(this.xScale).tickFormat(d3.format(""))),++cov_19djytm2gv.s[83],this.base.select(".axis--y").call(this.translate(e.left,e.top)).transition().duration(this.c("transition")).call(d3.axisLeft(this.yScale).tickSizeOuter(0))}},{key:"width",get:function(){return++cov_19djytm2gv.f[22],++cov_19djytm2gv.s[39],this.c("width")-this.c("padding").left-this.c("padding").right}},{key:"height",get:function(){return++cov_19djytm2gv.f[23],++cov_19djytm2gv.s[40],this.c("height")-this.c("padding").top-this.c("padding").bottom}},{key:"isStacked",get:function(){return++cov_19djytm2gv.f[24],++cov_19djytm2gv.s[41],"stacked-area"===this.c("type")}}]),e}(Koto),cov_fk44tvvjm=function(){var n="/home/pirhoo/Repositories/okf-farmcompass/src/app/main/main.js",e="8494d14fd62893551e8b7282c63118be0848751f",l=new Function("return this")(),t="__coverage__",o={path:"/home/pirhoo/Repositories/okf-farmcompass/src/app/main/main.js",statementMap:{0:{start:{line:4,column:4},end:{line:4,column:45}},1:{start:{line:6,column:4},end:{line:6,column:41}},2:{start:{line:8,column:4},end:{line:8,column:37}},3:{start:{line:9,column:4},end:{line:9,column:43}},4:{start:{line:12,column:4},end:{line:12,column:22}},5:{start:{line:15,column:4},end:{line:15,column:41}},6:{start:{line:18,column:4},end:{line:22,column:5}},7:{start:{line:19,column:6},end:{line:19,column:59}},8:{start:{line:21,column:6},end:{line:21,column:47}},9:{start:{line:25,column:4},end:{line:25,column:32}},10:{start:{line:29,column:0},end:{line:37,column:5}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:2},end:{line:2,column:3}},loc:{start:{line:2,column:44},end:{line:10,column:3}}},1:{name:"(anonymous_1)",decl:{start:{line:11,column:2},end:{line:11,column:3}},loc:{start:{line:11,column:13},end:{line:13,column:3}}},2:{name:"(anonymous_2)",decl:{start:{line:14,column:2},end:{line:14,column:3}},loc:{start:{line:14,column:28},end:{line:16,column:3}}},3:{name:"(anonymous_3)",decl:{start:{line:17,column:2},end:{line:17,column:3}},loc:{start:{line:17,column:9},end:{line:23,column:3}}},4:{name:"(anonymous_4)",decl:{start:{line:24,column:2},end:{line:24,column:3}},loc:{start:{line:24,column:12},end:{line:26,column:3}}}},branchMap:{0:{loc:{start:{line:15,column:22},end:{line:15,column:39}},type:"binary-expr",locations:[{start:{line:15,column:22},end:{line:15,column:34}},{start:{line:15,column:38},end:{line:15,column:39}}]},1:{loc:{start:{line:18,column:4},end:{line:22,column:5}},type:"if",locations:[{start:{line:18,column:4},end:{line:22,column:5}},{start:{line:18,column:4},end:{line:22,column:5}}]}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},c=l[t]||(l[t]={});return c[n]&&c[n].hash===e?c[n]:(o.hash=e,c[n]=o)}(),_createClass=function(){function n(n,e){for(var l=0;l<e.length;l++){var t=e[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(e,l,t){return l&&n(e.prototype,l),t&&n(e,t),e}}(),MainController=function(){function n(e,l,t){"ngInject";_classCallCheck(this,n),++cov_fk44tvvjm.f[0],++cov_fk44tvvjm.s[0],angular.extend(this,{$state:l,$scope:t}),++cov_fk44tvvjm.s[1],this.uiOnParamsChanged(e),++cov_fk44tvvjm.s[2],this.next=this.next.bind(this),++cov_fk44tvvjm.s[3],this.current=this.current.bind(this)}return n.$inject=["$stateParams","$state","$scope"],_createClass(n,[{key:"uiOnParamsChanged",value:function(n){++cov_fk44tvvjm.f[2],++cov_fk44tvvjm.s[5],this._step=1*(++cov_fk44tvvjm.b[0][0],n.index||(++cov_fk44tvvjm.b[0][1],0))}},{key:"next",value:function(){++cov_fk44tvvjm.f[3],++cov_fk44tvvjm.s[6],this.step<this.meta.length-1?(++cov_fk44tvvjm.b[1][0],++cov_fk44tvvjm.s[7],this.$state.go("main.step",{index:this.step+1})):(++cov_fk44tvvjm.b[1][1],++cov_fk44tvvjm.s[8],this.$state.go("main.step",{index:0}))}},{key:"current",value:function(){return++cov_fk44tvvjm.f[4],++cov_fk44tvvjm.s[9],this.meta[this.step]}},{key:"step",get:function(){return++cov_fk44tvvjm.f[1],++cov_fk44tvvjm.s[4],this._step}}]),n}();++cov_fk44tvvjm.s[10],angular.module("app").component("main",{templateUrl:"app/main/main.html",controller:MainController,bindings:{meta:"<"}}),angular.module("app").run(["$templateCache",function(n){n.put("app/main/main.html",'<div class="main">\n  <div class="main__intro" ng-show="\'main\' | isState" ui-sref="main.step({ index: 0 })">\n    <div class="main__intro__bg">\n      <video-bg video-id="\'9pYqdGqyLdU\'">\n        <div><!-- I don\'t know why but we need to add content<\n                  here for having the video to start. --></div>\n      </video-bg>\n    </div>\n    <div class="main__intro__heading">\n      <div class="main__intro__heading__start">\n        Read the full story\n        <i class="fa fa-play-circle"></i>\n      </div>\n      <h1 class="main__intro__heading__title">\n        Agricultural Subsidies:<br>New&nbsp;Countries, Same&nbsp;Problems\n      </h1>\n      <p class="main__intro__heading__abstract lead">\n        The Common Agricultural Policy of the European Union gives out a lot of money to farmers - 60 billion each year. While it does help some farms, most of this money incentivizes farmers to grow cash crops and employ less workers.\n      </p>\n    </div>\n  </div>\n  <h2 class="main__heading">\n    {{ $ctrl.current().slidetitleenbe }}\n  </h2>\n  <ui-view ng-click="$ctrl.next()"></ui-view>\n</div>\n')}]);var cov_1doetww3ux=function(){var n="/home/pirhoo/Repositories/okf-farmcompass/src/routes.js",e="806f94cbc63d27fed402ac0bdee23ccf25aafd56",l=new Function("return this")(),t="__coverage__",o={path:"/home/pirhoo/Repositories/okf-farmcompass/src/routes.js",statementMap:{0:{start:{line:1,column:0},end:{line:3,column:24}},1:{start:{line:7,column:2},end:{line:7,column:37}},2:{start:{line:8,column:2},end:{line:8,column:36}},3:{start:{line:10,column:2},end:{line:30,column:7}},4:{start:{line:17,column:10},end:{line:17,column:63}},5:{start:{line:17,column:55},end:{line:17,column:61}}},fnMap:{0:{name:"routesConfig",decl:{start:{line:6,column:9},end:{line:6,column:21}},loc:{start:{line:6,column:77},end:{line:31,column:1}}},1:{name:"(anonymous_1)",decl:{start:{line:15,column:14},end:{line:15,column:15}},loc:{start:{line:15,column:24},end:{line:18,column:9}}},2:{name:"(anonymous_2)",decl:{start:{line:17,column:50},end:{line:17,column:51}},loc:{start:{line:17,column:55},end:{line:17,column:61}}}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},c=l[t]||(l[t]={});return c[n]&&c[n].hash===e?c[n]:(o.hash=e,c[n]=o)}();++cov_1doetww3ux.s[0],angular.module("app").config(routesConfig);
//# sourceMappingURL=../maps/scripts/app-f2e8552db9.js.map