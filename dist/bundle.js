!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=4)}([function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();e.RandomGenerator=function(){function n(){r(this,n)}return o(n,null,[{key:"randomInteger",value:function(){return Math.ceil(100*Math.random())}},{key:"randomRange",value:function(n,e){return Math.floor(Math.random()*(e-n+1))+n}}]),n}()},function(n,e){},function(n,e){},function(n,e){},function(n,e,t){"use strict";t(1),t(3),t(2);var r=t(0),o=document.querySelector("#outputParagraph"),u=function(){o.textContent=r.RandomGenerator.randomInteger()},a=function(){o.textContent=r.RandomGenerator.randomRange(1,500)},c=document.querySelector("#randomInt"),i=document.querySelector("#randomRange");c.addEventListener("click",u),i.addEventListener("click",a)}]);