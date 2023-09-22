import logo from './logo.svg';
import './App.css';
import Button from './lib/components/Button';
import Navbar from './lib/components/Navbar';
import { colors } from './lib/utils/colors';
import Footer from './lib/components/Footer';

const navItems = ['Home', 'Reservations', 'Gift Cards', 'Private Dining'];

const col1 = ['About Us', ' Destinations', 'Spacecraft'];
const col2 = ['Terms of Service', 'Privacy Policy', 'Refund Policy'];
const col3 = ['News', 'Rail'];
const social = [
  '/img/facebook.svg',
  '/img/instagram.svg',
  '/img/twitter.svg',
  '/img/linkedin.svg',
];

function App() {
  return (
    <>
      <Navbar
        logo={'/logo192.png'}
        background={colors.background}
        itemsColor={colors.primary[500]}
        items={navItems.map((i) => {
          return <a>{i}</a>;
        })}
        withLogIn
      />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button label={'Learn more'} />
        </header>
      </div>
      <Footer
        title={'Explore the Cosmos'}
        col1={col1}
        col2={col2}
        col3={col3}
        social={social}
        avatar={'/img/footer-avatar.svg'}
      />
    </>
  );
}

export default App;
