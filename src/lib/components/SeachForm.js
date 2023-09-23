import React from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import { Box } from '@mui/material';
import Button from './Button';
import { MEDIA_QUERIES } from '../utils/media';

const SearchForm = ({ title, backgroundColor, height, buttonVariant }) => {
  return (
    <Box
      sx={{
        color: 'black',
        width: '100%',
        background: backgroundColor,
        height: height,
        display: 'flex',

        alignItems: 'center',
      }}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        margin={'0 auto'}
      >
        <Title>{title}</Title>
        <FormContainer>
          <InputField
            id="filled-search"
            label="Destination"
            type="search"
            variant="outlined"
            focusColor={colors.black[600]}
            sx={{ background: 'white', flex: 3 }}
          />
          <DatePicker
            label="Start Date"
            sx={{ background: 'white', flex: 2 }}
          />
          <DatePicker label="End Date" sx={{ background: 'white', flex: 2 }} />

          <InputField
            id="filled-search"
            label="Travelers"
            type="number"
            variant="outlined"
            focusColor={colors.black[600]}
            sx={{ background: 'white', flex: 1 }}
          />

          <Button
            label={'Search'}
            variant={buttonVariant}
            size={'large'}
            style={{ flex: 1 }}
          />
        </FormContainer>
      </Box>
    </Box>
  );
};

const FormContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
});
const Title = styled.h4({
  fontFamily: 'Roboto',
  fontSize: '1.3rem',
  color: colors.black[800],
  marginBottom: '0 0 .5rem 0',
});

const InputField = styled(TextField, {
  shouldForwardProp: (props) => props !== 'focusColor',
})((p) => ({
  // input label when focused
  '& label.Mui-focused': {
    color: p.focusColor,
  },
  // focused color for input with variant='standard'
  '& .MuiInput-underline:after': {
    borderBottomColor: p.focusColor,
  },
  // focused color for input with variant='filled'
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: p.focusColor,
  },
  // focused color for input with variant='outlined'
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: p.focusColor,
    },
  },
}));

export default SearchForm;
