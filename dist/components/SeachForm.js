"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _DatePicker = require("@mui/x-date-pickers/DatePicker");
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _colors = require("../utils/colors");
var _material = require("@mui/material");
var _Button = _interopRequireDefault(require("./Button"));
var _media = require("../utils/media");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SearchForm = _ref => {
  let {
    title,
    backgroundColor,
    height,
    buttonVariant
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      color: 'black',
      width: '100%',
      background: backgroundColor,
      height: height,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto'
  }, /*#__PURE__*/_react.default.createElement(Title, null, title), /*#__PURE__*/_react.default.createElement(FormContainer, null, /*#__PURE__*/_react.default.createElement(InputField, {
    id: "filled-search",
    label: "Destination",
    type: "search",
    variant: "outlined",
    focusColor: _colors.colors.black[600],
    sx: {
      background: 'white',
      flex: 3
    }
  }), /*#__PURE__*/_react.default.createElement(_DatePicker.DatePicker, {
    label: "Start Date",
    sx: {
      background: 'white',
      flex: 2
    }
  }), /*#__PURE__*/_react.default.createElement(_DatePicker.DatePicker, {
    label: "End Date",
    sx: {
      background: 'white',
      flex: 2
    }
  }), /*#__PURE__*/_react.default.createElement(InputField, {
    id: "filled-search",
    label: "Travelers",
    type: "number",
    variant: "outlined",
    focusColor: _colors.colors.black[600],
    sx: {
      background: 'white',
      flex: 1
    }
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: 'Search',
    variant: buttonVariant,
    size: 'large',
    style: {
      flex: 1
    }
  }))));
};
const FormContainer = (0, _styled.default)(_material.Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  width: '100%'
});
const Title = _styled.default.h4({
  fontFamily: 'Roboto',
  fontSize: '1.3rem',
  color: _colors.colors.black[800],
  marginBottom: '.5rem'
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
var _default = SearchForm;
exports.default = _default;