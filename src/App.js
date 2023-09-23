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

function App() {
  const { navItems, col1, col2, col3, social } = data;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar
          logo={<Logo width={70} fill={'white'} />}
          background={colors.background}
          itemsColor={colors.primary[500]}
          items={navItems.map((i) => {
            return <a>{i}</a>;
          })}
          mobileMenuColor={colors.white[500]}
          withLogIn
          variant={'primary'}
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
          buttonVariant={'black'}
          focusColor={colors.black[800]}
          labelColor={colors.white[500]}
        />

        <Section
          image={'/img/footer-bg.png'}
          title={'Mondays'}
          body="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          buttonText="Learn More"
          variant={'purple'}
        />
        <CardsContainer>
          {cards.map((card) => {
            return (
              <Card
                image={card.image}
                title={card.title}
                body={card.body}
                buttonText={card.buttonText}
                variant={card.variant}
              />
            );
          })}
        </CardsContainer>
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
const CardsContainer = styled.div({
  display: 'flex',
  margin: '3rem auto',
  gap: '2rem',
  justifyContent: 'center',
});

export default App;
