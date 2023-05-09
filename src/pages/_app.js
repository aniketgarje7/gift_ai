import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/red-hat-display";
import "@fontsource/poppins"
// import { gsap } from 'gsap'
// import { CSSPlugin } from 'gsap/CSSPlugin'
// gsap.registerPlugin(CSSPlugin)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
  <Component {...pageProps} />
    </Provider>
  )
}
