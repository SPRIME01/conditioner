!function(e){"use strict";var t={unique:!0,data:{mql:null},trigger:function(t,n){"supported"!==n.expected&&(n.mql=e.matchMedia(n.expected),n.mql.addListener(function(){t()}))},parse:function(e){var t=[];return t.push("supported"===e?{test:"supported",value:!0}:{test:"query",value:e}),t},test:{supported:function(){return"matchMedia"in e},query:function(e){return e.mql.matches}}};"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd&&define(function(){return t})}(window);