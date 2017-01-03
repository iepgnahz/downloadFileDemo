webpackHotUpdate(1,{

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(37);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(34);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(35);

	var _index6 = _interopRequireDefault(_index5);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ClickBtn = __webpack_require__(168);

	var _ClickBtn2 = _interopRequireDefault(_ClickBtn);

	var _Popup = __webpack_require__(425);

	var _Popup2 = _interopRequireDefault(_Popup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _components = {
	  DragDemo: {
	    displayName: 'DragDemo'
	  }
	};

	var _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/Zhangpei/twClass/reduxDemo/components/DragDemo.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/Zhangpei/twClass/reduxDemo/components/DragDemo.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2(_UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var DragDemo = _wrapComponent('DragDemo')(function (_Component) {
	  _inherits(DragDemo, _Component);

	  function DragDemo(props) {
	    _classCallCheck(this, DragDemo);

	    var _this = _possibleConstructorReturn(this, (DragDemo.__proto__ || Object.getPrototypeOf(DragDemo)).call(this, props));

	    _this.state = {
	      status: 'off'
	    };
	    return _this;
	  }

	  _createClass(DragDemo, [{
	    key: 'change',
	    value: function change(e) {
	      if (this.button !== e.target) {
	        this.toggle();
	      }
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick() {
	      this.toggle();
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      var _this2 = this;

	      this.setState({
	        status: this.state.status === 'on' ? 'off' : 'on'
	      }, function () {
	        if (_this2.state.status === 'on') {
	          _this2.button.on();
	          _this2.popUp.show();
	        } else {
	          _this2.button.off();
	          _this2.popUp.hide();
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react3.default.createElement(
	        'div',
	        { className: 'component' },
	        _react3.default.createElement(
	          'div',
	          { onClick: this.onClick.bind(this) },
	          _react3.default.createElement(_Popup2.default, { ref: function ref(_ref) {
	              _this3.button = _ref;
	            }, status: this.state.status })
	        ),
	        _react3.default.createElement(_ClickBtn2.default, { ref: function ref(_ref2) {
	            _this3.popUp = _ref2;
	          }, change: this.change.bind(this) })
	      );
	    }
	  }]);

	  return DragDemo;
	}(_react2.Component));

	exports.default = DragDemo;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(37);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(34);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(35);

	var _index6 = _interopRequireDefault(_index5);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(101);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _components = {
	  Popup: {
	    displayName: 'Popup'
	  }
	};

	var _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/Zhangpei/twClass/reduxDemo/components/Popup.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/Zhangpei/twClass/reduxDemo/components/Popup.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformHmrLibIndexJs2(_UsersZhangpeiTwClassReduxDemoNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var dom = window.documnet;

	var Popup = _wrapComponent('Popup')(function (_Component) {
	  _inherits(Popup, _Component);

	  function Popup(props) {
	    _classCallCheck(this, Popup);

	    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

	    var self = _this;
	    dom.addEventListener('mousemove', function (e) {
	      self.onMouseMove(e);
	    });
	    dom.addEventListener('mouseup', function (e) {
	      self.onMouseUp(e);
	    });

	    _this.state = {
	      status: 'block',
	      left: 0,
	      right: 0,
	      startLeft: 0,
	      startTop: 0,
	      disX: 0,
	      disY: 0,
	      ready: false
	    };
	    return _this;
	  }

	  _createClass(Popup, [{
	    key: 'onMouseDown',
	    value: function onMouseDown(e) {
	      var x = e.clientX,
	          y = e.clientY;
	      this.setState({ ready: true, x: x, y: y, startLeft: this.state.left, startTop: this.state.top });
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(e) {
	      if (!this.state.ready) {
	        return;
	      }

	      var x = e.clientX,
	          y = e.clientY;
	      this.setState({
	        left: this.state.startLeft + x - this.state.x,
	        top: state.startTop + y - state.y
	      });
	    }
	  }, {
	    key: 'onMouseUp',
	    value: function onMouseUp(e) {
	      if (this.refs.popUp !== e.target && this.state.status === 'block') {
	        this.props.change(e);
	      }
	      this.setState({ ready: false });
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.setState({ status: 'block' });
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.setState({ status: 'none' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = {
	        left: this.state.left,
	        top: this.state.top,
	        display: this.state.status
	      };
	      return _react3.default.createElement(
	        'div',
	        { ref: 'popup', onMouseDown: this.onMouseDown.bind(this), className: 'popup', style: style },
	        'Drag Me'
	      );
	    }
	  }]);

	  return Popup;
	}(_react2.Component));

	exports.default = Popup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})