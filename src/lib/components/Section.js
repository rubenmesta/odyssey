import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import Button from './Button';

const Section = ({
  image,
  title,
  body,
  variant,
  buttonText,
  flip = false,
  flexBasis,
  padding,
  alignItems,
}) => {
  return (
    <Container flip={flip}>
      {image && (
        <ImageSection>
          {' '}
          <StyledImage src={image} />
        </ImageSection>
      )}
      <ContentSection
        flexBasis={flexBasis}
        padding={padding}
        alignItems={alignItems}
      >
        <Title>{title}</Title>
        <Body>{body} </Body>
        {variant && <Button label={buttonText} variant={variant} />}
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

const ImageSection = styled.div(
  {
    flexBasis: '50%',
    minWidth: '50%',
    height: 'auto,',
  },
  ({ flexBasis }) => ({
    flexBasis: flexBasis ? flexBasis : '50%',
  })
);

const ContentSection = styled.nav(
  {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column',
  },
  ({ padding, alignItems, justifyContent, flexBasis }) => ({
    flexBasis: flexBasis ? flexBasis : '50%',
    padding: padding ? padding : '5rem 8rem',
    alignItems: alignItems ? alignItems : 'center',
    justifyContent: justifyContent ? justifyContent : 'center',
  })
);

const StyledImage = styled.img({
  width: '100%',
  height: 'auto',
});

const Title = styled.h2({
  fontFamily: 'Anton',
  color: colors.black.base,
  fontSize: '4rem',
  margin: 0,
});

const Body = styled.p({
  fontFamily: 'Roboto',
  fontSize: '1rem',
  color: colors.black.dark,
  lineHeight: 1.5,
  margin: '3rem 0',
});

export default Section;
