import { AppProps } from 'next/app';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { GlobalStyle } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
