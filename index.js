"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ReactPuzzleConfirm =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactPuzzleConfirm, _Component);

  function ReactPuzzleConfirm(props) {
    var _this;

    _classCallCheck(this, ReactPuzzleConfirm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactPuzzleConfirm).call(this, props));
    _this.minValue = 6;
    _this.maxValue = 36;
    _this.multiplier = 5;

    _this.randomValueCreator = function () {
      var min = Math.ceil(_this.minValue);
      var max = Math.floor(_this.maxValue);
      var randomIntegerInclusive = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomIntegerInclusive;
    };

    _this.state = {
      value: 0,
      state: 'Idle',
      randomValue: _this.randomValueCreator()
    };
    _this.handleAttempt = _this.handleAttempt.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ReactPuzzleConfirm, [{
    key: "handleAttempt",
    value: function handleAttempt() {
      var _this$props = this.props,
          onSuccess = _this$props.onSuccess,
          onFail = _this$props.onFail;
      var _this$state = this.state,
          value = _this$state.value,
          randomValue = _this$state.randomValue;

      if (value === randomValue) {
        this.setState({
          status: 'Success'
        });
        setTimeout(function () {
          return onSuccess();
        }, 1000);
      } else {
        this.setState({
          status: 'Failed'
        });
        onFail();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          onClose = _this$props2.onClose,
          title = _this$props2.title,
          sliderTitle = _this$props2.sliderTitle,
          failMessage = _this$props2.failMessage,
          successMessage = _this$props2.successMessage,
          closeButtonLabel = _this$props2.closeButtonLabel,
          refrefButtonLabel = _this$props2.refrefButtonLabel,
          disableRefreshIdleState = _this$props2.disableRefreshIdleState;
      var _this$state2 = this.state,
          status = _this$state2.status,
          value = _this$state2.value,
          randomValue = _this$state2.randomValue;
      var isFailed = status === 'Failed';
      var statusMessage = isFailed ? failMessage : successMessage;
      return _react.default.createElement("div", {
        className: "react-puzzle-confirm-modal"
      }, _react.default.createElement("div", {
        className: "react-puzzle-confirm"
      }, _react.default.createElement("h1", {
        className: "react-puzzle-confirm-title"
      }, title), _react.default.createElement("div", {
        className: "react-puzzle-confirm-body"
      }, _react.default.createElement("div", {
        className: "react-puzzle-confirm-puzzle-wrapper"
      }, _react.default.createElement("div", {
        className: "react-puzzle-confirm-puzzle"
      }, _react.default.createElement("div", {
        className: "react-puzzle-confirm-flash ".concat(status === 'Success' ? 'flash--me' : '')
      }), _react.default.createElement("div", {
        className: "react-puzzle-confirm-puzzle-missing-piece",
        style: {
          left: "".concat(value * this.multiplier, "px"),
          backgroundPositionX: -randomValue * this.multiplier - 1 / 2
        }
      }), _react.default.createElement("div", {
        className: "react-puzzle-confirm-puzzle-missing-piece missing-piece-placeholder",
        style: {
          left: "".concat(randomValue * this.multiplier, "px")
        }
      }))), _react.default.createElement("input", {
        disabled: isFailed,
        type: "range",
        className: isFailed ? 'react-puzzle-confirm-slider-disabled' : '',
        onMouseUp: this.handleAttempt,
        onTouchEnd: this.handleAttempt,
        name: "points",
        value: value,
        onChange: function onChange(event) {
          event.persist();
          var selectedValue = event.target.value;
          !isNaN(selectedValue) && _this2.setState({
            value: parseInt(selectedValue)
          });
        },
        min: "0",
        max: this.maxValue
      }), _react.default.createElement("div", {
        className: "react-puzzle-confirm-slider-note"
      }, sliderTitle)), _react.default.createElement("div", {
        className: "react-puzzle-confirm-state ".concat(isFailed ? 'react-puzzle-confirm-state--fail' : '')
      }, "\xA0 ", status !== 'Idle' && statusMessage), _react.default.createElement("div", {
        className: "react-puzzle-confirm-button-group"
      }, _react.default.createElement("button", {
        className: "react-puzzle-confirm-button react-puzzle-confirm-button--secondary",
        onClick: onClose
      }, closeButtonLabel), _react.default.createElement("button", {
        className: "react-puzzle-confirm-button",
        disabled: !isFailed && disableRefreshIdleState,
        onClick: function onClick() {
          _this2.setState({
            value: 0,
            status: 'Idle',
            randomValue: _this2.randomValueCreator()
          });
        }
      }, refrefButtonLabel))));
    }
  }]);

  return ReactPuzzleConfirm;
}(_react.Component);

ReactPuzzleConfirm.defaultProps = {
  onSuccess: function onSuccess() {
    return console.log('success');
  },
  onFail: function onFail() {
    return console.log('fail');
  },
  onClose: function onClose() {
    return console.log('close clicked');
  },
  title: 'Please fit the puzzle piece carefully',
  sliderTitle: 'Slide to complete the puzzle',
  failMessage: 'Error',
  successMessage: 'Success',
  closeButtonLabel: 'Close',
  refrefButtonLabel: 'Refresh',
  disableRefreshIdleState: true
};
var _default = ReactPuzzleConfirm;
exports.default = _default;
