import React, { useState } from "react";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import Wrapper from "../scr/components/Organism/Wrapper";
import Font from "../scr/components/Atoms/Font";
import Banner from "../scr/components/Atoms/redBanner";
import Accordion from "../scr/components/Molecules/accordion";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
const FAQS = ({ faqs }: any) => {
  // accordion started
  const mapping = faqs?.results?.map((items) => {
    return items.data?.slices;
  });
  const helper = mapping[0][0].items.map((zeus) => {
    return zeus;
  });
  const AccordionArray = [
    {
      label: helper[0].question,
      paragraph: helper[0].answer,
    },
    {
      label: helper[1].question,
      paragraph: helper[1].answer,
    },
    {
      label: helper[2].question,
      paragraph: helper[2].answer,
    },
    {
      label: helper[3].question,
      paragraph: helper[3].answer,
    },
    {
      label: helper[4].question,
      paragraph: helper[4].answer,
    },
    {
      label: helper[5].question,
      paragraph: helper[5].answer,
    },
    {
      label: helper[6].question,
      paragraph: helper[6].answer,
    },
    {
      label: helper[7].question,
      paragraph: helper[7].answer,
    },
    {
      label: helper[8].question,
      paragraph: helper[8].answer,
    },
    {
      label: helper[9].question,
      paragraph: helper[9].answer,
    },
    {
      label: helper[10].question,
      paragraph: helper[10].answer,
    },
    {
      label: helper[11].question,
      paragraph: helper[11].answer,
    },
    {
      label: helper[12].question,
      paragraph: helper[12].answer,
    },
    {
      label: helper[13].question,
      paragraph: helper[13].answer,
    },
    {
      label: helper[14].question,
      paragraph: helper[14].answer,
    },
    {
      label: helper[15].question,
      paragraph: helper[15].answer,
    },
    {
      label: helper[16].question,
      paragraph: helper[16].answer,
    },
    {
      label: helper[17].question,
      paragraph: helper[17].answer,
    },
    {
      label: helper[18].question,
      paragraph: helper[18].answer,
    },
  ];
  // accordion end
  const mapper = faqs?.results?.map((items) => {
    return items.data?.slices;
  });
  const heading = faqs?.results?.map((items) => {
    return items?.data?.heading;
  });
  const title = faqs?.results?.map((items) => {
    return items?.data?.title;
  });
  const descriptionOne = faqs?.results?.map((items) => {
    return items?.data?.descriptionOne;
  });
  const descriptionTwo = faqs?.results?.map((items) => {
    return items?.data?.descriptionTwo;
  });
  const descriptionThree = faqs?.results?.map((items) => {
    return items?.data?.descriptionThree;
  });
  // home banner
  const headingOne = mapper?.map((data) => {
    return data[1]?.items[0]?.title;
  });
  const description = mapper?.map((data) => {
    return data[1]?.items[0]?.description;
  });
  const backgroundImage = mapper?.map((data) => {
    return data[1]?.items[0]?.backgroundImage.url;
  });
  // home banner end
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading={headingOne ? headingOne : `pending`}
        paragraph={description ? description : `pending`}
        bgImage={backgroundImage ? backgroundImage : `pending`}
      />
      <Wrapper className="bg-aqua-color text-white">
        <div className="pt-20 pb-20 text-center">
          <div className="text-4xl font-bold">
            {heading ? heading : `pending`}
          </div>
          <div className="font-bold pt-10 pb-2">
            {title ? title : `pending`}
          </div>
          <Font className="pt-4 pb-4">
            {descriptionOne ? descriptionOne : `pending`}
          </Font>
          <Font className="pt-4 pb-4">
            {descriptionTwo ? descriptionTwo : `pending`}
          </Font>
          <Font>{descriptionThree ? descriptionThree : `pending`}</Font>
        </div>
      </Wrapper>
      <Wrapper className="pt-32 pb-20">
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-10">
          <Banner text="EMPLOYER FAQ" />
          <Banner text="EMPLOYER FAQ" />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 gap-cols-20 mt-10">
          {AccordionArray.map((items: {}) => {
            return <Accordion items={items} />;
          })}
        </div>
      </Wrapper>
      <BlackBannerLeafSection />
    </div>
  );
};

export default FAQS;
export async function getServerSideProps() {
  const faqs = await Client().query(
    Prismic.Predicates.at("document.type", "faqs")
  );
  return {
    props: {
      faqs,
    },
  };
}
