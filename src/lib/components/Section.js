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
  background,
  color,
  fontSize,
}) => {
  return (
    <Container flip={flip} background={background || colors.white.base}>
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
        color={color || colors.black[800]}
      >
        <Title fontSize={fontSize || '4rem'}>{title}</Title>
        <Body>{body} </Body>
        {variant && (
          <Button
            style={{ width: '40%' }}
            label={buttonText}
            variant={variant}
          />
        )}
      </ContentSection>
    </Container>
  );
};

const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'flip',
})(({ flip, background }) => ({
  display: 'flex',
  flexDirection: flip ? 'row-reverse' : 'row',
  color: colors.black.base,
  width: '100%',
  height: 'auto',
  background: background,
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

const ContentSection = styled.div(
  {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column',
  },
  ({ color, padding, alignItems, justifyContent, flexBasis }) => ({
    flexBasis: flexBasis ? flexBasis : '50%',
    padding: padding ? padding : '5rem 8rem',
    alignItems: alignItems ? alignItems : 'center',
    justifyContent: justifyContent ? justifyContent : 'center',
    color: color,
  })
);

const StyledImage = styled.img({
  width: '100%',
  height: 'auto',
});

const Title = styled.h2(
  {
    fontFamily: 'IBM Plex Serif',
    color: colors.black.base,
    fontSize: '4rem',
    margin: 0,
    lineHeight: 1.2,
  },
  ({ fontSize }) => ({
    fontSize: fontSize,
  })
);

const Body = styled.p({
  fontFamily: 'IBM Plex Mono',
  fontSize: '1rem',
  color: colors.black.dark,
  lineHeight: 1.8,
  margin: '3rem 0',
});

export default Section;
