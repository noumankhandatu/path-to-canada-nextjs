import React from "react";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";

const Error = ({ home }) => {

  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading="Page Not Found Go to another page"
        bgImage={
          "https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-with-SVG.png"
        }
      />
      <BlackBannerLeafSection />
    </div>
  );
};

export default Error;
