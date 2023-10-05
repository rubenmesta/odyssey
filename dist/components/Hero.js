"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _colors = require("../utils/colors");
var _material = require("@mui/material");
var _Button = _interopRequireDefault(require("./Button"));
var _media = require("../utils/media");
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _SeachForm = _interopRequireDefault(require("./SeachForm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Hero = _ref => {
  let {
    image,
    logo,
    backgroundColor,
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta,
    primaryCtaVariant,
    secondaryCtaVariant,
    overlay,
    variant = 'takeover' || 'standard' || 'slim',
    contentAlignment = 'center' || 'left',
    backgroundPosition,
    search = true,
    children
  } = _ref;
  const imageHeight = variant => {
    switch (variant) {
      case 'takeover':
        return 'calc(100vh - 80px)';
      case 'large':
        return '80vh';
      case 'medium':
        return '60vh';
      case 'small':
        return '40vh';
      default:
        return '80vh';
    }
  };
  const containerHeight = imageHeight(variant);
  const overlayColor = 'rgba(0, 0, 0, 0.4)';
  const theme = (0, _material.useTheme)();
  const Description = (0, _styled.default)(HeroDescription)({
    width: '400px',
    color: _colors.colors.white[500],
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.3rem'
    }
  });
  const Container = _ref2 => {
    let {
      children
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_material.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        background: overlay ? "linear-gradient(".concat(overlayColor, ", ").concat(overlayColor, "), url(").concat(image, ")") : "url(".concat(image, ")"),
        backgroundColor: backgroundColor && backgroundColor,
        height: 'auto',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: backgroundPosition ? backgroundPosition : 'center',
        padding: 0,
        [_media.MEDIA_QUERIES.tablet]: {
          height: containerHeight
        }
      }
    }, children);
  };
  const renderCTAs = (primaryCta, secondaryCta) => {
    return /*#__PURE__*/_react.default.createElement(_material.Box, {
      gap: 2,
      display: 'flex'
    }, primaryCta && /*#__PURE__*/_react.default.createElement(_Button.default, {
      withArrow: true,
      variant: primaryCtaVariant || 'purple',
      size: "large",
      label: primaryCta
    }), secondaryCta && /*#__PURE__*/_react.default.createElement(_Button.default, {
      withArrow: true,
      variant: secondaryCtaVariant || 'outlineWhite',
      size: "large",
      label: secondaryCta
    }));
  };
  const ContentWrapper = (0, _styled.default)(_material.Box)({
    width: '100%',
    margin: '0 auto',
    height: '100%',
    padding: '2rem 1rem',
    color: _colors.colors.white[500],
    gap: '2rem'
  }, _ref3 => {
    let {
      contentAlignment
    } = _ref3;
    return {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: contentAlignment === 'center' ? '100%' : '1200px',
      alignItems: contentAlignment === 'center' ? 'center' : 'flex-start',
      textAlign: contentAlignment === 'center' ? 'center' : 'left',
      justifyContent: 'center',
      [_media.MEDIA_QUERIES.tablet]: {
        maxWidth: contentAlignment === 'center' ? '100%' : '1200px'
      }
    };
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Container, {
    id: "container"
  }, /*#__PURE__*/_react.default.createElement(ContentWrapper, {
    contentAlignment: contentAlignment,
    id: "wrapper"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, null, logo && /*#__PURE__*/_react.default.createElement(Logo, {
    src: logo
  }), title && /*#__PURE__*/_react.default.createElement(Title, {
    variant: "h1",
    color: _colors.colors.white[500]
  }, title), subtitle && /*#__PURE__*/_react.default.createElement(Subtitle, {
    color: _colors.colors.white[500]
  }, subtitle), description && /*#__PURE__*/_react.default.createElement(Description, null, "Description here")), /*#__PURE__*/_react.default.createElement(ButtonsContainer, {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }, (primaryCta || secondaryCta) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Box, null, renderCTAs(primaryCta, secondaryCta)))), children)), search && /*#__PURE__*/_react.default.createElement(_SeachForm.default, {
    backgroundColor: _colors.colors.purple[100],
    height: 180,
    buttonVariant: 'black'
  }));
};
const Title = (0, _styled.default)(_material.Typography)({
  '&.MuiTypography-root': {
    color: '#fff',
    letterSpacing: '2px',
    fontFamily: 'IBM Plex serif',
    fontWeight: 700,
    fontSize: '4rem',
    lineHeight: 1,
    marginBottom: '1rem'
  }
});
const Subtitle = (0, _styled.default)(_material.Typography)({
  color: '#fff',
  letterSpacing: '2px',
  fontSize: '1.25rem',
  lineHeight: 1,
  fontWeight: 200,
  marginBottom: '1rem',
  fontFamily: 'IBM Plex Mono'
});
const InnerContainer = (0, _styled.default)(_material.Box)({
  height: 'auto'
});
const HeroDescription = (0, _styled.default)(_material.Box)({
  fontSize: '1rem',
  fontFamily: 'Nunito',
  fontWeight: 300,
  lineHeight: 1.5,
  '& .ptid': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: '0 3px'
  }
});
const ButtonsContainer = (0, _styled.default)(_material.Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2rem 0 0 0'
});
const Wrapper = _styled.default.div({
  width: '100%',
  height: 'auto'
});
const Logo = _styled.default.img({
  padding: '1rem',
  width: '400px'
});
var _default = Hero;
exports.default = _default;