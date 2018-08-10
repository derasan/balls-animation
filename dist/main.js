!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=document.getElementById("mainContainer"),r={rightBorder:o.clientWidth-50,bottomBorder:o.clientHeight,leftBorder:0,topBorder:50};t.radius=50,t.windowSize=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createBall=t.onMouseUp=t.onMouseMove=t.onMouseDown=t.array=void 0;var o=n(2),r=n(0),i=[],a={},l=function(){var e=document.getElementById("header"),t=document.createElement("div");t.id="ball",e.appendChild(t),u(t,e)},u=function(e,t){t.style.height=r.radius+"px",e.style.width=r.radius+"px",e.style.height=r.radius+"px"},s=function(e){if(a.element){a.element.hidden=!0;var t=document.elementFromPoint(e.clientX,e.clientY);return a.element.hidden=!1,null==t?null:t.closest("#mainContainer")}},d=function(){var e=a.element,t={parent:e.parentNode,nextSibling:e.nextSibling,position:e.position||"",left:e.left||"",top:e.top||"",zIndex:e.zIndex||""};return e.rollback=function(){t.parent.insertBefore(e,t.nextSibling),e.style.position=t.position,e.style.left=t.left,e.style.top=t.top,e.style.zIndex=t.zIndex},e};t.array=i,t.onMouseDown=function(e){if(1==e.which){var t=e.target.closest("#ball");if(t)return a.element=t,a.element.style.position="absolute",a.element.style.cursor="pointer",!1}},t.onMouseMove=function(e){if(a.element){if(a.avatar=d(e),a.avatar)return a.element.style.left=e.pageX-a.element.offsetWidth/2+"px",a.element.style.top=e.pageY-a.element.offsetHeight/2+"px",!1;a={}}},t.onMouseUp=function(e){if(s(e)){a.element.CoordX=e.pageX,a.element.CoordY=e.pageY;var t=new o.Ball(a.element,a.element.CoordX,a.element.CoordY,5,5);i.push(t),l()}else a.avatar.rollback();a={}},t.createBall=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Ball=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0);var i=function(){function e(t,n,o,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=o,this.dx=r,this.dy=i,this.element=t}return o(e,[{key:"step",value:function(){this.x+=this.dx,this.y+=this.dy,this.element.style.left=this.x+"px",this.element.style.top=this.y+"px"}},{key:"bounceOnBorder",value:function(){(this.x>=r.windowSize.rightBorder||this.x<=r.windowSize.leftBorder)&&(this.dx=-this.dx),(this.y>=r.windowSize.bottomBorder||this.y<=r.windowSize.topBorder)&&(this.dy=-this.dy)}},{key:"bounceOnBall",value:function(e){var t=this.dx;this.dx=e.dx,e.dx=t;var n=this.dy;this.dy=e.dy,e.dy=n}},{key:"changeColor",value:function(e){this.element.style.backgroundColor="yellow",e.element.style.backgroundColor="red"}}]),e}();t.Ball=i},function(e,t,n){"use strict";n(4);var o=n(1),r=n(6);document.addEventListener("DOMContentLoaded",function(){(0,o.createBall)(),document.onmousedown=o.onMouseDown,document.onmousemove=o.onMouseMove,document.onmouseup=o.onMouseUp,(0,r.animate)()})},function(e,t,n){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animate=void 0;var o=n(1),r=n(0);n(2);window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)});var i=function(){var e=o.array.length;if(e)for(var t=0;t<=e-1;t++){o.array[t].bounceOnBorder(),o.array[t].step();for(var n=t+1;n<=e-1;n++)a(l(o.array[t],o.array[n]))&&(o.array[t].bounceOnBall(o.array[n]),o.array[t].changeColor(o.array[n]))}},a=function(e){return e<=r.radius},l=function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))};t.animate=function e(){requestAnimationFrame(e),i()}}]);