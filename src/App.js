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
import Logo2 from './lib/components/Logo2';
import Logo from './lib/components/Logo';
import { SearchForm } from './lib';
import { cards } from './data';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  const { navItems, col1, col2, col3, social } = data;

  const news = {
    image: '/img/card1.webp',
    title: "NASA's Perseverance Rover Discovers Ancient Riverbed on Mars",
    body: "This is a significant milestone in our quest to understand the history of water on Mars and, importantly, whether the planet ever supported life,\" said Dr. Sarah Johnson, a planetary geologist at NASA's Jet Propulsion Laboratory.\n\nScientists are excited about the potential of the rock samples Perseverance will collect from this region. These samples may hold clues about Mars' ancient climate and whether it was ever habitable. Future missions to Mars, including sample return missions, will play a crucial role in unlocking the secrets of the Red Planet.\n\nNASA's Perseverance rover continues to make groundbreaking discoveries on Mars, and each new finding brings us closer to answering the age-old question: Is there, or was there ever, life on Mars?",
    variant: 'purple',
    buttonText: 'Learn More',
  };

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
        <Section
          title={news.title}
          body={news.body}
          style={{ padding: 0 }}
          flexBasis="100%"
          padding="0 8rem"
          fontSize={'4rem'}
        />
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
          logo={<Logo2 width={200} />}
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
