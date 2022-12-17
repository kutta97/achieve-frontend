import { Layout } from '@components/layouts/layout/Layout';
import { Provider } from 'mobx-react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { RootStore } from '../store';
import GlobalStyles from '../styles/globalStyles';
import { theme } from '../styles/theme';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const rootStore = new RootStore();

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider {...rootStore}>
      <ThemeProvider theme={theme}>
        <Layout>
          {getLayout(
            <>
              <GlobalStyles />
              <Component {...pageProps} />
            </>
          )}
        </Layout>
        <div id="modal-root" />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
