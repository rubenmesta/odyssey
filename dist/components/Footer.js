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
const Footer = _ref => {
  let {
    title,
    col1,
    col2,
    col3,
    social,
    avatar
  } = _ref;
  const arrayChunk = (arr, n) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };
  return /*#__PURE__*/_react.default.createElement(StyledFooter, null, /*#__PURE__*/_react.default.createElement(FooterContainer, null, /*#__PURE__*/_react.default.createElement(FooterHero, null, /*#__PURE__*/_react.default.createElement(FooterContact, null, /*#__PURE__*/_react.default.createElement(FooterContactTitle, null, title), /*#__PURE__*/_react.default.createElement(ButtonsContainer, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: 'Sign Up for Free',
    variant: 'outlinePrimary'
  }))), /*#__PURE__*/_react.default.createElement(FooterAvatar, null, /*#__PURE__*/_react.default.createElement("img", {
    src: avatar
  }))), /*#__PURE__*/_react.default.createElement(FooterContent, null, /*#__PURE__*/_react.default.createElement(FooterLogo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: "/img/IPTS-logo-white.svg"
  }), /*#__PURE__*/_react.default.createElement(FooterQuote, null, "Travel beyond")), /*#__PURE__*/_react.default.createElement(FooterGrid, null, /*#__PURE__*/_react.default.createElement(_material.Box, null, col1 === null || col1 === void 0 ? void 0 : col1.map(item => {
    return /*#__PURE__*/_react.default.createElement(Item, null, item);
  })), /*#__PURE__*/_react.default.createElement(_material.Box, null, col2 === null || col2 === void 0 ? void 0 : col2.map(item => {
    return /*#__PURE__*/_react.default.createElement(Item, null, item);
  })), /*#__PURE__*/_react.default.createElement(_material.Box, null, col3 === null || col3 === void 0 ? void 0 : col3.map(item => {
    return /*#__PURE__*/_react.default.createElement(Item, null, item);
  }), /*#__PURE__*/_react.default.createElement(SocialIcons, null, social === null || social === void 0 ? void 0 : social.map(image => {
    return /*#__PURE__*/_react.default.createElement("img", {
      src: image
    });
  })))))));
};
const StyledFooter = _styled.default.footer({
  background: _colors.colors.black[800],
  color: _colors.colors.white.base,
  width: '100%',
  padding: '65px 0'
});
const FooterContainer = _styled.default.div({
  width: '100%',
  maxWidth: '1230px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '15px',
  paddingRight: '15px',
  display: 'block'
});
const FooterHero = _styled.default.div({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex'
});
const FooterContact = _styled.default.div({
  width: '100%',
  maxWidth: '605px',
  color: _colors.colors.white[500]
});
const ButtonsContainer = _styled.default.div({
  flexWrap: 'wrap',
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '2rem'
});
const FooterContactTitle = _styled.default.h3({
  fontSize: '36px'
});
const FooterAvatar = _styled.default.div({
  marginBottom: '25px',
  marginRight: '37px',
  paddingBottom: '7px',
  paddingRight: ' 10px',
  img: {
    width: '200px',
    marginTop: '3rem'
  }
});
const FooterContent = _styled.default.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginTop: '50px',
  display: 'flex'
});
const FooterLogo = _styled.default.div({
  img: {
    width: '75px'
  }
});
const FooterQuote = _styled.default.div({
  color: _colors.colors.grey[400],
  maxWidth: '100%',
  marginTop: '20px',
  fontFamily: 'Inter,sans-serif',
  fontSize: '16px',
  lineHeight: '1.7em'
});
const FooterGrid = _styled.default.div({
  width: '100%',
  maxWidth: ' 610px',
  gridTemplateRows: 'auto auto',
  gridTemplateColumns: '1fr 1fr',
  gridAutoColumns: '1fr',
  justifyContent: 'space-between',
  display: 'flex'
});
const Item = _styled.default.div({
  lineHeight: 1.5,
  color: _colors.colors.grey[400],
  marginBottom: '10px',
  fontFamily: 'Roboto Mono',
  fontSize: '16px',
  textDecoration: 'none',
  display: 'block'
});
const SocialIcons = _styled.default.div({
  display: 'flex',
  gap: '1rem'
});
var _default = Footer;
exports.default = _default;