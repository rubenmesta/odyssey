import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import { Box, useTheme, Typography } from '@mui/material';

import Button from './Button';
import { MEDIA_QUERIES } from '../utils/media';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Hero = ({
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
  children,
}) => {
  const imageHeight = (variant) => {
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
  const theme = useTheme();

  const Description = styled(HeroDescription)({
    width: '400px',
    color: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.3rem',
    },
  });

  const Container = ({ children }) => {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          background: overlay
            ? `linear-gradient(${overlayColor}, ${overlayColor}), url(${image})`
            : `url(${image})`,
          backgroundColor: backgroundColor && backgroundColor,
          height: 'aito',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: 0,
          [MEDIA_QUERIES.tablet]: {
            height: containerHeight,
          },
        }}
      >
        {children}
      </Box>
    );
  };

  const renderCTAs = (primaryCta, secondaryCta) => {
    return (
      <Box gap={2} display={'flex'}>
        {primaryCta && (
          <Button withArrow variant="primary" size="large" label={primaryCta} />
        )}
        {secondaryCta && (
          <Button
            withArrow
            variant="outlinePrimary"
            size="large"
            label={secondaryCta}
          />
        )}
      </Box>
    );
  };
  const ContentWrapper = styled(Box)(
    {
      width: '100%',
      margin: '0 auto',
      height: '100%',
      padding: '2rem 1rem',
      color: theme.palette.common.white,
      gap: '2rem',
    },
    ({ contentAlignment }) => ({
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

      [MEDIA_QUERIES.tablet]: {
        maxWidth: contentAlignment === 'center' ? '100%' : '1200px',
      },
    })
  );

  return (
    <>
      <Container id="container">
        <ContentWrapper contentAlignment={contentAlignment} id="wrapper">
          <Box>
            {logo && <Logo src={logo} />}
            {title && (
              <Title variant="h1" color={theme.palette.common.white}>
                {title}
              </Title>
            )}
            {subtitle && (
              <Subtitle color={theme.palette.common.white}>{subtitle}</Subtitle>
            )}

            {description && <Description>Description here</Description>}
          </Box>
          <ButtonsContainer display="flex" flexDirection="column" gap="10px">
            {(primaryCta || secondaryCta) && (
              <>
                <Box>{renderCTAs(primaryCta, secondaryCta)}</Box>
              </>
            )}
          </ButtonsContainer>
          {children}
        </ContentWrapper>
      </Container>
      {search && (
        <Box
          sx={{
            color: 'black',
            width: '100%',
            background: colors.white[500],
            height: '180px',
            display: 'flex',

            alignItems: 'center',
          }}
        >
          <FormContainer>
            <InputField
              id="filled-search"
              label="Destination"
              type="search"
              variant="outlined"
              focusColor={colors.black[600]}
              sx={{ flex: 3 }}
            />
            <DatePicker label="Start Date" sx={{ flex: 2 }} />
            <DatePicker label="End Date" sx={{ flex: 2 }} />

            <InputField
              id="filled-search"
              label="Travelers"
              type="number"
              variant="outlined"
              focusColor={colors.black[600]}
              sx={{ flex: 1 }}
            />

            <Button label={'Search'} style={{ flex: 1 }} />
          </FormContainer>
        </Box>
      )}
    </>
  );
};

const Title = styled(Typography)({
  '&.MuiTypography-root': {
    color: '#fff',
    letterSpacing: '2px',
    fontFamily: 'Prata',
    fontSize: '5rem',
    lineHeight: 1,
    marginBottom: '1rem',
  },
});

const Subtitle = styled(Typography)({
  '&.MuiTypography-root': {
    color: '#fff',
    letterSpacing: '2px',
    fontSize: '3rem',
    lineHeight: 1,
    fontWeight: 200,
    marginBottom: '1rem',
    fontFamily: 'Montserrat',
  },
});

const InnerContainer = styled(Box)({
  height: 'auto',
});

const HeroDescription = styled(Box)({
  fontSize: '1rem',
  fontFamily: 'Nunito',
  fontWeight: 300,
  lineHeight: 1.5,
  '& .ptid': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: '0 3px',
  },
});

const ButtonsContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2rem 0 0 0',
});

const Wrapper = styled.div({
  width: '100%',
  height: 'auto',
});

const Logo = styled.img({
  padding: '1rem',
  width: '400px',
});

const FormContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
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

export default Hero;
