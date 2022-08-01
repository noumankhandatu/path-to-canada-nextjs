import React from "react";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import Wrapper from "../scr/components/Organism/Wrapper";
import Font from "../scr/components/Atoms/Font";
import RedBannerSection from "../scr/components/Organism/redBannerSection";
const AboutUs = () => {
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading="We create connections"
        paragraph="Canadian employers can build their teams with experienced, quality talent in 90 days or less. Experienced talent can build their lives and tech career in Canada"
        bgImage={
          "https://path2canada.ca/wp-content/uploads/2022/05/aboutUs_hero.svg"
        }
        showFirstBtn
      />
      <Wrapper className="bg-aqua-color text-white text-center pt-20 pb-20">
        <div className="text-4xl font-bold pb-10">Our Mission</div>
        <Font>
          Path to Canada respects immigrants and their desire to improve their
          own lives and the lives of their families. We seek to offer a solution
          that allows people to live and work in a country like Canada that
          welcomes immigrants. We speak from personal experience when it comes
          to living and working in Canada. Path to Canada will never sell your
          information or market to you in any way. Our goal is to set you on a
          path of building your life and tech career in Canada.
        </Font>
      </Wrapper>
      <RedBannerSection
        Fheading="Find me a role in Canada"
        Sheading="Find me talent"
        Flabel="HELP ME BUILD MY LIFE AND CAREER"
        Slabel="HELP ME FILL OUR OPEN ROLES"
      />
      <BlackBannerLeafSection />
    </div>
  );
};

export default AboutUs;
