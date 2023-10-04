"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _colors = require("../utils/colors");
var _Button = _interopRequireDefault(require("./Button"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Card = _ref => {
  let {
    image,
    title,
    body,
    variant,
    buttonText,
    width
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledCard, {
    width: width
  }, image && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(StyledImage, {
    src: image
  })), /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    },
    id: "card-content"
  }, /*#__PURE__*/_react.default.createElement(Title, null, title), /*#__PURE__*/_react.default.createElement(Body, null, body, " ")), /*#__PURE__*/_react.default.createElement(_material.Box, null, variant && /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: buttonText,
    variant: variant,
    fullwidth: true
  }))));
};
const StyledCard = _styled.default.div({
  display: 'flex',
  flexDirection: 'column',
  border: "1px solid ".concat(_colors.colors.neutrals[300]),
  borderRadius: '8px',
  color: _colors.colors.black[800],
  background: _colors.colors.white[500]
}, _ref2 => {
  let {
    width
  } = _ref2;
  return {
    width: width ? width : '350px'
  };
});
const StyledImage = _styled.default.img({
  width: '100%',
  height: '200px',
  borderRadius: '8px 8px 0 0'
});
const Container = _styled.default.div({
  padding: '1rem 1rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flexGrow: 1
});
const Title = _styled.default.h4({
  fontSize: '1.75rem',
  color: _colors.colors.black[800],
  margin: 0,
  fontFamily: 'IBM Plex Serif'
});
const Body = _styled.default.p({
  fontFamily: 'IBM Plex Mono',
  fontSize: '1rem',
  color: _colors.colors.black[800],
  lineHeight: 1.5
});
var _default = Card;
exports.default = _default;