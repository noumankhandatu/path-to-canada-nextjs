import React from "react";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import Wrapper from "../scr/components/Organism/Wrapper";
import Font from "../scr/components/Atoms/Font";
import RedBannerSection from "../scr/components/Organism/redBannerSection";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
const AboutUs = ({ aboutus }: any) => {
  const homeBackgroundImage =
    aboutus?.data?.slices[1]?.items[0]?.backgroundImage?.url;
  const homeTitle = aboutus?.data?.slices[1]?.items[0]?.title;
  const homeDescription = aboutus?.data?.slices[1]?.items[0]?.description;
  const heading = aboutus?.data?.heading;
  const description = aboutus?.data?.description;
  const headingOne = aboutus?.data?.slices[0]?.items[0]?.headingOne;
  const headingTwo = aboutus?.data?.slices[0]?.items[0]?.headingOne;
  const lableOne = aboutus?.data?.slices[0]?.items[0]?.lableOne;
  const labelTwo = aboutus?.data?.slices[0]?.items[0]?.labelTwo;

  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading={homeTitle}
        paragraph={homeDescription}
        bgImage={homeBackgroundImage}
        showFirstBtn
      />
      <Wrapper className="bg-aqua-color text-white text-center pt-20 pb-20">
        <div className="text-4xl font-bold pb-10">{heading}</div>
        <Font>{description}</Font>
      </Wrapper>
      <RedBannerSection
        Fheading={headingOne}
        Sheading={headingTwo}
        Flabel={lableOne}
        Slabel={labelTwo}
      />
      <BlackBannerLeafSection />
    </div>
  );
};

export default AboutUs;
export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const aboutus = await client.getByUID("aboutus", "id-aboutus");
  return {
    props: {
      aboutus,
    },
  };
}
