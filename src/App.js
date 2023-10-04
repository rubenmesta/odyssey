import { colors } from './lib/utils/colors';
import Hero from './lib/components/Hero';
import { Box } from '@mui/material';
import Navbar from './lib/components/Navbar';
import Footer from './lib/components/Footer';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import * as data from './data';
import Card from './lib/components/Card';
import Section from './lib/components/Section';
import styled from '@emotion/styled';
import Logo from './lib/components/Logo';
import { SearchForm } from './lib';
import { cards } from './data';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  const { navItems, col1, col2, col3, social } = data;

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar
          logo={<Logo width={70} fill={'white'} company={'.ORG'} />}
          background={colors.primary[900]}
          itemsColor={colors.secondary[100]}
          items={navItems.map((i) => {
            return <a>{i}</a>;
          })}
          mobileMenuColor={colors.white[500]}
          withLogIn
          variant={'outlinePrimary'}
          buttonLabel={'Log In'}
        />
        <Hero
          variant="slim"
          backgroundColor={colors.black[800]}
          title={'Explore the Universe'}
          subtitle={'Embark on a Journey Beyond the Stars'}
          primaryCta={'Book Your Adventure'}
          secondaryCta={'Explore'}
          contentAlignment="left"
          search={false}
          searchButtonVariant={'secondary'}
        />
        <SearchForm
          title="Seach your next adventure"
          backgroundColor={colors.secondary[100]}
          height={180}
          buttonVariant={'primary'}
          focusColor={colors.black[800]}
          labelColor={colors.white[500]}
          destinationLabel={'Destination'}
          startDateLabel={'From'}
          endDateLabel={'To'}
          travelersLabel={'Travelers'}
        />

        <Box sx={{ maxWidth: '70vw', margin: '0 auto', padding: '2rem' }}>
          <Section
            title={'Title'}
            body="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            buttonText="Learn More"
            variant={'outlineWhite'}
            padding={'2rem'}
            alignItems={'left'}
            image={'/img/unsplash3.jpg'}
            background={colors.primary[900]}
            color={colors.secondary[100]}
          />
        </Box>
        <CardsContainer>
          {cards.map((card) => {
            return (
              <Card
                title={card.title}
                body={card.body}
                buttonText={card.buttonText}
                variant={card.variant}
              />
            );
          })}
        </CardsContainer>
        {/* <img src="/img/spiral.svg" /> */}
        <Footer
          title={'Explore the Cosmos'}
          col1={['About Us', ' Destinations', 'Spacecraft']}
          col2={['Terms of Service', 'Privacy Policy', 'Refund Policy']}
          col3={['News', 'Rail']}
          social={[
            '/img/facebook.svg',
            '/img/instagram.svg',
            '/img/twitter.svg',
            '/img/linkedin.svg',
          ]}
          avatar={'/img/footer-avatar.svg'}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
const CardsContainer = styled.div({
  display: 'flex',
  margin: '3rem auto',
  gap: '2rem',
  justifyContent: 'center',
});

export default App;
