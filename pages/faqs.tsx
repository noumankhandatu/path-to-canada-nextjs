import React from "react";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import Wrapper from "../scr/components/Organism/Wrapper";
import Font from "../scr/components/Atoms/Font";
import Banner from "../scr/components/Atoms/redBanner";
import Accordion from "../scr/components/Molecules/accordion";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
const FAQS = ({
  faqs,
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
  const heading = faqs?.data?.heading;
  const title = faqs?.data?.title;
  const descriptionOne = faqs?.data?.descriptionOne;
  const descriptionTwo = faqs?.data?.descriptionTwo;
  const descriptionThree = faqs?.data?.descriptionThree;
  const headingOne = faqs?.data?.slices[1]?.items[0].title;
  const description = faqs?.data?.slices[1]?.items[0]?.description;
  const backgroundImage = faqs?.data?.slices[1]?.items[0]?.backgroundImage?.url;
  const mapper = faqs.data.slices[0].items;

  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading={headingOne}
        paragraph={description}
        bgImage={backgroundImage}
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
          {mapper &&
            mapper?.map((items: {}) => {
              return <Accordion items={items} />;
            })}
        </div>
      </Wrapper>
      <BlackBannerLeafSection />
    </div>
  );
};

export default FAQS;

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const faqs = await client.getByUID("faqs", "id-faq");
  return {
    props: {
      faqs,
    },
  };
}
