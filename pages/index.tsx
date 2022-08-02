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
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
const Home: NextPage = ({ home }: any) => {
  const mapper = home?.results?.map((items) => {
    return items?.data;
  });
  // home banner slice
  const bTitle = mapper?.map((items) => {
    return items.slices[2].items[0].title;
  });
  const bDescription = mapper?.map((items) => {
    return items.slices[2].items[0].description;
  });
  const backgroundImage = mapper?.map((items) => {
    return items.slices[2].items[0].backgroundImage.url;
  });
  // home banner slice end

  // TechInfo banner
  const headingOne = mapper?.map((items) => {
    return items.slices[1].items[0].headingOne;
  });
  const lableOne = mapper?.map((items) => {
    return items.slices[1].items[0].lableOne;
  });
  const headingTwo = mapper?.map((items) => {
    return items.slices[1].items[0].headingTwo;
  });
  const labelTwo = mapper?.map((items) => {
    return items.slices[1].items[0].labelTwo;
  });
  // TechInfo banner end
  const title = mapper[0].title;
  const description = mapper[0].description;
  const textOne = mapper[0].textOne;
  const textTwo = mapper[0].textTwo;
  const textThree = mapper[0].textThree;
  const textFour = mapper[0].textFour;
  const one = mapper[0].one;
  const two = mapper[0].two;
  const three = mapper[0].three;
  const four = mapper[0].four;
  const five = mapper[0].five;
  const six = mapper[0].six;
  const roadTextOne = mapper[0].roadTextOne;
  const roadTextTwo = mapper[0].roadTextTwo;
  const roadTextThree = mapper[0].roadTextThree;
  const roadTextFour = mapper[0].roadTextFour;
  const roadTextFive = mapper[0].roadTextFive;
  const roadTextSix = mapper[0].roadTextSix;
  const roadImageOne = mapper[0].roadImageOne.url;
  const roadImageTwo = mapper[0].roadImageTwo.url;
  const roadImageThree = mapper[0].roadImageThree.url;
  const roadImageFour = mapper[0].roadImageFour.url;
  const roadImageFive = mapper[0].roadImageFive.url;
  const roadImageSix = mapper[0].roadImageSix.url;
  const RoadMapArray = [
    {
      firstImg: roadImageOne ? roadImageOne : `pending`,
      secondImg: roadImageTwo ? roadImageTwo : `pending`,
      countOne: one ? one : `pending`,
      countTwo: two ? two : `pending`,
      textOne: roadTextOne ? roadTextOne : `pending`,
      textTwo: roadTextFour ? roadTextFour : `pending`,
    },
    {
      firstImg: roadImageThree ? roadImageThree : `pending`,
      secondImg: roadImageFour ? roadImageFour : `pending`,
      countOne: three ? three : `pending`,
      countTwo: four ? four : `pending`,
      textOne: roadTextTwo ? roadTextTwo : `pending`,
      textTwo: roadTextFive ? roadTextFive : `pending`,
    },
    {
      firstImg: roadImageFive ? roadImageFive : `pending`,
      secondImg: roadImageSix ? roadImageSix : `pending`,
      countOne: five ? five : `pending`,
      countTwo: six ? six : `pending`,
      textOne: roadTextThree ? roadTextThree : `pending`,
      textTwo: roadTextSix ? roadTextSix : `pending`,
    },
  ];
  const imageOne = mapper[0].imageOne.url;
  const imageTwo = mapper[0].imageTwo.url;
  const liOne = mapper[0].liOne;
  const liTwo = mapper[0].liTwo;
  const liThree = mapper[0].liThree;
  const liFour = mapper[0].liFour;
  const liFive = mapper[0].liFive;
  const liSix = mapper[0].liSix;
  const liSeven = mapper[0].liSeven;
  const colorTextOne = mapper[0].colorTextOne;
  const colorTextTwo = mapper[0].colorTextTwo;
  const roadMapTitle = mapper[0].roadMapTitle;
  const roadMapDescription = mapper[0].roadMapDescription;
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
      <div className="pt-40">
        <HomePageFirstSection
          heading={`${bTitle ? bTitle : `pending`}`}
          paragraph={bDescription ? bDescription : `pending`}
          bgImage={`${backgroundImage}`}
          showFirstBtn={true}
          showSecondBtn={true}
        />
        {/* Second Section Started  => */}
        <Wrapper className="bg-light-red">
          <div className="text-4xl text-center font-bold pt-20  pb-10  text-cyan-900">
            {title ? title : `pending`}
          </div>
          <Font className=" pt-10 pb-16 ">
            {description ? description : `pending`}
          </Font>
          {/* grid =>  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 pb-20 gap-10">
            <div>
              <div className="text-red-600 text-xl	 font-bold tracking-wide	">
                {textOne ? textOne : `pending`}
              </div>
              <div className=" text-2xl	font-bold  pb-10 pt-4 tracking-wide	">
                {textThree ? textThree : `pending`}
              </div>
              <img
                className="w-6/7"
                src={imageOne ? imageOne : `pending`}
                alt=""
              />
              <Font className="pt-10 pb-1 list-disc	">
                <li>{liOne ? liOne : `pending`}</li>
              </Font>
              <Font className=" pb-1 list-disc	">
                <li>{liTwo ? liTwo : `pending`}</li>
              </Font>
              <Font className=" pb-1 list-disc	">
                <li>{liThree ? liThree : `pending`}</li>
              </Font>
              <Font className=" pb-1 list-disc	">
                <li>{liFour ? liFour : `pending`}</li>
              </Font>
              <Font>{liFive ? liFive : `pending`}</Font>
              <div className="mt-10 mb-10">
                <RedLableText text={colorTextOne ? colorTextOne : `pending`} />
              </div>
            </div>
            <div>
              <div className="text-red-600 text-xl  	font-bold tracking-wide	">
                {textTwo ? textTwo : `pending`}
              </div>
              <div className="text-2xl pt-4  pb-10	font-bold tracking-wide	">
                {textFour ? textFour : `pending`}
              </div>
              <img
                className="w-6/7"
                src={imageTwo ? imageTwo : `pending`}
                alt=""
              />
              <Font className="pt-10 pb-10  leading-loose">
                {liSix ? liSix : `pending`}
              </Font>
              <Font>
                {liSeven ? liSeven : `pending`}
                <div className="mt-10 mb-10">
                  <RedLableText
                    text={colorTextTwo ? colorTextTwo : `pending`}
                  />
                </div>
              </Font>
            </div>
          </div>
        </Wrapper>
        {/* Road Map Start */}
        <Wrapper className="bg-road-map-color text-white">
          <div className=" pt-20 pb-52">
            <div className="lg:text-5xl text-3xl text-center   font-bold ">
              {roadMapTitle ? roadMapTitle : `pending`}
            </div>
            <Font className="text-center pt-16 pb-16">
              {roadMapDescription ? roadMapDescription : `pending`}
            </Font>
            {RoadMapArray.map((items: any) => {
              return <RoadMapCards {...items} />;
            })}
          </div>
        </Wrapper>
        {/* red layer connecting section */}
        <RedBannerSection
          Fheading={headingOne ? headingOne : `pending`}
          Sheading={lableOne ? lableOne : `pending`}
          Flabel={headingTwo ? headingTwo : `pending`}
          Slabel={labelTwo ? labelTwo : `pending`}
        />
        {/* testimonals */}
        <Wrapper className="pb-20 ">
          <div className=" pt-20 pb-16">
            <div className="lg:text-5xl text-4xl text-center text-aqua-color  font-bold ">
              What our candidates say
            </div>
          </div>
          <div className="grid grid-cols-1 text-center md:grid-cols-[1fr_1fr] gap-4  ">
            <div>
              <TestimonialCard
                text="“Having to leave the US by December due to a denied H-1B was obviously a stressful situation. I was able to secure a Canadian work permit using Global Talent Stream quickly. I can now continue my tech career in Canada.”"
                iconImg={
                  "https://path2canada.ca/wp-content/uploads/2022/05/quotes-img.png"
                }
                avatarImg={
                  "https://path2canada.ca/wp-content/uploads/2022/05/Deepak-Bandi-150x150-1.jpeg"
                }
              />
            </div>
            <div>
              <TestimonialCard
                text="I am writing this testimonial to show my appreciation and gratitude towards the Path 2 Canada team who helped me immensely in getting Canadian work permit visa using Global talent stream. Got a prompt response for all the questions I had in the immigration process. They have a highly skilled expert team to provide end to end immigration services. "
                iconImg={
                  "https://path2canada.ca/wp-content/uploads/2022/05/quotes-img.png"
                }
                avatarImg={
                  "https://path2canada.ca/wp-content/uploads/2022/05/Gaurav-Saraswat-150x150-1.jpeg"
                }
              />
            </div>
          </div>
        </Wrapper>
        {/* black banner */}
        <BlackBannerLeafSection />
      </div>
    </div>
  );
};

export default Home;

// this function is called everytime a request/refresh is made
export async function getServerSideProps() {
  const home = await Client().query(
    Prismic.Predicates.at("document.type", "home")
  );
  return {
    props: {
      home,
    },
  };
}
