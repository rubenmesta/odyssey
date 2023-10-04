import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import Button from './Button';
import { Box } from '@mui/material';

const Footer = ({
  title,
  col1,
  col2,
  col3,
  social,
  avatar,
  background,
  buttonVariant,
}) => {
  return (
    <StyledFooter background={background || colors.primary[900]}>
      <FooterContainer>
        <FooterHero>
          <FooterContact>
            <FooterContactTitle>{title}</FooterContactTitle>
            <ButtonsContainer>
              <Button
                label={'Sign Up for Free'}
                variant={buttonVariant || 'outlinePrimary'}
              />
            </ButtonsContainer>
          </FooterContact>
          <FooterAvatar>
            <img src={avatar} />
          </FooterAvatar>
        </FooterHero>

        <FooterContent>
          <FooterLogo>
            <img src="/img/IPTS-logo-white.svg" />
            <FooterQuote>Travel beyond</FooterQuote>
          </FooterLogo>

          <FooterGrid>
            <Box>
              {col1?.map((item) => {
                return <Item>{item}</Item>;
              })}
            </Box>
            <Box>
              {col2?.map((item) => {
                return <Item>{item}</Item>;
              })}
            </Box>
            <Box>
              {col3?.map((item) => {
                return <Item>{item}</Item>;
              })}
              <SocialIcons>
                {social?.map((image) => {
                  return <img src={image} />;
                })}
              </SocialIcons>
            </Box>
          </FooterGrid>
        </FooterContent>
      </FooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer(
  {
    color: colors.white[500],
    width: '100%',
    padding: '65px 0',
  },
  ({ background }) => ({
    background: background,
  })
);

const FooterContainer = styled.div({
  width: '100%',
  maxWidth: '1230px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '15px',
  paddingRight: '15px',
  display: 'block',
});

const FooterHero = styled.div({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
});

const FooterContact = styled.div({
  width: '100%',
  maxWidth: '605px',
  color: colors.white[500],
});

const ButtonsContainer = styled.div({
  flexWrap: 'wrap',
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '2rem',
});

const FooterContactTitle = styled.h3({
  fontSize: '36px',
  textAlign: 'left',
});

const FooterAvatar = styled.div({
  marginBottom: '25px',
  marginRight: '37px',
  paddingBottom: '7px',
  paddingRight: ' 10px',
  img: {
    width: '200px',
    marginTop: '3rem',
  },
});

const FooterContent = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginTop: '50px',
  display: 'flex',
});

const FooterLogo = styled.div({
  img: {
    width: '75px',
  },
});

const FooterQuote = styled.div({
  color: colors.neutrals[400],
  maxWidth: '100%',
  marginTop: '20px',
  fontFamily: 'IBM Plex Serif',
  fontSize: '16px',
  lineHeight: '1.7em',
});

const FooterGrid = styled.div({
  width: '100%',
  maxWidth: ' 610px',
  gridTemplateRows: 'auto auto',
  gridTemplateColumns: '1fr 1fr',
  gridAutoColumns: '1fr',
  justifyContent: 'space-between',
  display: 'flex',
});

const Item = styled.div({
  lineHeight: 1.5,
  color: colors.neutrals[400],
  marginBottom: '10px',
  fontFamily: 'IBM Plex Mono',
  fontSize: '16px',
  textDecoration: 'none',
  display: 'block',
});

const SocialIcons = styled.div({
  display: 'flex',
  gap: '1rem',
});

export default Footer;
