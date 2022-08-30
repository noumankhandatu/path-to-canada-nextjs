import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Wrapper from "../scr/components/Organism/Wrapper";
import RoadMapCards from "../scr/components/Molecules/RoadMapCards";
import TestimonialCard from "../scr/components/Molecules/testimonialCard";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import RedLableText from "../scr/components/Atoms/redLableText";
import Font from "../scr/components/Atoms/Font";
import RedBannerSection from "../scr/components/Organism/redBannerSection";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
const Home: NextPage = ({ home }: any) => {
  const mapper = home.data;
  const bTitle = mapper.slices[2].items[0].title;
  const bDescription = mapper.slices[2].items[0].description;
  const backgroundImage = mapper.slices[2].items[0].backgroundImage.url;
  const headingOne = mapper.slices[1].items[0].headingOne;
  const lableOne = mapper.slices[1].items[0].lableOne;
  const headingTwo = mapper.slices[1].items[0].headingTwo;
  const labelTwo = mapper.slices[1].items[0].labelTwo;
  const title = mapper.title;
  const description = mapper.description;
  const textOne = mapper.textOne;
  const textTwo = mapper.textTwo;
  const textThree = mapper.textThree;
  const textFour = mapper.textFour;
  const one = mapper.one;
  const two = mapper.two;
  const three = mapper.three;
  const four = mapper.four;
  const five = mapper.five;
  const six = mapper.six;
  const roadTextOne = mapper.roadTextOne;
  const roadTextTwo = mapper.roadTextTwo;
  const roadTextThree = mapper.roadTextThree;
  const roadTextFour = mapper.roadTextFour;
  const roadTextFive = mapper.roadTextFive;
  const roadTextSix = mapper.roadTextSix;
  const roadImageOne = mapper.roadImageOne.url;
  const roadImageTwo = mapper.roadImageTwo.url;
  const roadImageThree = mapper.roadImageThree.url;
  const roadImageFour = mapper.roadImageFour.url;
  const roadImageFive = mapper.roadImageFive.url;
  const roadImageSix = mapper.roadImageSix.url;
  const imageOne = mapper.imageOne.url;
  const imageTwo = mapper.imageTwo.url;
  const liOne = mapper.liOne;
  const liTwo = mapper.liTwo;
  const liThree = mapper.liThree;
  const liFour = mapper.liFour;
  const liFive = mapper.liFive;
  const liSix = mapper.liSix;
  const liSeven = mapper.liSeven;
  const colorTextOne = mapper.colorTextOne;
  const colorTextTwo = mapper.colorTextTwo;
  const roadMapTitle = mapper.roadMapTitle;
  const roadMapDescription = mapper.roadMapDescription;
  const testimonialImageOne = mapper.testimonialImageOne.url;
  const IconOne = mapper.IconOne.url;
  const nameOne = mapper.nameOne;
  const descriptionOne = mapper.descriptionOne;
  const testimonialImageTwo = mapper.testimonialImageTwo.url;
  const IconTwo = mapper.IconTwo.url;
  const descriptionTwo = mapper.descriptionTwo;
  const nameTwo = mapper.nameTwo;
  const RoadMapArray = [
    {
      firstImg: roadImageOne,
      secondImg: roadImageTwo,
      countOne: one,
      countTwo: two,
      textOne: roadTextOne,
      textTwo: roadTextFour,
    },
    {
      firstImg: roadImageThree,
      secondImg: roadImageFour,
      countOne: three,
      countTwo: four,
      textOne: roadTextTwo,
      textTwo: roadTextFive,
    },
    {
      firstImg: roadImageFive,
      secondImg: roadImageSix,
      countOne: five,
      countTwo: six,
      textOne: roadTextThree,
      textTwo: roadTextSix,
    },
  ];
  return (
    <div>
      <Head>
        <title>Path to Canada</title>
        <link
          rel="icon"
          href="https://path2canada.ca/wp-content/uploads/2022/05/cropped-pathToCanada_favicon-32x32.png"
        />
        <script
          async
          defer
          src="https://static.cdn.prismic.io/prismic.js?new=true&repo=codeminimalist"
        ></script>
      </Head>
x
      <div className="pt-40">
        <HomePageFirstSection
          heading={bTitle}
          paragraph={bDescription}
          bgImage={backgroundImage}
          showFirstBtn={true}
          showSecondBtn={true}
        />
        {/* Second Section Started  => */}
        <Wrapper className="bg-light-red">
          <div className="text-4xl text-center font-bold pt-20  pb-10  text-cyan-900">
            {title}
          </div>
          <Font className=" pt-10 pb-16 ">{description}</Font>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 pb-20 gap-10">
            <div>
              <div className="text-red-600 text-xl	 font-bold tracking-wide	">
                {textOne}
              </div>
              <div className=" text-2xl	font-bold  pb-10 pt-4 tracking-wide	">
                {textThree}
              </div>
              <img className="w-6/7" src={imageOne} alt="" />
              <Font className="pt-10 pb-1 list-disc	">
                <li>{liOne}</li>
              </Font>
              <Font className=" pb-1 list-disc	">
                <li>{liTwo}</li>
              </Font>
              <Font className=" pb-1 list-disc	">
                <li>{liThree}</li>
              </Font>
              <Font className=" pb-1 list-disc	">
                <li>{liFour}</li>
              </Font>
              <Font>{liFive}</Font>
              <div className="mt-10 mb-10">
                <RedLableText text={colorTextOne} />
              </div>
            </div>
            <div>
              <div className="text-red-600 text-xl font-bold tracking-wide	">
                {textTwo}
              </div>
              <div className="text-2xl pt-4  pb-10	font-bold tracking-wide	">
                {textFour}
              </div>
              <img className="w-6/7" src={imageTwo} alt="" />
              <Font className="pt-10 pb-10  leading-loose">{liSix}</Font>
              <Font>
                {liSeven}
                <div className="mt-10 mb-10">
                  <RedLableText text={colorTextTwo} />
                </div>
              </Font>
            </div>
          </div>
        </Wrapper>
        <Wrapper className="bg-road-map-color text-white">
          <div className=" pt-20 pb-52">
            <div className="lg:text-5xl text-3xl text-center   font-bold ">
              {roadMapTitle}
            </div>
            <Font className="text-center pt-16 pb-16">
              {roadMapDescription}
            </Font>
            {RoadMapArray.map((items: any) => {
              return <RoadMapCards {...items} />;
            })}
          </div>
        </Wrapper>
        <RedBannerSection
          Fheading={headingOne}
          Sheading={lableOne}
          Flabel={headingTwo}
          Slabel={labelTwo}
        />
        <Wrapper className="pb-20 ">
          <div className=" pt-20 pb-16">
            <div className="lg:text-5xl text-4xl text-center text-aqua-color  font-bold ">
              What our candidates say
            </div>
          </div>
          <div className="grid grid-cols-1 text-center justify-center justify-items-center md:grid-cols-[1fr_1fr] gap-4  ">
            <div>
              <TestimonialCard
                text={descriptionOne}
                iconImg={IconOne}
                avatarImg={testimonialImageOne}
                name={nameOne}
              />
            </div>
            <div>
              <TestimonialCard
                text={descriptionTwo}
                iconImg={IconTwo}
                avatarImg={testimonialImageTwo}
                name={nameTwo}
              />
            </div>
          </div>
        </Wrapper>
        <BlackBannerLeafSection />
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const home = await client.getByUID("home", "home-id");
  return {
    props: {
      home,
    },
  };
}
