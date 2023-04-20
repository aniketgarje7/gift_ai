import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/red-hat-display";



export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
  <Component {...pageProps} />
    </Provider>
  )
}
