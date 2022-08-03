import React from "react";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import Wrapper from "../scr/components/Organism/Wrapper";
import Font from "../scr/components/Atoms/Font";
import RedBannerSection from "../scr/components/Organism/redBannerSection";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
const AboutUs = ({
  aboutus,
}:
  | {
      license: string;
      next_page: null;
      prev_page?: null;
      results: [];
      results_per_page: number;
      results_size?: number;
      total_pages: number;
      total_results_size: number;
      version?: string;
    }[]
  | any) => {
  const mapper = aboutus?.results.map((items) => {
    return items.data;
  });
  // home banner
  const homeBackgroundImage = mapper.map((items) => {
    return items.slices[1].items[0].backgroundImage.url;
  });
  const homeTitle = mapper.map((items) => {
    return items.slices[1].items[0].title;
  });
  const homeDescription = mapper.map((items) => {
    return items.slices[1].items[0].description;
  });
  // home banner ended
  // red banner
  const headingOne = mapper.map((items) => {
    return items.slices[0].items[0].headingOne;
  });
  const headingTwo = mapper.map((items) => {
    return items.slices[0].items[0].headingOne;
  });
  const lableOne = mapper.map((items) => {
    return items.slices[0].items[0].lableOne;
  });
  const labelTwo = mapper.map((items) => {
    return items.slices[0].items[0].labelTwo;
  });

  // red banner end
  const heading = aboutus?.results.map((items) => {
    return items.data.heading;
  });
  const description = aboutus?.results.map((items) => {
    return items.data.description;
  });
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading={homeTitle ? homeTitle : `pending`}
        paragraph={homeDescription ? homeDescription : `pending`}
        bgImage={homeBackgroundImage ? homeBackgroundImage : `pending`}
        showFirstBtn
      />
      <Wrapper className="bg-aqua-color text-white text-center pt-20 pb-20">
        <div className="text-4xl font-bold pb-10">{heading}</div>
        <Font>{description ? description : `pending`}</Font>
      </Wrapper>
      <RedBannerSection
        Fheading={headingOne ? headingOne : `pending`}
        Sheading={headingTwo ? headingTwo : `pending`}
        Flabel={lableOne ? lableOne : `pending`}
        Slabel={labelTwo ? labelTwo : `pending`}
      />
      <BlackBannerLeafSection />
    </div>
  );
};

export default AboutUs;
export async function getServerSideProps() {
  const aboutus = await Client().query(
    Prismic.Predicates.at("document.type", "aboutus")
  );
  return {
    props: {
      aboutus,
    },
  };
}
