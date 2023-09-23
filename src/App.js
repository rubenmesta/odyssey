import { colors } from './lib/utils/colors';
import Hero from './lib/components/Hero';
import { Layout } from './lib/components/Layout';
import { Box } from '@mui/material';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
