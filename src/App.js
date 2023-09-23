import { colors } from './lib/utils/colors';
import Hero from './lib/components/Hero';
import { Box } from '@mui/material';
import Navbar from './lib/components/Navbar';
import Footer from './lib/components/Footer';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import * as data from './data';

function App() {
  const { navItems, col1, col2, col3, social } = data;

  return (
    <>
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
        <Hero
          variant="slim"
          backgroundColor={colors.black[800]}
          title={'Explore the Universe'}
          subtitle={'Embark on a Journey Beyond the Stars'}
          primaryCta={'Book Your Adventure'}
          secondaryCta={'Explore'}
          contentAlignment="left"
          search={true}
        />
        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>stufff</Box>
        <Footer
          title={'Explore the Cosmos'}
          col1={col1}
          col2={col2}
          col3={col3}
          social={social}
          avatar={'/img/footer-avatar.svg'}
        />
      </LocalizationProvider>
    </>
  );
}

export default App;
