webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _App = __webpack_require__(179);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('container'));

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(180);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FunctionComponent = function FunctionComponent(_ref) {
	  var x = _ref.x,
	      y = _ref.y,
	      z = _ref.z,
	      f = _ref.f;
	  return _react2.default.createElement(
	    'div',
	    null,
	    x,
	    ' + ',
	    y,
	    '  + ',
	    z
	  );
	};

	var label = { x: 1, y: 2, z: 3 };

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'test' },
	        _react2.default.createElement('i', { className: 'fa fa-frown-o' }),
	        '\u8FD9\u662F\u6211\u7684\u7B2C\u4E00\u4E2Areact\u9875\u9762\uFF01',
	        _react2.default.createElement(
	          'div',
	          { className: 'btn-group' },
	          _react2.default.createElement(
	            'button',
	            { type: 'button', className: 'btn btn-default' },
	            'Left'
	          ),
	          _react2.default.createElement(
	            'button',
	            { type: 'button', className: 'btn btn-default' },
	            'Middle'
	          ),
	          _react2.default.createElement(
	            'button',
	            { type: 'button', className: 'btn btn-default' },
	            'Right'
	          )
	        ),
	        _react2.default.createElement(FunctionComponent, _extends({}, label, { f: 'd' }))
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

/***/ },

/***/ 180:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=index.js.map