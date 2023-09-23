"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _colors = require("../utils/colors");
var _styled = _interopRequireDefault(require("@emotion/styled"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const Button = _ref => {
  let {
    variant,
    label,
    fullwidth,
    onClick,
    withArrow,
    style
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledButton, {
    variant: variant,
    label: label,
    onClick: onClick,
    fullwidth: fullwidth,
    style: style
  }, label, withArrow && /*#__PURE__*/_react.default.createElement("span", {
    style: {
      marginLeft: '.5rem',
      marginTop: '4px'
    }
  }, /*#__PURE__*/_react.default.createElement(Arrow, null), ' '));
};
const variantStyles = {
  primary: {
    backgroundColor: _colors.colors.primary[500],
    color: _colors.colors.black[500],
    border: "1px solid ".concat(_colors.colors.primary[500]),
    '&:hover': {
      backgroundColor: _colors.colors.primary[400],
      border: "1px solid ".concat(_colors.colors.primary[400])
    }
  },
  secondary: {
    backgroundColor: _colors.colors.secondary[500],
    color: _colors.colors.white[500],
    border: "1px solid ".concat(_colors.colors.secondary[500]),
    '&:hover': {
      backgroundColor: _colors.colors.secondary[400],
      border: "1px solid ".concat(_colors.colors.secondary[400])
    }
  },
  black: {
    backgroundColor: _colors.colors.black[500],
    color: _colors.colors.grey[200],
    border: "1px solid ".concat(_colors.colors.black[500]),
    '&:hover': {
      backgroundColor: _colors.colors.grey[800],
      border: "1px solid ".concat(_colors.colors.grey[800])
    }
  },
  light: {
    backgroundColor: _colors.colors.orange[500],
    color: _colors.colors.black[500],
    border: "1px solid ".concat(_colors.colors.orange[500]),
    '&:hover': {
      backgroundColor: _colors.colors.orange[400],
      border: "1px solid ".concat(_colors.colors.orange[400])
    }
  },
  outlinePrimary: {
    backgroundColor: 'transparent',
    color: _colors.colors.primary[500],
    border: "1px solid ".concat(_colors.colors.primary[500]),
    '&:hover': {
      color: _colors.colors.grey[200],
      borderColor: _colors.colors.grey[200]
    }
  },
  outlineWhite: {
    backgroundColor: 'transparent',
    color: _colors.colors.white[500],
    border: "1px solid ".concat(_colors.colors.white[500]),
    '&:hover': {
      color: _colors.colors.grey[200],
      borderColor: _colors.colors.grey[200]
    }
  }
};
const StyledButton = _styled.default.button({
  border: 0,
  padding: '1rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  textDecoration: 'none',
  fontFamily: 'Roboto Mono',
  fontWeight: 600,
  fontSize: '1rem',
  '&:hover': {
    textDecoration: 'none'
  },
  ':focus:not(:focus-visible)': {
    outline: 0
  }
}, _ref2 => {
  let {
    variant = 'primary',
    fullwidth
  } = _ref2;
  return _objectSpread({
    width: fullwidth ? '100%' : 'inherit'
  }, variantStyles[variant]);
});
const Arrow = () => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    fill: "currentColor",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.95246 1.06044L6.64613 0.366772C6.93985 0.0730551 7.4148 0.0730551 7.70539 0.366772L13.7797 6.43797C14.0734 6.73169 14.0734 7.20663 13.7797 7.49723L7.70539 13.5715C7.41167 13.8653 6.93673 13.8653 6.64613 13.5715L5.95246 12.8779C5.65562 12.581 5.66187 12.0967 5.96496 11.8061L9.73016 8.21902H0.749916C0.334338 8.21902 0 7.88468 0 7.4691V6.46922C0 6.05364 0.334338 5.7193 0.749916 5.7193H9.73016L5.96496 2.1322C5.65874 1.84161 5.65249 1.35729 5.95246 1.06044Z"
  }));
};
var _default = Button;
exports.default = _default;