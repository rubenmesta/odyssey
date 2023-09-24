"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _colors = require("../utils/colors");
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Section = _ref => {
  let {
    image,
    title,
    body,
    variant,
    buttonText,
    flip = false,
    flexBasis,
    padding,
    alignItems
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Container, {
    flip: flip
  }, image && /*#__PURE__*/_react.default.createElement(ImageSection, null, ' ', /*#__PURE__*/_react.default.createElement(StyledImage, {
    src: image
  })), /*#__PURE__*/_react.default.createElement(ContentSection, {
    flexBasis: flexBasis,
    padding: padding,
    alignItems: alignItems
  }, /*#__PURE__*/_react.default.createElement(Title, null, title), /*#__PURE__*/_react.default.createElement(Body, null, body, " "), variant && /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: buttonText,
    variant: variant
  })));
};
const Container = (0, _styled.default)('div', {
  shouldForwardProp: prop => prop !== 'flip'
})(_ref2 => {
  let {
    flip
  } = _ref2;
  return {
    display: 'flex',
    flexDirection: flip ? 'row-reverse' : 'row',
    color: _colors.colors.black.base,
    width: '100%',
    height: 'auto',
    background: _colors.colors.white.base
  };
});
const ImageSection = _styled.default.div({
  flexBasis: '50%',
  minWidth: '50%',
  height: 'auto,'
}, _ref3 => {
  let {
    flexBasis
  } = _ref3;
  return {
    flexBasis: flexBasis ? flexBasis : '50%'
  };
});
const ContentSection = _styled.default.div({
  flexBasis: '50%',
  display: 'flex',
  flexDirection: 'column'
}, _ref4 => {
  let {
    padding,
    alignItems,
    justifyContent,
    flexBasis
  } = _ref4;
  return {
    flexBasis: flexBasis ? flexBasis : '50%',
    padding: padding ? padding : '5rem 8rem',
    alignItems: alignItems ? alignItems : 'center',
    justifyContent: justifyContent ? justifyContent : 'center'
  };
});
const StyledImage = _styled.default.img({
  width: '100%',
  height: 'auto'
});
const Title = _styled.default.h2({
  fontFamily: 'Anton',
  color: _colors.colors.black.base,
  fontSize: '4rem',
  margin: 0
});
const Body = _styled.default.p({
  fontFamily: 'Roboto',
  fontSize: '1rem',
  color: _colors.colors.black.dark,
  lineHeight: 1.5,
  margin: '3rem 0'
});
var _default = Section;
exports.default = _default;