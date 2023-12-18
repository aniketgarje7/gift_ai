import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/red-hat-display";
import "@fontsource/poppins"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
       <Component {...pageProps} />
       <ToastContainer/>
    </Provider>
  )
}
