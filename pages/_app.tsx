import { Layout } from '@components/layouts/layout/Layout';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/globalStyles';
import { theme } from '../styles/theme';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {getLayout(
          <>
            <GlobalStyles />
            <Component {...pageProps} />
          </>
        )}
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
