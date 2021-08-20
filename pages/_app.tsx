import '../styles/css/default.css';
import { AppProps } from 'next/app';
import { CounterProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CounterProvider>
      <Component {...pageProps} />
    </CounterProvider>
  );
}
export default MyApp;
