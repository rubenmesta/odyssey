import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { colors } from '../utils/colors';
import Button from './Button';
import Avatar from '@mui/material/Avatar';

const Navbar = ({
  logo,
  items,
  background,
  itemsColor,
  withLogIn = false,
  isLoggedIn = false,
}) => {
  return (
    <Navigation background={background}>
      <NavContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <NavbarItems itemsColor={itemsColor}>
          {items.map((item) => {
            return <Item>{item}</Item>;
          })}
        </NavbarItems>
        {withLogIn === true && !isLoggedIn ? (
          <ButtonsContainer>
            <Button label={'Log In'} variant={'outlineWhite'} />
            <Button label={'Sign Up'} variant={'outlineWhite'} />
          </ButtonsContainer>
        ) : (
          <Avatar sx={{ bgcolor: colors.orange[500] }}>N</Avatar>
        )}
      </NavContainer>
    </Navigation>
  );
};

const Navigation = styled.nav(
  {
    width: '100%',
  },
  ({ background }) => ({
    background: background,
  })
);

const NavContainer = styled.div({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  fontSize: '1.2rem',
});

const Logo = styled.div({
  img: {
    width: '70px',
  },
});

const NavbarItems = styled.div(
  {
    display: 'flex',
    fontFamily: 'Roboto Mono',
  },
  ({ itemsColor }) => ({
    color: itemsColor,
  })
);

const Item = styled.div({
  margin: '0 1rem',
  '&:first-of-type': {
    marginLeft: 0,
  },
  '&:last-of-type': {
    marginRight: 0,
  },
});

const ButtonsContainer = styled(Box)({
  display: 'flex',
  gap: '1rem',
});

export default Navbar;
