webpackHotUpdate(1,{

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(29);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(25);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(6);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(26);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Popup = __webpack_require__(172);\n\nvar _Popup2 = _interopRequireDefault(_Popup);\n\nvar _ClickBtn = __webpack_require__(168);\n\nvar _ClickBtn2 = _interopRequireDefault(_ClickBtn);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  DragDemo: {\n    displayName: 'DragDemo'\n  }\n};\n\nvar _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/Users/Zhangpei/twClass/reduxDemo/components/DragDemo.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/Users/Zhangpei/twClass/reduxDemo/components/DragDemo.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2(_UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar DragDemo = _wrapComponent('DragDemo')(function (_Component) {\n  _inherits(DragDemo, _Component);\n\n  function DragDemo(props) {\n    _classCallCheck(this, DragDemo);\n\n    var _this = _possibleConstructorReturn(this, (DragDemo.__proto__ || Object.getPrototypeOf(DragDemo)).call(this, props));\n\n    _this.state = {\n      status: 'off'\n    };\n    return _this;\n  }\n\n  _createClass(DragDemo, [{\n    key: 'change',\n    value: function change(e) {\n      console.log(e.target);\n      if (this.button !== e.target) {\n        console.log('}}}}');\n        this.toggle();\n      }\n    }\n  }, {\n    key: 'onClick',\n    value: function onClick(e) {\n      console.log('+++++');\n      console.log(e.target);\n      this.toggle();\n    }\n  }, {\n    key: 'toggle',\n    value: function toggle() {\n      var _this2 = this;\n\n      console.log('_____');\n      this.setState({\n        status: this.state.status === 'on' ? 'off' : 'on'\n      }, function () {\n        if (_this2.state.status === 'on') {\n          _this2.button.on();\n          _this2.popUp.show();\n        } else {\n          _this2.button.off();\n          _this2.popUp.hide();\n        }\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react3.default.createElement(\n        'div',\n        { className: 'component' },\n        _react3.default.createElement(\n          'div',\n          { onClick: this.onClick.bind(this) },\n          _react3.default.createElement(_ClickBtn2.default, { ref: function ref(_ref) {\n              _this3.button = _ref;\n            }, status: this.state.status })\n        ),\n        _react3.default.createElement(_Popup2.default, { ref: function ref(_ref2) {\n            _this3.popUp = _ref2;\n          }, change: this.change.bind(this) })\n      );\n    }\n  }]);\n\n  return DragDemo;\n}(_react2.Component));\n\nexports.default = DragDemo;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)(module)))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvRHJhZ0RlbW8uanM/YmZlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcbmltcG9ydCBDbGlja0J0biBmcm9tICcuL0NsaWNrQnRuJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZT17XG4gICAgICBzdGF0dXM6J29mZidcbiAgICB9XG4gIH1cblxuICBjaGFuZ2UoZSl7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgaWYodGhpcy5idXR0b24gIT09IGUudGFyZ2V0KXtcbiAgICAgIGNvbnNvbGUubG9nKCd9fX19JylcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBjb25zb2xlLmxvZygnKysrKysnKVxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICB0b2dnbGUoKXtcbiAgICBjb25zb2xlLmxvZygnX19fX18nKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXRlLnN0YXR1cyA9PT0gJ29uJyA/ICdvZmYnIDogJ29uJ1xuICAgIH0sKCk9PntcbiAgICAgIGlmKHRoaXMuc3RhdGUuc3RhdHVzID09PSAnb24nKXtcbiAgICAgICAgdGhpcy5idXR0b24ub24oKTtcbiAgICAgICAgdGhpcy5wb3BVcC5zaG93KCk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLm9mZigpO1xuICAgICAgICB0aGlzLnBvcFVwLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50XCI+XG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5vbkNsaWNrLmJpbmQodGhpcyl9ID5cbiAgICAgICAgICA8Q2xpY2tCdG4gcmVmPXsocmVmKT0+e1xuICAgICAgICAgICAgdGhpcy5idXR0b24gPSByZWY7XG4gICAgICAgICAgfX0gc3RhdHVzPXt0aGlzLnN0YXRlLnN0YXR1c30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQb3B1cCByZWY9eyhyZWYpPT57XG4gICAgICAgICAgdGhpcy5wb3BVcCA9IHJlZjtcbiAgICAgICAgfX0gY2hhbmdlPXt0aGlzLmNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvRHJhZ0RlbW8uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFXQTs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})