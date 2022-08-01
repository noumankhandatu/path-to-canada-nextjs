import type { AppProps } from "next/app";
import Header from "../scr/components/Organism/Header";
import Footer from "../scr/components/Organism/Footer";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}

export default MyApp;
