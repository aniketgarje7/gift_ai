import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/red-hat-display";
// import { gsap } from 'gsap'
// import { CSSPlugin } from 'gsap/CSSPlugin'
// gsap.registerPlugin(CSSPlugin)


export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
  <Component {...pageProps} />
    </Provider>
  )
}
