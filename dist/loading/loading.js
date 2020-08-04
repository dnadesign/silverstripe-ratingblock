"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

require("./loading.scss");

var Loading = function Loading(props) {
  var showImmediately = props.showImmediately,
      classes = props.classes,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["showImmediately", "classes"]),
      _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      show = _React$useState2[0],
      setShow = _React$useState2[1]; // Only show the spinner after 1s of inactivity
  // https://material-ui.com/components/progress/#delaying-appearance


  _react.default.useEffect(function (props) {
    if (props.showImmediately) {
      setShow(true);
      return;
    }

    var timer = setTimeout(function () {
      setShow(true);
    }, 750);
    return function () {
      return clearTimeout(timer);
    };
  }, []);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loading ".concat(classes || '')
  }, show && /*#__PURE__*/_react.default.createElement(_CircularProgress.default, Object.assign({
    disableShrink: true,
    size: 40
  }, otherProps)), /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Please wait"));
};

var _default = Loading;
exports.default = _default;