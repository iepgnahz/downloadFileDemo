webpackHotUpdate(1,{

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(99);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(92);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(7);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(93);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(172);\n\nvar _rodal = __webpack_require__(424);\n\nvar _rodal2 = _interopRequireDefault(_rodal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  RodalDemo: {\n    displayName: 'RodalDemo'\n  }\n};\n\nvar _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/Users/Zhangpei/twClass/reduxDemo/components/RodalDemo.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/Users/Zhangpei/twClass/reduxDemo/components/RodalDemo.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2(_UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar RodalDemo = _wrapComponent('RodalDemo')(function (_Component) {\n  _inherits(RodalDemo, _Component);\n\n  function RodalDemo(props) {\n    _classCallCheck(this, RodalDemo);\n\n    var _this = _possibleConstructorReturn(this, (RodalDemo.__proto__ || Object.getPrototypeOf(RodalDemo)).call(this, props));\n\n    _this.state = {\n      visible: false\n    };\n    return _this;\n  }\n\n  _createClass(RodalDemo, [{\n    key: 'show',\n    value: function show() {\n      this.setState({\n        visible: true\n      });\n    }\n  }, {\n    key: 'hide',\n    value: function hide() {\n      this.setState({\n        visible: false\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(\n          'button',\n          { onClick: this.show.bind(this) },\n          'show'\n        ),\n        _react3.default.createElement(\n          _rodal2.default,\n          { animation: 'fade', visible: this.state.visible, onClose: this.hide.bind(this) },\n          _react3.default.createElement(\n            'div',\n            null,\n            'Content'\n          )\n        )\n      );\n    }\n  }]);\n\n  return RodalDemo;\n}(_react2.Component));\n\nexports.default = RodalDemo;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUm9kYWxEZW1vLmpzPzI2MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3JvZGFsL2xpYi9yb2RhbC5jc3MnO1xuaW1wb3J0IFJvZGFsIGZyb20gJ3JvZGFsJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvZGFsRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGU9e1xuICAgICAgdmlzaWJsZTpmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpYmxlOnRydWVcbiAgICB9KVxuICB9XG5cbiAgaGlkZSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlzaWJsZTpmYWxzZVxuICAgIH0pXG4gIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zaG93LmJpbmQodGhpcyl9PnNob3c8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8Um9kYWwgYW5pbWF0aW9uPSdmYWRlJyAgdmlzaWJsZT17dGhpcy5zdGF0ZS52aXNpYmxlfSBvbkNsb3NlPXt0aGlzLmhpZGUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgPGRpdj5Db250ZW50PC9kaXY+XG4gICAgICAgICAgICAgIDwvUm9kYWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG5cblxuXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9Sb2RhbERlbW8uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSEE7QUFXQTs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})