import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';
import Button from './Button';
import { Box } from '@mui/material';

const Card = ({ image, title, body, variant, buttonText }) => {
  return (
    <StyledCard>
      <div>
        {' '}
        <StyledImage src={image} />
      </div>
      <Container>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
          id="card-content"
        >
          <Title>{title}</Title>
          <Body>{body} </Body>
        </Box>
        <Box>
          {variant && <Button label={buttonText} variant={variant} fullwidth />}
        </Box>
      </Container>
    </StyledCard>
  );
};

const StyledCard = styled.div({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${colors.grey[300]}`,
  borderRadius: '8px',
  color: colors.black[800],
  width: '350px',
  background: colors.white[500],
});

const StyledImage = styled.img({
  width: '100%',
  height: '200px',
  borderRadius: '8px 8px 0 0',
});

const Container = styled.div({
  padding: '1rem 1rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flexGrow: 1,
});

const Title = styled.h4({
  fontFamily: 'Anton',
  fontSize: '1.5rem',
  color: colors.black[800],
  margin: 0,
});

const Body = styled.p({
  fontFamily: 'Roboto',
  fontSize: '1rem',
  color: colors.black[800],
  lineHeight: 1.5,
});

export default Card;
