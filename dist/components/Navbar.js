"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _material = require("@mui/material");
var _colors = require("../utils/colors");
var _Button = _interopRequireDefault(require("./Button"));
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Navbar = _ref => {
  let {
    logo,
    items,
    background,
    itemsColor,
    withLogIn = false,
    isLoggedIn = false
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Navigation, {
    background: background
  }, /*#__PURE__*/_react.default.createElement(NavContainer, null, /*#__PURE__*/_react.default.createElement(Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    alt: "logo"
  })), /*#__PURE__*/_react.default.createElement(NavbarItems, {
    itemsColor: itemsColor
  }, items.map(item => {
    return /*#__PURE__*/_react.default.createElement(Item, null, item);
  })), withLogIn === true && !isLoggedIn ? /*#__PURE__*/_react.default.createElement(ButtonsContainer, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: 'Log In',
    variant: 'outlineWhite',
    si: true
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: 'Sign Up',
    variant: 'outlineWhite',
    si: true
  })) : /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    sx: {
      bgcolor: _colors.colors.orange[500]
    }
  }, "N")));
};
const Navigation = _styled.default.nav({
  width: '100%'
}, _ref2 => {
  let {
    background
  } = _ref2;
  return {
    background: background
  };
});
const NavContainer = _styled.default.div({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  fontSize: '1.2rem'
});
const Logo = _styled.default.div({
  img: {
    width: '70px'
  }
});
const NavbarItems = _styled.default.div({
  display: 'flex',
  fontFamily: 'Roboto Mono'
}, _ref3 => {
  let {
    itemsColor
  } = _ref3;
  return {
    color: itemsColor
  };
});
const Item = _styled.default.div({
  margin: '0 1rem',
  '&:first-of-type': {
    marginLeft: 0
  },
  '&:last-of-type': {
    marginRight: 0
  }
});
const ButtonsContainer = (0, _styled.default)(_material.Box)({
  display: 'flex',
  gap: '1rem'
});
var _default = Navbar;
exports.default = _default;