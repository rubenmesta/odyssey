import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import Button from './Button';

const Card = ({ image, title, body, variant, buttonText }) => {
  return (
    <StyledCard>
      <div>
        {' '}
        <StyledImage src={image} />
      </div>
      <Container>
        <Title>{title}</Title>
        <Body>{body} </Body>
        {variant && <Button label={buttonText} variant={variant} />}
      </Container>
    </StyledCard>
  );
};

const StyledCard = styled.div({
  border: `1px solid ${colors.grey[300]}`,
  borderRadius: '8px',
  color: colors.black[800],
  width: '350px',
  background: colors.white[500],
});

const StyledImage = styled.img({
  width: '100%',
  height: 'auto',
  borderRadius: '8px 8px 0 0',
});

const Container = styled.div({
  padding: '1rem 1rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const Title = styled.h4({
  fontFamily: 'Playfair Display',
  fontSize: '1.5rem',
  color: colors.secondary[500],
  margin: 0,
});

const Body = styled.p({
  fontFamily: 'Montserrat',
  fontSize: '1rem',
  color: colors.black[800],
  lineHeight: 1.5,
});

export default Card;
