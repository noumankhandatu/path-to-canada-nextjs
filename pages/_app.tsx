import type { AppProps } from "next/app";
import Header from "../scr/components/Organism/Header";
import Footer from "../scr/components/Organism/Footer";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import store from "../Redux/store";
import { Provider } from "react-redux";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
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
export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const home = await client.getByUID("home", "home-id");
  console.log(home);
  return {
    props: {
      home,
    },
  };
}
