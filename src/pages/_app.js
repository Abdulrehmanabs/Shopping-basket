import "@/styles/globals.css";
import { Provider } from 'react-redux';
import { meraStore } from '../Store/store'

export default function App({ Component, pageProps }) {
  return <Provider store={meraStore}>
    <Component {...pageProps} />;
  </Provider>
}
