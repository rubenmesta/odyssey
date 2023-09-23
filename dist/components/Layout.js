"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _Footer = _interopRequireDefault(require("./Footer"));
var _styles = require("@mui/material/styles");
var _colors = require("../utils/colors");
var data = _interopRequireWildcard(require("../../data"));
var _xDatePickers = require("@mui/x-date-pickers");
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const theme = (0, _styles.createTheme)();
const Layout = _ref => {
  let {
    children
  } = _ref;
  const {
    navItems,
    col1,
    col2,
    col3,
    social
  } = data;
  const [selectedIndex, setSelectedIndex] = (0, _react.useState)(0);
  const [value, setValue] = (0, _react.useState)(0);
  return /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(_xDatePickers.LocalizationProvider, {
    dateAdapter: _AdapterDayjs.AdapterDayjs
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    logo: '/logo192.png',
    background: _colors.colors.background,
    itemsColor: _colors.colors.primary[500],
    items: navItems.map(i => {
      return /*#__PURE__*/_react.default.createElement("a", null, i);
    }),
    mobileMenuColor: _colors.colors.white[500],
    withLogIn: true
  }), children, /*#__PURE__*/_react.default.createElement(_Footer.default, {
    title: 'Explore the Cosmos',
    col1: col1,
    col2: col2,
    col3: col3,
    social: social,
    avatar: '/img/footer-avatar.svg'
  })));
};
var _default = Layout;
exports.default = _default;