/******/!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}// webpackBootstrap
/******/
var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(1),o=n(2),a=n(3),i=n(4),s=n(5),c=n(6),u=n(7),l=n(8),p=n(9),f=n(10),v=n(11),g=n(12);angular.module("pepperWebapp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr"]).constant("malarkey",malarkey).constant("moment",moment).config(r.config).config(o.routerConfig).run(a.runBlock).service("githubContributor",s.GithubContributorService).service("webDevTec",c.WebDevTecService).service("messageService",u.MessageService).service("chatService",l.ChatService).service("datasource",p.Datasource).controller("MainController",i.MainController).directive("acmeNavbar",f.NavbarDirective).directive("acmeMalarkey",v.MalarkeyDirective).directive("pepperTalk",g.PepperTalkDirective)},function(e,t){"use strict";function n(e,t){"ngInject";e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}Object.defineProperty(t,"__esModule",{value:!0}),t.config=n,n.$inject=["$logProvider","toastrConfig"]},function(e,t){"use strict";function n(e,t){"ngInject";e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=n,n.$inject=["$stateProvider","$urlRouterProvider"]},function(e,t){"use strict";function n(e){"ngInject";e.debug("runBlock end")}Object.defineProperty(t,"__esModule",{value:!0}),t.runBlock=n,n.$inject=["$log"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,r,o){"ngInject";n(this,e),this.awesomeThings=[],this.classAnimation="",this.creationDate=1449138567812,this.toastr=o,this.activate(t,r)}return e.$inject=["$timeout","webDevTec","toastr"],r(e,[{key:"activate",value:function(e,t){var n=this;this.getWebDevTec(t),e(function(){n.classAnimation="rubberBand"},4e3)}},{key:"getWebDevTec",value:function(e){this.awesomeThings=e.getTec(),angular.forEach(this.awesomeThings,function(e){e.rank=Math.random()})}},{key:"showToastr",value:function(){this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),this.classAnimation=""}}]),e}();t.MainController=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,r){"ngInject";n(this,e),this.$log=t,this.$http=r,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"}return e.$inject=["$log","$http"],r(e,[{key:"getContributors",value:function(e){var t=this;return e||(e=30),this.$http.get(this.apiHost+"/contributors?per_page="+e).then(function(e){return e.data})["catch"](function(e){t.$log.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))})}}]),e}();t.GithubContributorService=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){"ngInject";n(this,e),this.data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"ES6 (Babel formerly 6to5)",url:"https://babeljs.io/",description:"Turns ES6+ code into vanilla ES5, so you can use next generation features today.",logo:"babel.png"}]}return r(e,[{key:"getTec",value:function(){return this.data}}]),e}();t.WebDevTecService=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,r){"ngInject";var o=this;n(this,e),this.messages=[],this.datastore=t.datastore(),window.QiSession&&(new QiSession).service("ALTextToSpeech").then(function(e){return o.textToSpeech=e}),this.datastore.on("send",function(e){r.$apply(function(){return o.messages.push(e.value)}),o.textToSpeech&&o.textToSpeech.say(e.value.text)})}return e.$inject=["datasource","$rootScope"],r(e,[{key:"send",value:function(e){var t={text:e};this.datastore.send(t)}}]),e}();t.MessageService=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function o(){"ngInject";var e=this;n(this,o),console.log("chat"),window.QiSession&&(new QiSession).service("QiChat").then(function(t){e.chat=t,console.log(t)})};t.ChatService=r},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){"ngInject";n(this,e);var t=new MilkCocoa("hotif8ab67j.mlkcca.com");this.datastore_=t.dataStore("pepper/app")}return r(e,[{key:"datastore",value:function(){return this.datastore_}}]),e}();t.Datasource=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.NavbarDirective=r;var a=function(){function e(t,r){"ngInject";n(this,e),this.relativeDate=t(this.creationDate).fromNow(),this.$window=r}return e.$inject=["moment","$window"],o(e,[{key:"reload",value:function(){this.$window.location.reload()}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){"ngInject";function t(t,n,r,o){var a=void 0,i=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){i.type(e).pause()["delete"]()}),a=t.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(e){i.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){a()})}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:a,controllerAs:"vm"};return n}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.MalarkeyDirective=r,r.$inject=["malarkey"];var a=function(){function e(t,r){"ngInject";n(this,e),this.$log=t,this.contributors=[],this.activate(r)}return e.$inject=["$log","githubContributor"],o(e,[{key:"activate",value:function(e){var t=this;return this.getContributors(e).then(function(){t.$log.info("Activated Contributors View")})}},{key:"getContributors",value:function(e){var t=this;return e.getContributors(10).then(function(e){return t.contributors=e,t.contributors})}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var e={restrict:"E",scope:{},templateUrl:"app/components/pepper/pepperTalk.html",controller:a,controllerAs:"vm"};return e}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.PepperTalkDirective=r;var a=function(){function e(t,r){"ngInject";n(this,e),this.messageService=t,this.chatService=r,this.messages=t.messages,this.input=""}return e.$inject=["messageService","chatService"],o(e,[{key:"sendMessage",value:function(){this.messageService.send(this.input),this.input=""}}]),e}()}]),angular.module("pepperWebapp").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><pepper-talk></pepper-talk></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Pepper Web</a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-right"><li><button type="button" class="btn btn-default" ng-click="vm.reload()"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span></button></li></ul></div></div></nav>'),e.put("app/components/pepper/pepperTalk.html",'<div><div class="input-group"><input type="text" class="form-control" ng-model="vm.input" placeholder="Message..."> <span class="input-group-btn"><button type="button" class="btn btn-primary" ng-click="vm.sendMessage()">Send</button></span></div><ul class="list-group" ng-repeat="message in vm.messages"><li class="list-group-item">{{message.text}}</li></ul></div>'),e.put("app/components/pepper/talk.html","<div>hogehoge</div>")}]);
//# sourceMappingURL=../maps/scripts/app.js.map
