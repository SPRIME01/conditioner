!function(e,t,n){"use strict";var o=function(){return e.pageXOffset!==n?e.pageXOffset:(t.documentElement||t.body.parentNode||t.body).scrollLeft},r=function(){return e.pageYOffset!==n?e.pageYOffset:(t.documentElement||t.body.parentNode||t.body).scrollTop},i=function(e,t){if(t){var n,i,a=e.getBoundingClientRect(),d=t.pageX-o(),u=t.pageY-r();return n=d<a.left?a.left:d>a.right?a.right:d,i=u<a.top?a.top:u>a.bottom?a.bottom:u,n===d&&i===u?0:Math.pow(d-n,2)+Math.pow(u-i,2)}},a=e.PointerEvent||e.MSPointerEvent,d=e.PointerEvent?"pointermove":"MSPointerMove",u={available:!1,moves:0,movesRequired:2},v={data:{beenNear:!1},trigger:function(e){var n=function o(n){if(a){if(u.available=4===n.pointerType||3===n.pointerType,!u.available)return;return t.removeEventListener(d,o,!1),void e()}return"mousemove"!==n.type?void(u.moves=0):void(++u.moves>=u.movesRequired&&(t.removeEventListener("mousemove",o,!1),t.removeEventListener("mousedown",o,!1),u.available=!0,e()))};a?t.addEventListener(d,n,!1):(t.addEventListener("mousemove",n,!1),t.addEventListener("mousedown",n,!1)),t.addEventListener("mousemove",function(t){e(t)},!1)},test:{near:function(e,t){if(!u.available)return!1;if(e.beenNear)return!0;var n=e.expected===!0?50:parseInt(e.expected,10);return e.beenNear=n*n>=i(e.element,t)},hovers:function(e){return u.available===e.expected}}};"undefined"!=typeof module&&module.exports?module.exports=v:"function"==typeof define&&define.amd&&define(function(){return v})}(window,document);