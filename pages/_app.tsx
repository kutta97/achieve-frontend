import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Layout } from '../components/layouts/layout/Layout';
import GlobalStyles from '../styles/globalStyles';
import { theme } from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
