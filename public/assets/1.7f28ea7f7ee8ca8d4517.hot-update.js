webpackHotUpdate(1,{

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(162);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(157);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(7);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(158);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  ChildrenDemo: {\n    displayName: 'ChildrenDemo'\n  }\n};\n\nvar _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/Users/Zhangpei/twClass/reduxDemo/components/ChildrenDemo.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/Users/Zhangpei/twClass/reduxDemo/components/ChildrenDemo.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2(_UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar ChildrenDemo = _wrapComponent('ChildrenDemo')(function (_Component) {\n  _inherits(ChildrenDemo, _Component);\n\n  function ChildrenDemo(props) {\n    _classCallCheck(this, ChildrenDemo);\n\n    var _this = _possibleConstructorReturn(this, (ChildrenDemo.__proto__ || Object.getPrototypeOf(ChildrenDemo)).call(this, props));\n\n    _this.state = {\n      test: ''\n    };\n    return _this;\n  }\n\n  _createClass(ChildrenDemo, [{\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      console.log('孩子有props被改变啦');\n    }\n  }, {\n    key: 'componentWillUpdate',\n    value: function componentWillUpdate(next) {\n      console.log('willUpdate孩子被执行啦');\n    }\n  }, {\n    key: 'click',\n    value: function click() {\n      this.setState({ test: 'aaa' });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(\n          'h1',\n          null,\n          this.props.text\n        ),\n        _react3.default.createElement(\n          'span',\n          { onClick: function onClick() {\n              return _this2.click();\n            } },\n          '\\u70B9\\u6211\\u5427'\n        )\n      );\n    }\n  }]);\n\n  return ChildrenDemo;\n}(_react2.Component));\n\nexports.default = ChildrenDemo;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)(module)))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDIzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQ2hpbGRyZW5EZW1vLmpzP2ZiODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZHJlbkRlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGU9e1xuICAgICAgdGVzdDonJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICBjb25zb2xlLmxvZygn5a2p5a2Q5pyJcHJvcHPooqvmlLnlj5jllaYnKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0KXtcbiAgICBjb25zb2xlLmxvZygnd2lsbFVwZGF0ZeWtqeWtkOiiq+aJp+ihjOWVpicpXG4gIH1cblxuICBjbGljaygpe1xuICAgIHRoaXMuc2V0U3RhdGUoe3Rlc3Q6J2FhYSd9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+e3RoaXMucHJvcHMudGV4dH08L2gxPlxuICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKT0+dGhpcy5jbGljaygpfT7ngrnmiJHlkKc8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvQ2hpbGRyZW5EZW1vLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})