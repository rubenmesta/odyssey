import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { colors } from '../utils/colors';
import Button from './Button';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Typography from '@mui/material/Typography';
import Logo from './Logo';
import { MEDIA_QUERIES } from '../utils/media';

const Navbar = ({
  logo,
  items,
  background,
  itemsColor,
  logInButton,
  signUpButton,
  withLogIn = false,
  isLoggedIn = false,
  mobileMenuColor,
}) => {
  const drawerWidth = 340;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const isMobile = MEDIA_QUERIES.base;
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Navigation background={background || colors.primary[500]}>
      <CssBaseline />

      <NavContainer>
        <LogoContainer>
          <Logo fill={'white'} width={'70px'} company={'.ORG'} />
        </LogoContainer>

        <NavbarItems itemsColor={itemsColor}>
          {items.map((item) => {
            return <Item>{item}</Item>;
          })}
        </NavbarItems>

        <Box>
          {withLogIn === true && !isLoggedIn ? (
            <ButtonsContainer>
              <Button label={'Log In'} variant={logInButton || 'primary'} />
              <Button
                label={'Sign Up'}
                variant={signUpButton || 'outlinePrimary'}
              />
            </ButtonsContainer>
          ) : (
            <Avatar sx={{ bgcolor: colors.orange[500] }}>N</Avatar>
          )}
        </Box>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            [MEDIA_QUERIES.desktop]: {
              display: 'none',
            },
          }}
        >
          <MenuIcon sx={{ fill: mobileMenuColor }} />
        </IconButton>
      </NavContainer>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Navigation>
  );
};

const Navigation = styled.nav(
  {
    width: '100%',
    padding: '0 1rem',
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

const LogoContainer = styled.div({
  img: {
    width: '70px',
  },
});

const NavbarItemContainers = styled.div(
  {
    display: 'flex',
    fontFamily: 'Roboto Mono',
    display: 'none',

    [MEDIA_QUERIES.tablet]: {
      display: 'flex',
    },
  },
  ({ itemsColor }) => ({
    color: itemsColor,
  })
);

const NavbarItems = styled.div(
  {
    display: 'flex',
    fontFamily: 'Roboto Mono',
    display: 'none',

    [MEDIA_QUERIES.desktop]: {
      display: 'flex',
    },
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
  display: 'none',
  gap: '1rem',
  [MEDIA_QUERIES.desktop]: {
    display: 'flex',
  },
});

export default Navbar;
