(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modulesModule = require('./modules/module');

var _modulesModule2 = _interopRequireDefault(_modulesModule);

(function () {
  new _modulesModule2['default'](document.getElementById('js-module'));
})();

},{"./modules/module":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utils = require('../utils');

var Module = (function () {
  function Module() {
    _classCallCheck(this, Module);
  }

  // butotn click value more than > 1 search

  _createClass(Module, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {}
  }]);

  return Module;
})();

exports['default'] = Module;
module.exports = exports['default'];

},{"../utils":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getActiveBreakpoint = getActiveBreakpoint;
exports.forEach = forEach;

function getActiveBreakpoint() {
  return window.getComputedStyle(document.documentElement, ':after').getPropertyValue('content').replace(/['"]/g, '');
}

function forEach(array, callback, scope) {
  for (var i = 0, len = array.length; i < len; i++) {
    callback.call(scope, i, array[i]);
  }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvTmVyaWp1cy9TaXRlcy9MZWFybi9jb2RlLWRldi1zdGFydGVyL3NyYy9qcy9tYWluLmpzIiwiL1VzZXJzL05lcmlqdXMvU2l0ZXMvTGVhcm4vY29kZS1kZXYtc3RhcnRlci9zcmMvanMvbW9kdWxlcy9tb2R1bGUuanMiLCIvVXNlcnMvTmVyaWp1cy9TaXRlcy9MZWFybi9jb2RlLWRldi1zdGFydGVyL3NyYy9qcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7Ozs2QkFDTSxrQkFBa0I7Ozs7QUFFckMsQUFBQyxDQUFBLFlBQVk7QUFDWCxpQ0FBVyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Q0FDbEQsQ0FBQSxFQUFFLENBQUU7Ozs7Ozs7Ozs7Ozs7cUJDTG1CLFVBQVU7O0lBRWIsTUFBTTtBQUNiLFdBRE8sTUFBTSxHQUNWOzBCQURJLE1BQU07R0FFeEI7Ozs7ZUFGa0IsTUFBTTs7V0FLWixzQkFBQyxDQUFDLEVBQUUsRUFDaEI7OztTQU5rQixNQUFNOzs7cUJBQU4sTUFBTTs7Ozs7Ozs7Ozs7O0FDRnBCLFNBQVMsbUJBQW1CLEdBQUk7QUFDckMsU0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ3JIOztBQUVNLFNBQVMsT0FBTyxDQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0FBQy9DLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDaEQsWUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQ25DO0NBQ0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL21vZHVsZXMvbW9kdWxlJztcblxuKGZ1bmN0aW9uICgpIHtcbiAgbmV3IFNlYXJjaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbW9kdWxlJykpO1xufSgpKTtcbiIsImltcG9ydCB7IGZvckVhY2ggfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgfVxuXG4gIC8vIGJ1dG90biBjbGljayB2YWx1ZSBtb3JlIHRoYW4gPiAxIHNlYXJjaFxuICBoYW5kbGVTdWJtaXQgKGUpIHtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZUJyZWFrcG9pbnQgKCkge1xuICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnOmFmdGVyJykuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpLnJlcGxhY2UoL1snXCJdL2csICcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2ggKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pO1xuICB9XG59XG4iXX0=
