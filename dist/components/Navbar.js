"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _material = require("@mui/material");
var _colors = require("../utils/colors");
var _Button = _interopRequireDefault(require("./Button"));
var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _Drawer = _interopRequireDefault(require("@mui/material/Drawer"));
var _List = _interopRequireDefault(require("@mui/material/List"));
var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));
var _ListItemButton = _interopRequireDefault(require("@mui/material/ListItemButton"));
var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Menu = _interopRequireDefault(require("@mui/icons-material/Menu"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _media = require("../utils/media");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Navbar = _ref => {
  let {
    logo,
    items,
    background,
    itemsColor,
    variant,
    buttonLabel,
    withLogIn = false,
    mobileMenuColor
  } = _ref;
  const drawerWidth = 340;
  const [mobileOpen, setMobileOpen] = _react.default.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };
  const isMobile = _media.MEDIA_QUERIES.base;
  const drawer = /*#__PURE__*/_react.default.createElement(_material.Box, {
    onClick: handleDrawerToggle,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    sx: {
      my: 2
    }
  }, "MUI"), /*#__PURE__*/_react.default.createElement(_Divider.default, null), /*#__PURE__*/_react.default.createElement(_List.default, null, items.map(item => /*#__PURE__*/_react.default.createElement(_ListItem.default, {
    key: item,
    disablePadding: true
  }, /*#__PURE__*/_react.default.createElement(_ListItemButton.default, {
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: item
  }))))));
  const container = window !== undefined ? () => window.document.body : undefined;
  return /*#__PURE__*/_react.default.createElement(Navigation, {
    background: background || _colors.colors.primary[900]
  }, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), /*#__PURE__*/_react.default.createElement(NavContainer, null, /*#__PURE__*/_react.default.createElement(LogoContainer, null, logo), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: '7rem'
    }
  }, /*#__PURE__*/_react.default.createElement(NavbarItems, {
    itemsColor: itemsColor
  }, items.map(item => {
    return /*#__PURE__*/_react.default.createElement(Item, null, item);
  })), withLogIn === true && /*#__PURE__*/_react.default.createElement(ButtonsContainer, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: buttonLabel,
    variant: variant || 'secondary',
    size: 'medium'
  }))), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    color: "inherit",
    "aria-label": "open drawer",
    edge: "start",
    onClick: handleDrawerToggle,
    sx: {
      [_media.MEDIA_QUERIES.desktop]: {
        display: 'none'
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_Menu.default, {
    sx: {
      fill: mobileMenuColor
    }
  }))), /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement(_Drawer.default, {
    container: container,
    variant: "temporary",
    open: mobileOpen,
    onClose: handleDrawerToggle,
    ModalProps: {
      keepMounted: true // Better open performance on mobile.
    },

    sx: {
      display: {
        xs: 'block',
        sm: 'none'
      },
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: drawerWidth
      }
    }
  }, drawer)));
};
const Navigation = _styled.default.nav({
  width: '100%',
  padding: '0 1rem'
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
const LogoContainer = _styled.default.div({
  img: {
    width: '70px'
  }
});
const NavbarItems = _styled.default.div({
  display: 'flex',
  fontFamily: 'IBM Plex Mono',
  display: 'none',
  [_media.MEDIA_QUERIES.desktop]: {
    display: 'flex'
  }
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
  display: 'none',
  gap: '1rem',
  [_media.MEDIA_QUERIES.desktop]: {
    display: 'flex'
  }
});
var _default = Navbar;
exports.default = _default;