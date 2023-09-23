import React, { useState } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors } from '../utils/colors';
import * as data from '../../data';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const theme = createTheme();

const Layout = ({ children }) => {
  const { navItems, col1, col2, col3, social } = data;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar
          logo={'/logo192.png'}
          background={colors.background}
          itemsColor={colors.primary[500]}
          items={navItems.map((i) => {
            return <a>{i}</a>;
          })}
          mobileMenuColor={colors.white[500]}
          withLogIn
        />
        {children}
        <Footer
          title={'Explore the Cosmos'}
          col1={col1}
          col2={col2}
          col3={col3}
          social={social}
          avatar={'/img/footer-avatar.svg'}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default Layout;
