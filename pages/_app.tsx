import type { AppProps } from "next/app";
import Header from "../scr/components/Organism/Header";
import Footer from "../scr/components/Organism/Footer";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import store from "../Redux/store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
