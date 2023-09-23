import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import Button from './Button';

const Section = ({ image, title, body, buttonText, flip = false }) => {
  return (
    <Container flip={flip}>
      <ImageSection>
        {' '}
        <StyledImage src={image} />
      </ImageSection>
      <ContentSection>
        <Title>{title}</Title>
        <Body>{body} </Body>
        <Button label={buttonText} variant={'primary'} />
      </ContentSection>
    </Container>
  );
};

const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'flip',
})(({ flip }) => ({
  display: 'flex',
  flexDirection: flip ? 'row-reverse' : 'row',
  color: colors.black.base,
  width: '100%',
  height: 'auto',
  background: colors.white.base,
}));

const ImageSection = styled.div({
  flexBasis: '50%',
  minWidth: '50%',
  height: 'auto,',
});

const ContentSection = styled.div({
  flexBasis: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5rem 8rem',
});

const StyledImage = styled.img({
  width: '100%',
  height: 'auto',
});

const Title = styled.h2({
  fontFamily: 'Prata',
  color: colors.black.base,
  fontSize: '4rem',
  margin: 0,
});

const Body = styled.p({
  fontFamily: 'Montserrat',
  fontSize: '1rem',
  color: colors.black.dark,
  lineHeight: 1.5,
  margin: '3rem 0',
});

export default Section;
