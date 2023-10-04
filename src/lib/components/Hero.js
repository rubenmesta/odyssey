import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import { Box, useTheme, Typography } from '@mui/material';

import Button from './Button';
import { MEDIA_QUERIES } from '../utils/media';
import TextField from '@mui/material/TextField';
import SearchForm from './SeachForm';

const Hero = ({
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
  search = true,

  children,
}) => {
  const imageHeight = (variant) => {
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
  const theme = useTheme();

  const Description = styled(HeroDescription)({
    width: '400px',
    color: colors.white[500],
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
          <Button
            withArrow
            variant={primaryCtaVariant || 'purple'}
            size="large"
            label={primaryCta}
          />
        )}
        {secondaryCta && (
          <Button
            withArrow
            variant={secondaryCtaVariant || 'outlineWhite'}
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
      color: colors.white[500],
      gap: '2rem',
    },
    ({ contentAlignment }) => ({
      display: 'flex',
      flexDirection: 'column',

      maxWidth: contentAlignment === 'center' ? '100%' : '1200px',
      alignItems: contentAlignment === 'center' ? 'center' : 'flex-start',
      textAlign: contentAlignment === 'center' ? 'center' : 'left',
      justifyContent: 'center',

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
              <Title variant="h1" color={colors.white[500]}>
                {title}
              </Title>
            )}
            {subtitle && (
              <Subtitle color={colors.white[500]}>{subtitle}</Subtitle>
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
        <SearchForm
          backgroundColor={colors.purple[100]}
          height={180}
          buttonVariant={'black'}
        />
      )}
    </>
  );
};

const Title = styled(Typography)({
  '&.MuiTypography-root': {
    color: '#fff',
    letterSpacing: '2px',
    fontFamily: 'IBM Plex serif',
    fontWeight: 700,
    fontSize: '4rem',
    lineHeight: 1,
    marginBottom: '1rem',
  },
});

const Subtitle = styled(Typography)({
  color: '#fff',
  letterSpacing: '2px',
  fontSize: '1.25rem',
  lineHeight: 1,
  fontWeight: 200,
  marginBottom: '1rem',
  fontFamily: 'IBM Plex Mono',
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

export default Hero;
