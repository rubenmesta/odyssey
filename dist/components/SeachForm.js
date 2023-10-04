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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SearchForm = _ref => {
  let {
    title,
    labelColor,
    backgroundColor,
    height,
    buttonVariant,
    focusColor,
    destinationLabel,
    startDateLabel,
    endDateLabel,
    travelersLabel
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
  }, /*#__PURE__*/_react.default.createElement(Title, {
    color: labelColor
  }, title), /*#__PURE__*/_react.default.createElement(FormContainer, null, /*#__PURE__*/_react.default.createElement(InputField, {
    id: "filled-search",
    label: destinationLabel,
    type: "search",
    variant: "outlined",
    focusColor: focusColor,
    sx: {
      background: 'white',
      flex: 3
    }
  }), /*#__PURE__*/_react.default.createElement(Date, {
    label: startDateLabel,
    sx: {
      background: 'white',
      flex: 2
    },
    focusColor: focusColor
  }), /*#__PURE__*/_react.default.createElement(Date, {
    label: endDateLabel,
    sx: {
      background: 'white',
      flex: 2
    },
    focusColor: focusColor
  }), /*#__PURE__*/_react.default.createElement(InputField, {
    id: "filled-search",
    label: travelersLabel,
    type: "number",
    variant: "outlined",
    focusColor: focusColor,
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
  margin: '0 0 .5rem 0'
}, _ref2 => {
  let {
    color
  } = _ref2;
  return {
    color: color
  };
});
const InputField = (0, _styled.default)(_TextField.default)({}, _ref3 => {
  let {
    focusColor
  } = _ref3;
  return {
    // input label when focused
    '& label.Mui-focused': {
      color: focusColor
    },
    // focused color for input with variant='standard'
    '& .MuiInput-underline:after': {
      borderBottomColor: focusColor
    },
    // focused color for input with variant='filled'
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: focusColor
    },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: focusColor
      }
    }
  };
});
const Date = (0, _styled.default)(_DatePicker.DatePicker)({}, _ref4 => {
  let {
    focusColor
  } = _ref4;
  return {
    // input label when focused
    '& label.Mui-focused': {
      color: focusColor
    },
    // focused color for input with variant='standard'
    '& .MuiInput-underline:after': {
      borderBottomColor: focusColor
    },
    // focused color for input with variant='filled'
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: focusColor
    },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: focusColor
      }
    }
  };
});
// const InputField = styled(TextField, {
//   shouldForwardProp: (props) => props !== 'focusColor',
// })((p) => ({
//   // input label when focused
//   '& label.Mui-focused': {
//     color: p.focusColor,
//   },
//   // focused color for input with variant='standard'
//   '& .MuiInput-underline:after': {
//     borderBottomColor: p.focusColor,
//   },
//   // focused color for input with variant='filled'
//   '& .MuiFilledInput-underline:after': {
//     borderBottomColor: p.focusColor,
//   },
//   // focused color for input with variant='outlined'
//   '& .MuiOutlinedInput-root': {
//     '&.Mui-focused fieldset': {
//       borderColor: p.focusColor,
//     },
//   },
// }));
var _default = SearchForm;
exports.default = _default;