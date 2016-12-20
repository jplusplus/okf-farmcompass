"use strict";function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function _inherits(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function routesConfig(n,e,t){++cov_1doetww3ux.f[0],++cov_1doetww3ux.s[1],t.html5Mode(!1),++cov_1doetww3ux.s[2],e.otherwise("/"),++cov_1doetww3ux.s[3],n.state("main",{url:"/",component:"main",resolve:{meta:["$http",function(n){"ngInject";return++cov_1doetww3ux.f[1],++cov_1doetww3ux.s[4],n.get("data/meta.json").then(function(n){return++cov_1doetww3ux.f[2],++cov_1doetww3ux.s[5],n.data})}]}}).state("main.step",{url:"playing/:index",template:'<timeline meta="$ctrl.meta" step="$ctrl.step"></timeline>',params:{index:{value:null,dynamic:!0}}})}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"];var cov_1b5vlgt8pi=function(){var n="/home/pirhoo/Repositories/okf-farmcompass/src/index.js",e="8bc9441ba2274f9ab552c711cb1174d0801b94ec",t=new Function("return this")(),l="__coverage__",o={path:"/home/pirhoo/Repositories/okf-farmcompass/src/index.js",statementMap:{0:{start:{line:1,column:0},end:{line:6,column:5}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},c=t[l]||(t[l]={});return c[n]&&c[n].hash===e?c[n]:(o.hash=e,c[n]=o)}();++cov_1b5vlgt8pi.s[0],angular.module("app",["ngAnimate","ui.router","angularVideoBg"]);var cov_1pi3m85sja=function(){var n="/home/pirhoo/Repositories/okf-farmcompass/src/app/timeline/timeline.directive.js",e="ccc2ed8b53f05914f579829a6b24800d6e5d2c4a",t=new Function("return this")(),l="__coverage__",o={path:"/home/pirhoo/Repositories/okf-farmcompass/src/app/timeline/timeline.directive.js",statementMap:{0:{start:{line:1,column:0},end:{line:33,column:5}},1:{start:{line:4,column:4},end:{line:32,column:6}},2:{start:{line:14,column:18},end:{line:14,column:53}},3:{start:{line:16,column:32},end:{line:16,column:66}},4:{start:{line:18,column:23},end:{line:18,column:40}},5:{start:{line:20,column:19},end:{line:20,column:72}},6:{start:{line:20,column:24},end:{line:20,column:72}},7:{start:{line:22,column:8},end:{line:22,column:43}},8:{start:{line:24,column:8},end:{line:30,column:11}},9:{start:{line:26,column:10},end:{line:29,column:11}},10:{start:{line:28,column:12},end:{line:28,column:40}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:25},end:{line:3,column:26}},loc:{start:{line:3,column:36},end:{line:33,column:3}}},1:{name:"(anonymous_1)",decl:{start:{line:12,column:12},end:{line:12,column:13}},loc:{start:{line:12,column:39},end:{line:31,column:7}}},2:{name:"(anonymous_2)",decl:{start:{line:20,column:19},end:{line:20,column:20}},loc:{start:{line:20,column:24},end:{line:20,column:72}}},3:{name:"(anonymous_3)",decl:{start:{line:24,column:29},end:{line:24,column:30}},loc:{start:{line:24,column:44},end:{line:30,column:9}}}},branchMap:{0:{loc:{start:{line:20,column:24},end:{line:20,column:72}},type:"cond-expr",locations:[{start:{line:20,column:33},end:{line:20,column:67}},{start:{line:20,column:70},end:{line:20,column:72}}]},1:{loc:{start:{line:20,column:33},end:{line:20,column:67}},type:"binary-expr",locations:[{start:{line:20,column:33},end:{line:20,column:51}},{start:{line:20,column:55},end:{line:20,column:67}}]},2:{loc:{start:{line:26,column:10},end:{line:29,column:11}},type:"if",locations:[{start:{line:26,column:10},end:{line:29,column:11}},{start:{line:26,column:10},end:{line:29,column:11}}]}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0,1:0,2:0,3:0},b:{0:[0,0],1:[0,0],2:[0,0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},c=t[l]||(t[l]={});return c[n]&&c[n].hash===e?c[n]:(o.hash=e,c[n]=o)}();++cov_1pi3m85sja.s[0],angular.module("app").directive("timeline",function(){return++cov_1pi3m85sja.f[0],++cov_1pi3m85sja.s[1],{restrict:"E",scope:{meta:"=",step:"="},replace:!0,template:'<div class="timeline"><svg class="timeline__chart"></svg></div>',link:function(n,e,t){++cov_1pi3m85sja.f[1];var l=(++cov_1pi3m85sja.s[2],d3.select(e[0]).select("svg")),o=(++cov_1pi3m85sja.s[3],l.node().getBoundingClientRect()),c=o.width,i=o.height,a=(++cov_1pi3m85sja.s[4],new Timeline(l)),m=(++cov_1pi3m85sja.s[5],function(e){return++cov_1pi3m85sja.f[2],++cov_1pi3m85sja.s[6],e>=0?(++cov_1pi3m85sja.b[0][0],++cov_1pi3m85sja.b[1][0],n.meta[e].data||(++cov_1pi3m85sja.b[1][1],m(e-1))):(++cov_1pi3m85sja.b[0][1],[])});++cov_1pi3m85sja.s[7],a.config({width:c,height:i}),++cov_1pi3m85sja.s[8],n.$watch("step",function(e){++cov_1pi3m85sja.f[3],++cov_1pi3m85sja.s[9],e<n.meta.length?(++cov_1pi3m85sja.b[2][0],++cov_1pi3m85sja.s[10],a.draw(m(e))):++cov_1pi3m85sja.b[2][1]})}}});var cov_19djytm2gv=function(){var n="/home/pirhoo/Repositories/okf-farmcompass/src/app/timeline/timeline.chart.js",e="41ef4033012e59d06329272ca88fa00e1fb2a536",t=new Function("return this")(),l="__coverage__",o={path:"/home/pirhoo/Repositories/okf-farmcompass/src/app/timeline/timeline.chart.js",statementMap:{0:{start:{line:3,column:4},end:{line:3,column:14}},1:{start:{line:5,column:4},end:{line:36,column:6}},2:{start:{line:38,column:4},end:{line:38,column:61}},3:{start:{line:40,column:17},end:{line:40,column:47}},4:{start:{line:41,column:17},end:{line:41,column:47}},5:{start:{line:43,column:15},end:{line:43,column:81}},6:{start:{line:43,column:44},end:{line:43,column:56}},7:{start:{line:43,column:65},end:{line:43,column:80}},8:{start:{line:45,column:4},end:{line:45,column:56}},9:{start:{line:46,column:4},end:{line:46,column:56}},10:{start:{line:48,column:4},end:{line:75,column:6}},11:{start:{line:50,column:8},end:{line:50,column:64}},12:{start:{line:50,column:59},end:{line:50,column:63}},13:{start:{line:53,column:8},end:{line:53,column:66}},14:{start:{line:53,column:50},end:{line:53,column:64}},15:{start:{line:57,column:23},end:{line:57,column:24}},16:{start:{line:59,column:10},end:{line:62,column:12}},17:{start:{line:61,column:12},end:{line:61,column:79}},18:{start:{line:64,column:10},end:{line:69,column:44}},19:{start:{line:71,column:34},end:{line:71,column:63}},20:{start:{line:72,column:34},end:{line:72,column:63}},21:{start:{line:73,column:34},end:{line:73,column:100}},22:{start:{line:79,column:16},end:{line:79,column:35}},23:{start:{line:81,column:15},end:{line:94,column:10}},24:{start:{line:82,column:6},end:{line:92,column:8}},25:{start:{line:87,column:10},end:{line:90,column:12}},26:{start:{line:93,column:6},end:{line:93,column:17}},27:{start:{line:96,column:4},end:{line:106,column:6}},28:{start:{line:103,column:29},end:{line:103,column:59}},29:{start:{line:103,column:51},end:{line:103,column:58}},30:{start:{line:105,column:29},end:{line:105,column:59}},31:{start:{line:105,column:51},end:{line:105,column:58}},32:{start:{line:110,column:4},end:{line:110,column:83}},33:{start:{line:110,column:44},end:{line:110,column:53}},34:{start:{line:110,column:64},end:{line:110,column:67}},35:{start:{line:113,column:4},end:{line:115,column:5}},36:{start:{line:114,column:6},end:{line:114,column:71}},37:{start:{line:118,column:4},end:{line:118,column:86}},38:{start:{line:118,column:65},end:{line:118,column:84}},39:{start:{line:121,column:18},end:{line:121,column:40}},40:{start:{line:122,column:26},end:{line:125,column:5}},41:{start:{line:127,column:4},end:{line:127,column:65}},42:{start:{line:128,column:4},end:{line:128,column:64}},43:{start:{line:130,column:4},end:{line:130,column:38}},44:{start:{line:131,column:4},end:{line:131,column:79}},45:{start:{line:133,column:4},end:{line:138,column:67}},46:{start:{line:140,column:4},end:{line:145,column:56}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:2},end:{line:2,column:3}},loc:{start:{line:2,column:18},end:{line:76,column:3}}},1:{name:"(anonymous_1)",decl:{start:{line:43,column:39},end:{line:43,column:40}},loc:{start:{line:43,column:44},end:{line:43,column:56}}},2:{name:"(anonymous_2)",decl:{start:{line:43,column:60},end:{line:43,column:61}},loc:{start:{line:43,column:65},end:{line:43,column:80}}},3:{name:"(anonymous_3)",decl:{start:{line:49,column:16},end:{line:49,column:17}},loc:{start:{line:49,column:31},end:{line:51,column:7}}},4:{name:"(anonymous_4)",decl:{start:{line:50,column:54},end:{line:50,column:55}},loc:{start:{line:50,column:59},end:{line:50,column:63}}},5:{name:"(anonymous_5)",decl:{start:{line:52,column:14},end:{line:52,column:15}},loc:{start:{line:52,column:25},end:{line:54,column:7}}},6:{name:"(anonymous_6)",decl:{start:{line:53,column:45},end:{line:53,column:46}},loc:{start:{line:53,column:50},end:{line:53,column:64}}},7:{name:"(anonymous_7)",decl:{start:{line:56,column:17},end:{line:56,column:18}},loc:{start:{line:56,column:30},end:{line:70,column:9}}},8:{name:"(anonymous_8)",decl:{start:{line:59,column:25},end:{line:59,column:26}},loc:{start:{line:59,column:35},end:{line:62,column:11}}},9:{name:"(anonymous_9)",decl:{start:{line:71,column:29},end:{line:71,column:30}},loc:{start:{line:71,column:34},end:{line:71,column:63}}},10:{name:"(anonymous_10)",decl:{start:{line:72,column:29},end:{line:72,column:30}},loc:{start:{line:72,column:34},end:{line:72,column:63}}},11:{name:"(anonymous_11)",decl:{start:{line:73,column:29},end:{line:73,column:30}},loc:{start:{line:73,column:34},end:{line:73,column:100}}},12:{name:"(anonymous_12)",decl:{start:{line:77,column:2},end:{line:77,column:3}},loc:{start:{line:77,column:18},end:{line:107,column:3}}},13:{name:"(anonymous_13)",decl:{start:{line:81,column:30},end:{line:81,column:31}},loc:{start:{line:81,column:42},end:{line:94,column:5}}},14:{name:"(anonymous_14)",decl:{start:{line:86,column:29},end:{line:86,column:30}},loc:{start:{line:86,column:37},end:{line:91,column:9}}},15:{name:"(anonymous_15)",decl:{start:{line:103,column:24},end:{line:103,column:25}},loc:{start:{line:103,column:29},end:{line:103,column:59}}},16:{name:"(anonymous_16)",decl:{start:{line:103,column:46},end:{line:103,column:47}},loc:{start:{line:103,column:51},end:{line:103,column:58}}},17:{name:"(anonymous_17)",decl:{start:{line:105,column:24},end:{line:105,column:25}},loc:{start:{line:105,column:29},end:{line:105,column:59}}},18:{name:"(anonymous_18)",decl:{start:{line:105,column:46},end:{line:105,column:47}},loc:{start:{line:105,column:51},end:{line:105,column:58}}},19:{name:"(anonymous_19)",decl:{start:{line:108,column:2},end:{line:108,column:3}},loc:{start:{line:108,column:14},end:{line:111,column:3}}},20:{name:"(anonymous_20)",decl:{start:{line:110,column:39},end:{line:110,column:40}},loc:{start:{line:110,column:44},end:{line:110,column:53}}},21:{name:"(anonymous_21)",decl:{start:{line:110,column:59},end:{line:110,column:60}},loc:{start:{line:110,column:64},end:{line:110,column:67}}},22:{name:"(anonymous_22)",decl:{start:{line:112,column:2},end:{line:112,column:3}},loc:{start:{line:112,column:31},end:{line:116,column:3}}},23:{name:"(anonymous_23)",decl:{start:{line:113,column:11},end:{line:113,column:12}},loc:{start:{line:113,column:30},end:{line:115,column:5}}},24:{name:"(anonymous_24)",decl:{start:{line:117,column:2},end:{line:117,column:3}},loc:{start:{line:117,column:30},end:{line:119,column:3}}},25:{name:"(anonymous_25)",decl:{start:{line:118,column:60},end:{line:118,column:61}},loc:{start:{line:118,column:65},end:{line:118,column:84}}},26:{name:"(anonymous_26)",decl:{start:{line:120,column:2},end:{line:120,column:3}},loc:{start:{line:120,column:16},end:{line:146,column:3}}}},branchMap:{0:{loc:{start:{line:112,column:12},end:{line:112,column:20}},type:"default-arg",locations:[{start:{line:112,column:19},end:{line:112,column:20}}]},1:{loc:{start:{line:112,column:22},end:{line:112,column:29}},type:"default-arg",locations:[{start:{line:112,column:28},end:{line:112,column:29}}]}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0},b:{0:[0],1:[0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},c=t[l]||(t[l]={});return c[n]&&c[n].hash===e?c[n]:(o.hash=e,c[n]=o)}(),_slicedToArray=function(){function n(n,e){var t=[],l=!0,o=!1,c=void 0;try{for(var i,a=n[Symbol.iterator]();!(l=(i=a.next()).done)&&(t.push(i.value),!e||t.length!==e);l=!0);}catch(m){o=!0,c=m}finally{try{!l&&a["return"]&&a["return"]()}finally{if(o)throw c}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return n(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function n(n,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}return function(e,t,l){return t&&n(e.prototype,t),l&&n(e,l),e}}(),Timeline=function(n){function e(n){_classCallCheck(this,e),++cov_19djytm2gv.f[0],++cov_19djytm2gv.s[0];var t=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));++cov_19djytm2gv.s[1],t.configs={height:{name:"height",description:"The height of the chart.",value:500,type:"number",units:"px",category:"Size"},width:{name:"width",description:"The width of the chart.",value:800,units:"px",type:"number",category:"Size"},padding:{name:"padding",description:"Space between the chart and the SVG borders.",type:"object",units:"px",category:"Size",value:{top:60,bottom:40,left:60,right:20}},transition:{name:"transition",type:"number",units:"ms",value:700}},++cov_19djytm2gv.s[2],t.transitionValues=t.transitionValues.bind(t);var l=(++cov_19djytm2gv.s[3],t.xScale=d3.scaleLinear()),o=(++cov_19djytm2gv.s[4],t.yScale=d3.scaleLinear()),c=(++cov_19djytm2gv.s[5],t.path=d3.line().x(function(n){return++cov_19djytm2gv.f[1],++cov_19djytm2gv.s[6],l(n.id)}).y(function(n){return++cov_19djytm2gv.f[2],++cov_19djytm2gv.s[7],o(n.value)}));return++cov_19djytm2gv.s[8],t.base.append("g").attr("class","axis axis--x"),++cov_19djytm2gv.s[9],t.base.append("g").attr("class","axis axis--y"),++cov_19djytm2gv.s[10],t.layer("lines",t.base.append("g").attr("class"," lines"),{dataBind:function(n){return++cov_19djytm2gv.f[3],++cov_19djytm2gv.s[11],this.selectAll("path").data(n.rows,function(n){return++cov_19djytm2gv.f[4],++cov_19djytm2gv.s[12],n.id})},insert:function(){return++cov_19djytm2gv.f[5],++cov_19djytm2gv.s[13],this.append("path").attr("d",function(n){return++cov_19djytm2gv.f[6],++cov_19djytm2gv.s[14],c(n.values)})},events:{enter:function(n){++cov_19djytm2gv.f[7];var e=(++cov_19djytm2gv.s[15],0);++cov_19djytm2gv.s[16],n.each(function(){++cov_19djytm2gv.f[8],++cov_19djytm2gv.s[17],e=Math.max(e,d3.select(this).node().getTotalLength())}),++cov_19djytm2gv.s[18],n.attr("stroke-dasharray",e+" "+e).attr("stroke-dashoffset",e).transition().duration(t.config("transition")).attr("stroke-dashoffset",0)},"merge:transition":function(n){return++cov_19djytm2gv.f[9],++cov_19djytm2gv.s[19],n.call(t.transitionValues)},"update:transition":function(n){return++cov_19djytm2gv.f[10],++cov_19djytm2gv.s[20],n.call(t.transitionValues)},"exit:transition":function(n){return++cov_19djytm2gv.f[11],++cov_19djytm2gv.s[21],n.duration(t.config("transition")).style("opacity",0).remove()}}}),t}return _inherits(e,n),_createClass(e,[{key:"transform",value:function(n){++cov_19djytm2gv.f[12];var e=(++cov_19djytm2gv.s[22],this.years(n[0])),t=(++cov_19djytm2gv.s[23],_.reduce(n,function(n,t){return++cov_19djytm2gv.f[13],++cov_19djytm2gv.s[24],n.push({id:_.values(t).pop(),values:_.map(e,function(n){return++cov_19djytm2gv.f[14],++cov_19djytm2gv.s[25],{value:t[n],id:n}})}),++cov_19djytm2gv.s[26],n},[]));return++cov_19djytm2gv.s[27],{years:e,rows:t,begin:e[0],end:e[e.length-1],min:d3.min(t,function(n){return++cov_19djytm2gv.f[15],++cov_19djytm2gv.s[28],d3.min(n.values,function(n){return++cov_19djytm2gv.f[16],++cov_19djytm2gv.s[29],n.value})}),max:d3.max(t,function(n){return++cov_19djytm2gv.f[17],++cov_19djytm2gv.s[30],d3.max(n.values,function(n){return++cov_19djytm2gv.f[18],++cov_19djytm2gv.s[31],n.value})})}}},{key:"years",value:function(n){return++cov_19djytm2gv.f[19],++cov_19djytm2gv.s[32],_.chain(n).keys().remove(function(n){return++cov_19djytm2gv.f[20],++cov_19djytm2gv.s[33],!isNaN(n)}).map(function(n){return++cov_19djytm2gv.f[21],++cov_19djytm2gv.s[34],1*n}).sort().value()}},{key:"translate",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(++cov_19djytm2gv.b[0][0],0),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(++cov_19djytm2gv.b[1][0],0);return++cov_19djytm2gv.f[22],++cov_19djytm2gv.s[35],function(t){return++cov_19djytm2gv.f[23],++cov_19djytm2gv.s[36],t.attr("transform","translate("+n+", "+e+")")}}},{key:"transitionValues",value:function(n){var e=this;++cov_19djytm2gv.f[24],++cov_19djytm2gv.s[37],n.duration(this.config("transition")).attr("d",function(n){return++cov_19djytm2gv.f[25],++cov_19djytm2gv.s[38],e.path(n.values)})}},{key:"preDraw",value:function(n){++cov_19djytm2gv.f[26];var e=(++cov_19djytm2gv.s[39],this.config("padding")),t=(++cov_19djytm2gv.s[40],[this.config("width")-e.left-e.right,this.config("height")-e.top-e.bottom]),l=_slicedToArray(t,2),o=l[0],c=l[1];++cov_19djytm2gv.s[41],this.xScale.range([0,o]).domain([n.begin,n.end]),++cov_19djytm2gv.s[42],this.yScale.range([c,0]).domain([n.min,n.max]),++cov_19djytm2gv.s[43],this.base.attr({width:o,height:c}),++cov_19djytm2gv.s[44],this.base.select(".lines").call(this.translate(e.left,e.top)),++cov_19djytm2gv.s[45],this.base.select(".axis--x").call(this.translate(e.left,c+e.top)).transition().duration(this.config("transition")).call(d3.axisBottom(this.xScale).tickFormat(d3.format(""))),++cov_19djytm2gv.s[46],this.base.select(".axis--y").call(this.translate(e.left,e.top)).transition().duration(this.config("transition")).call(d3.axisLeft(this.yScale).tickSizeOuter(0))}}]),e}(Koto),cov_fk44tvvjm=function(){var n="/home/pirhoo/Repositories/okf-farmcompass/src/app/main/main.js",e="8494d14fd62893551e8b7282c63118be0848751f",t=new Function("return this")(),l="__coverage__",o={path:"/home/pirhoo/Repositories/okf-farmcompass/src/app/main/main.js",statementMap:{0:{start:{line:4,column:4},end:{line:4,column:45}},1:{start:{line:6,column:4},end:{line:6,column:41}},2:{start:{line:8,column:4},end:{line:8,column:37}},3:{start:{line:9,column:4},end:{line:9,column:43}},4:{start:{line:12,column:4},end:{line:12,column:22}},5:{start:{line:15,column:4},end:{line:15,column:41}},6:{start:{line:18,column:4},end:{line:22,column:5}},7:{start:{line:19,column:6},end:{line:19,column:59}},8:{start:{line:21,column:6},end:{line:21,column:47}},9:{start:{line:25,column:4},end:{line:25,column:32}},10:{start:{line:29,column:0},end:{line:37,column:5}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:2},end:{line:2,column:3}},loc:{start:{line:2,column:44},end:{line:10,column:3}}},1:{name:"(anonymous_1)",decl:{start:{line:11,column:2},end:{line:11,column:3}},loc:{start:{line:11,column:13},end:{line:13,column:3}}},2:{name:"(anonymous_2)",decl:{start:{line:14,column:2},end:{line:14,column:3}},loc:{start:{line:14,column:28},end:{line:16,column:3}}},3:{name:"(anonymous_3)",decl:{start:{line:17,column:2},end:{line:17,column:3}},loc:{start:{line:17,column:9},end:{line:23,column:3}}},4:{name:"(anonymous_4)",decl:{start:{line:24,column:2},end:{line:24,column:3}},loc:{start:{line:24,column:12},end:{line:26,column:3}}}},branchMap:{0:{loc:{start:{line:15,column:22},end:{line:15,column:39}},type:"binary-expr",locations:[{start:{line:15,column:22},end:{line:15,column:34}},{start:{line:15,column:38},end:{line:15,column:39}}]},1:{loc:{start:{line:18,column:4},end:{line:22,column:5}},type:"if",locations:[{start:{line:18,column:4},end:{line:22,column:5}},{start:{line:18,column:4},end:{line:22,column:5}}]}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},c=t[l]||(t[l]={});return c[n]&&c[n].hash===e?c[n]:(o.hash=e,c[n]=o)}(),_createClass=function(){function n(n,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}return function(e,t,l){return t&&n(e.prototype,t),l&&n(e,l),e}}(),MainController=function(){function n(e,t,l){"ngInject";_classCallCheck(this,n),++cov_fk44tvvjm.f[0],++cov_fk44tvvjm.s[0],angular.extend(this,{$state:t,$scope:l}),++cov_fk44tvvjm.s[1],this.uiOnParamsChanged(e),++cov_fk44tvvjm.s[2],this.next=this.next.bind(this),++cov_fk44tvvjm.s[3],this.current=this.current.bind(this)}return n.$inject=["$stateParams","$state","$scope"],_createClass(n,[{key:"uiOnParamsChanged",value:function(n){++cov_fk44tvvjm.f[2],++cov_fk44tvvjm.s[5],this._step=1*(++cov_fk44tvvjm.b[0][0],n.index||(++cov_fk44tvvjm.b[0][1],0))}},{key:"next",value:function(){++cov_fk44tvvjm.f[3],++cov_fk44tvvjm.s[6],this.step<this.meta.length-1?(++cov_fk44tvvjm.b[1][0],++cov_fk44tvvjm.s[7],this.$state.go("main.step",{index:this.step+1})):(++cov_fk44tvvjm.b[1][1],++cov_fk44tvvjm.s[8],this.$state.go("main.step",{index:0}))}},{key:"current",value:function(){return++cov_fk44tvvjm.f[4],++cov_fk44tvvjm.s[9],this.meta[this.step]}},{key:"step",get:function(){return++cov_fk44tvvjm.f[1],++cov_fk44tvvjm.s[4],this._step}}]),n}();++cov_fk44tvvjm.s[10],angular.module("app").component("main",{templateUrl:"app/main/main.html",controller:MainController,bindings:{meta:"<"}}),angular.module("app").run(["$templateCache",function(n){n.put("app/main/main.html",'<div class="main">\n  <div class="main__intro" ng-show="\'main\' | isState" ui-sref="main.step({ index: 0 })">\n    <div class="main__intro__bg">\n      <video-bg video-id="\'9pYqdGqyLdU\'">\n        <div><!-- I don\'t know why but we need to add content<\n                  here for having the video to start. --></div>\n      </video-bg>\n    </div>\n    <div class="main__intro__heading">\n      <div class="main__intro__heading__start">\n        Read the full story\n        <i class="fa fa-play-circle"></i>\n      </div>\n      <h1 class="main__intro__heading__title">\n        Agricultural Subsidies:<br>New&nbsp;Countries, Same&nbsp;Problems\n      </h1>\n      <p class="main__intro__heading__abstract lead">\n        The Common Agricultural Policy of the European Union gives out a lot of money to farmers - 60 billion each year. While it does help some farms, most of this money incentivizes farmers to grow cash crops and employ less workers.\n      </p>\n    </div>\n  </div>\n  <h2 class="main__heading">\n    {{ $ctrl.current().slidetitleenbe }}\n  </h2>\n  <ui-view ng-click="$ctrl.next()"></ui-view>\n</div>\n')}]);var cov_1doetww3ux=function(){var n="/home/pirhoo/Repositories/okf-farmcompass/src/routes.js",e="806f94cbc63d27fed402ac0bdee23ccf25aafd56",t=new Function("return this")(),l="__coverage__",o={path:"/home/pirhoo/Repositories/okf-farmcompass/src/routes.js",statementMap:{0:{start:{line:1,column:0},end:{line:3,column:24}},1:{start:{line:7,column:2},end:{line:7,column:37}},2:{start:{line:8,column:2},end:{line:8,column:36}},3:{start:{line:10,column:2},end:{line:30,column:7}},4:{start:{line:17,column:10},end:{line:17,column:63}},5:{start:{line:17,column:55},end:{line:17,column:61}}},fnMap:{0:{name:"routesConfig",decl:{start:{line:6,column:9},end:{line:6,column:21}},loc:{start:{line:6,column:77},end:{line:31,column:1}}},1:{name:"(anonymous_1)",decl:{start:{line:15,column:14},end:{line:15,column:15}},loc:{start:{line:15,column:24},end:{line:18,column:9}}},2:{name:"(anonymous_2)",decl:{start:{line:17,column:50},end:{line:17,column:51}},loc:{start:{line:17,column:55},end:{line:17,column:61}}}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},c=t[l]||(t[l]={});return c[n]&&c[n].hash===e?c[n]:(o.hash=e,c[n]=o)}();++cov_1doetww3ux.s[0],angular.module("app").config(routesConfig);
//# sourceMappingURL=../maps/scripts/app-a6f0a89400.js.map
