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
var _DatePicker = require("@mui/x-date-pickers/DatePicker");
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
    overlay,
    variant = 'takeover' || 'standard' || 'slim',
    contentAlignment = 'center' || 'left',
    search = true,
    searchButtonVariant,
    children
  } = _ref;
  const imageHeight = variant => {
    switch (variant) {
      case 'takeover':
        return 'calc(100vh - 80px)';
      case 'standard':
        return '80vh';
      case 'slim':
        return '60vh';
      default:
        return '80vh';
    }
  };
  const containerHeight = imageHeight(variant);
  const overlayColor = 'rgba(0, 0, 0, 0.4)';
  const theme = (0, _material.useTheme)();
  const Description = (0, _styled.default)(HeroDescription)({
    width: '400px',
    color: theme.palette.common.white,
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
        height: 'aito',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
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
      variant: "primary",
      size: "large",
      label: primaryCta
    }), secondaryCta && /*#__PURE__*/_react.default.createElement(_Button.default, {
      withArrow: true,
      variant: "outlinePrimary",
      size: "large",
      label: secondaryCta
    }));
  };
  const ContentWrapper = (0, _styled.default)(_material.Box)({
    width: '100%',
    margin: '0 auto',
    height: '100%',
    padding: '2rem 1rem',
    color: theme.palette.common.white,
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
      //   justifyContent:
      //     (contentAlignment === 'center' || contentAlignment === 'left') &&
      //     isMobile
      //       ? 'space-between'
      //       : (contentAlignment === 'center' || contentAlignment === 'left') &&
      //         !isMobile &&
      //         'center',

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
    color: theme.palette.common.white
  }, title), subtitle && /*#__PURE__*/_react.default.createElement(Subtitle, {
    color: theme.palette.common.white
  }, subtitle), description && /*#__PURE__*/_react.default.createElement(Description, null, "Description here")), /*#__PURE__*/_react.default.createElement(ButtonsContainer, {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }, (primaryCta || secondaryCta) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Box, null, renderCTAs(primaryCta, secondaryCta)))), children)), search && /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      color: 'black',
      width: '100%',
      background: _colors.colors.white[500],
      height: '180px',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(FormContainer, null, /*#__PURE__*/_react.default.createElement(InputField, {
    id: "filled-search",
    label: "Destination",
    type: "search",
    variant: "outlined",
    focusColor: _colors.colors.black[600],
    sx: {
      flex: 3
    }
  }), /*#__PURE__*/_react.default.createElement(_DatePicker.DatePicker, {
    label: "Start Date",
    sx: {
      flex: 2
    }
  }), /*#__PURE__*/_react.default.createElement(_DatePicker.DatePicker, {
    label: "End Date",
    sx: {
      flex: 2
    }
  }), /*#__PURE__*/_react.default.createElement(InputField, {
    id: "filled-search",
    label: "Travelers",
    type: "number",
    variant: "outlined",
    focusColor: _colors.colors.black[600],
    sx: {
      flex: 1
    }
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: 'Search',
    variant: searchButtonVariant,
    size: 'large',
    style: {
      flex: 1
    }
  }))));
};
const Title = (0, _styled.default)(_material.Typography)({
  '&.MuiTypography-root': {
    color: '#fff',
    letterSpacing: '2px',
    fontFamily: 'Prata',
    fontSize: '5rem',
    lineHeight: 1,
    marginBottom: '1rem'
  }
});
const Subtitle = (0, _styled.default)(_material.Typography)({
  '&.MuiTypography-root': {
    color: '#fff',
    letterSpacing: '2px',
    fontSize: '3rem',
    lineHeight: 1,
    fontWeight: 200,
    marginBottom: '1rem',
    fontFamily: 'Montserrat'
  }
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
const FormContainer = (0, _styled.default)(_material.Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto'
});
const InputField = (0, _styled.default)(_TextField.default, {
  shouldForwardProp: props => props !== 'focusColor'
})(p => ({
  // input label when focused
  '& label.Mui-focused': {
    color: p.focusColor
  },
  // focused color for input with variant='standard'
  '& .MuiInput-underline:after': {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='filled'
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='outlined'
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: p.focusColor
    }
  }
}));
var _default = Hero;
exports.default = _default;