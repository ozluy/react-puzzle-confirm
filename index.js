"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ReactPuzzleConfirm(_ref) {
  var _ref$onSuccess = _ref.onSuccess,
      onSuccess = _ref$onSuccess === void 0 ? function () {
    return console.log('success');
  } : _ref$onSuccess,
      _ref$onFail = _ref.onFail,
      onFail = _ref$onFail === void 0 ? function () {
    return console.log('fail');
  } : _ref$onFail,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {
    return console.log('close clicked');
  } : _ref$onClose,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Please fit the puzzle piece carefully' : _ref$title,
      _ref$sliderTitle = _ref.sliderTitle,
      sliderTitle = _ref$sliderTitle === void 0 ? 'Slide to complete the puzzle' : _ref$sliderTitle,
      _ref$failMessage = _ref.failMessage,
      failMessage = _ref$failMessage === void 0 ? 'Error' : _ref$failMessage,
      _ref$successMessage = _ref.successMessage,
      successMessage = _ref$successMessage === void 0 ? 'Success' : _ref$successMessage,
      _ref$closeButtonLabel = _ref.closeButtonLabel,
      closeButtonLabel = _ref$closeButtonLabel === void 0 ? 'Close' : _ref$closeButtonLabel,
      _ref$refrefButtonLabe = _ref.refrefButtonLabel,
      refrefButtonLabel = _ref$refrefButtonLabe === void 0 ? 'Refresh' : _ref$refrefButtonLabe,
      _ref$disableRefreshId = _ref.disableRefreshIdleState,
      disableRefreshIdleState = _ref$disableRefreshId === void 0 ? true : _ref$disableRefreshId;
  var minValue = 6;
  var maxValue = 36;
  var multiplier = 5;

  var randomValueCreator = function randomValueCreator() {
    var min = Math.ceil(minValue);
    var max = Math.floor(maxValue);
    var randomIntegerInclusive = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomIntegerInclusive;
  };

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)('Idle'),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = (0, _react.useState)(randomValueCreator()),
      _useState6 = _slicedToArray(_useState5, 2),
      randomValue = _useState6[0],
      setRandomValue = _useState6[1];

  var handleAttempt = function handleAttempt() {
    if (value === randomValue) {
      setStatus('Success');
      setTimeout(function () {
        return onSuccess();
      }, 1000);
    } else {
      setStatus('Failed');
      onFail();
    }
  };

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
      left: "".concat(value * multiplier, "px"),
      backgroundPositionX: -randomValue * multiplier - 1 / 2
    }
  }), _react.default.createElement("div", {
    className: "react-puzzle-confirm-puzzle-missing-piece missing-piece-placeholder",
    style: {
      left: "".concat(randomValue * multiplier, "px")
    }
  }))), _react.default.createElement("input", {
    disabled: isFailed,
    type: "range",
    className: isFailed ? 'react-puzzle-confirm-slider-disabled' : '',
    onMouseUp: handleAttempt,
    onTouchEnd: handleAttempt,
    name: "points",
    value: value,
    onChange: function onChange(event) {
      event.persist();
      var selectedValue = event.target.value;
      !isNaN(selectedValue) && setValue(parseInt(selectedValue));
    },
    min: "0",
    max: maxValue
  }), _react.default.createElement("div", {
    className: "react-puzzle-confirm-slider-note"
  }, sliderTitle)), _react.default.createElement("div", {
    className: "react-puzzle-confirm-state ".concat(isFailed ? 'react-puzzle-confirm-state--fail' : '')
  }, "\xA0 ", status !== 'Idle' && statusMessage), _react.default.createElement("div", {
    className: "react-puzzle-confirm-button-group"
  }, _react.default.createElement("button", {
    className: "react-puzzle-confirm-button react-puzzle-confirm-button--secondary",
    onClick: function onClick() {
      return onClose;
    }
  }, closeButtonLabel), _react.default.createElement("button", {
    className: "react-puzzle-confirm-button",
    disabled: !isFailed && disableRefreshIdleState,
    onClick: function onClick() {
      setRandomValue(randomValueCreator());
      setValue(0);
      setStatus('Idle');
    }
  }, refrefButtonLabel))));
}

var _default = ReactPuzzleConfirm;
exports.default = _default;
