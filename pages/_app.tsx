import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout/Layout'
import { Provider } from 'mobx-react'
import { RootStore } from '../stores';

const rootStore = new RootStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider rootStore={rootStore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
