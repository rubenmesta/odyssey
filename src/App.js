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
          logInButton="primary"
          signUpButton="outlinePrimary"
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

        <Section
          image={'/img/footer-bg.png'}
          title={'Mondays'}
          body="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          buttonText="Learn More"
        />
        <CardsContainer>
          <Card
            image="/img/footer-bg.png"
            title="Mondays"
            body="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            buttonText="Learn More"
            variant="primary"
          />
          <Card
            image="/img/food6.jpg"
            title={'Wednesday'}
            body="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            buttonText="Learn More"
            variant={'secondary'}
          />
          <Card
            image="/img/food7.jpg"
            title={'Thursday'}
            body="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            buttonText="Learn More"
            variant={'black'}
          />
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
