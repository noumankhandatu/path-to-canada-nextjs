import React from "react";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import Wrapper from "../scr/components/Organism/Wrapper";
import Button from "../scr/components/Atoms/button";
import Stepper from "../scr/components/Molecules/stepper";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import Input from "../scr/components/Atoms/input";
import Font from "../scr/components/Atoms/Font";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
const Employers = ({ employers }: any) => {
  const mapper = employers?.results?.map((items) => {
    return items?.data;
  });
  // home banner started
  const backgroundImage = mapper.map((data) => {
    return data.slices[1].items[0].backgroundImage.url;
  });
  const title = mapper.map((data) => {
    return data.slices[1].items[0].title;
  });
  const description = mapper.map((data) => {
    return data.slices[1].items[0].description;
  });
  // home banner ended
  const titleOne = mapper.map((data) => {
    return data.titleOne;
  });
  const desOne = mapper.map((data) => {
    return data.desOne;
  });
  const desTwo = mapper.map((data) => {
    return data.desTwo;
  });
  const iframes = mapper.map((data) => {
    return data.iframes;
  });

  const lableOne = mapper.map((data) => {
    return data.lableOne;
  });
  const lableTwo = mapper.map((data) => {
    return data.lableTwo;
  });
  const lableThree = mapper.map((data) => {
    return data.lableThree;
  });
  const btnText = mapper.map((data) => {
    return data.btnText;
  });

  const countOne = mapper.map((data) => {
    return data.countOne;
  });
  const countTwo = mapper.map((data) => {
    return data.countTwo;
  });
  const countThree = mapper.map((data) => {
    return data.countThree;
  });
  const countHeadingOne = mapper.map((data) => {
    return data.countHeadingOne;
  });
  const countHeadingTwo = mapper.map((data) => {
    return data.countHeadingTwo;
  });
  const countHeadingThree = mapper.map((data) => {
    return data.countHeadingThree;
  });
  const countDesOne = mapper.map((data) => {
    return data.countDesOne;
  });
  const countDesTwo = mapper.map((data) => {
    return data.countDesTwo;
  });
  const countDesThree = mapper.map((data) => {
    return data.countDesThree;
  });

  const textOne = mapper.map((data) => {
    return data.textOne;
  });
  const textTwo = mapper.map((data) => {
    return data.textTwo;
  });
  const textThree = mapper.map((data) => {
    return data.textThree;
  });

  const textFour = mapper.map((data) => {
    return data.textFour;
  });
  const textFive = mapper.map((data) => {
    return data.textFive;
  });
  const textSix = mapper.map((data) => {
    return data.textSix;
  });

  const headingOne = mapper.map((data) => {
    return data.headingOne;
  });
  const descriptionOne = mapper.map((data) => {
    return data.descriptionOne;
  });

  // Profile banner started

  const ProfiletextOne = mapper.map((data) => {
    return data.slices[0].items[0].textOne;
  });
  const ProfiletextTwo = mapper.map((data) => {
    return data.slices[0].items[0].textTwo;
  });
  const ProfiletextThree = mapper.map((data) => {
    return data.slices[0].items[0].textThree;
  });
  const ProfiletextFour = mapper.map((data) => {
    return data.slices[0].items[0].textFour;
  });
  const ProfiletextFive = mapper.map((data) => {
    return data.slices[0].items[0].textFive;
  });
  const ProfiletextSix = mapper.map((data) => {
    return data.slices[0].items[0].textSix;
  });
  const ProfiletextSeven = mapper.map((data) => {
    return data.slices[0].items[0].textSeven;
  });
  const ProfiletextEight = mapper.map((data) => {
    return data.slices[0].items[0].textEight;
  });

  const profileTextOne = mapper.map((data) => {
    return data.slices[0].items[0].profileTextOne;
  });
  const profileTextTwo = mapper.map((data) => {
    return data.slices[0].items[0].profileTextTwo;
  });

  const profileTextThree = mapper.map((data) => {
    return data.slices[0].items[0].profileTextThree;
  });
  const profileTextFour = mapper.map((data) => {
    return data.slices[0].items[0].profileTextFour;
  });
  const profileTextFive = mapper.map((data) => {
    return data.slices[0].items[0].profileTextFive;
  });
  const profileTextSix = mapper.map((data) => {
    return data.slices[0].items[0].profileTextSix;
  });
  const profileTextSeven = mapper.map((data) => {
    return data.slices[0].items[0].profileTextSeven;
  });
  const profileTextEight = mapper.map((data) => {
    return data.slices[0].items[0].profileTextEight;
  });
  // const profileTextNine = mapper.map((data) => {
  //   return data.slices[0].items[0].profileTextNine;
  // });

  // Profile banner ended
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading={title ? title : `pending`}
        paragraph={description ? description : `pending`}
        bgImage={backgroundImage ? backgroundImage : `pending`}
        showFirstBtn={true}
      />
      <Wrapper className="bg-employee-Color">
        <div className="grid lg:grid-cols-2  grid-cols-1 gap-10 pt-20 pb-20">
          <div>
            <div className="text-4xl font-bold text-aqua-color">
              {titleOne ? titleOne : `pending`}
            </div>
            <Font className="pt-10">{desOne ? desOne : `pending`}</Font>
            <Font className="pt-10">{desTwo ? desTwo : `pending`}</Font>
          </div>
          <div>
            <iframe
              width="100%"
              height="100%"
              src={iframes ? iframes : `pending`}
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="pt-20 pb-20 text-center">
          <div className="text-5xl font-bold text-aqua-color">
            {lableOne ? lableOne : `pending`}
          </div>
          <Font className="pt-5  pb-5">{lableTwo ? lableTwo : `pending`}</Font>
          <Font className="pt-3 pb-2">
            {lableThree ? lableThree : `pending`}
          </Font>
          <div className="flex justify-center pt-8">
            <Button text={btnText ? btnText : `pending`} primary />
          </div>
        </div>
      </Wrapper>
      {/* Canada  Secret  Section Starts*/}
      <Wrapper className="bg-aqua-color text-white pt-20 pb-20">
        <div className="text-center pb-20 pt-20">
          <div className="text-5xl font-bold pb-5">
            {textOne ? textOne : `pending`}
          </div>
          <Font>{textTwo ? textTwo : `pending`}</Font>
          <Font className="pt-4 text-3xl font-bold">
            {textThree ? textThree : `pending`}
          </Font>
          <Font className="pt-4 text-1xl font-bold">
            ({textFour ? textFour : `pending`})
          </Font>
        </div>
        <div className="flex flex-col  lg:flex-row justify-center items-center">
          <Stepper
            count={countOne ? countOne : `pending`}
            heading={countHeadingOne ? countHeadingOne : `pending`}
            paragraph={countDesOne ? countDesOne : `pending`}
          />
          <Stepper
            count={countTwo ? countTwo : `pending`}
            heading={countHeadingTwo ? countHeadingTwo : `pending`}
            paragraph={countDesTwo ? countDesTwo : `pending`}
          />
          <Stepper
            count={countThree ? countThree : `pending`}
            heading={countHeadingThree ? countHeadingThree : `pending`}
            paragraph={countDesThree ? countDesThree : `pending`}
          />
        </div>
        <div className="text-center pt-5 pb-5">
          <Font className="pt-10 pb-5">{textFive ? textFive : `pending`}.</Font>
          <div className="font-bold text-2xl pt-10">
            {textSix ? textSix : `pending`}
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="pt-20 pb-20">
          <div className="text-5xl text-center font-bold text-aqua-color">
            {headingOne ? headingOne : `pending`}
          </div>
          <Font className="pt-10 pb-10 text-center">
            {descriptionOne ? descriptionOne : `pending`}
          </Font>
        </div>
        {/* form */}
        <div className="pb-24 pt-10">
          <div className="grid lg:grid-cols-[1fr_1fr]  grid-cols-1">
            <div className="bg-light-blue-color p-10">
              <div className="lg:text-4xl text-3xl font-bold  text-red-600">
                {ProfiletextOne ? ProfiletextOne : `pending`}
              </div>
              <Font className="text-lg pb-6 pt-6 font-normal  ">
                {ProfiletextTwo ? ProfiletextTwo : `pending`}
              </Font>
              <Font>
                <li className="list-decimal pt-2">
                  {ProfiletextThree ? ProfiletextThree : `pending`}
                </li>
                <li className="list-decimal pt-2">
                  {ProfiletextFour ? ProfiletextFour : `pending`}
                </li>
                <li className="list-decimal pt-2">
                  {ProfiletextFive ? ProfiletextFive : `pending`}
                </li>
                <li className="list-decimal pt-2">
                  {ProfiletextSix ? ProfiletextSix : `pending`}
                </li>
                <li className="list-decimal pt-2">
                  {ProfiletextSeven ? ProfiletextSeven : `pending`}
                </li>
              </Font>
              <div className="text-2xl pt-10 font-bold  text-aqua-color">
                {ProfiletextEight ? ProfiletextEight : `pending`}
              </div>
            </div>
            {/* form below */}
            <div className="border border-black">
              <div className=" p-10 bg-white text-black">
                <div className="lg:text-5xl text-3xl font-bold  text-aqua-color">
                  {profileTextOne ? profileTextOne : `pending`}
                </div>
                <Font className="pt-10 pb-10">
                  {profileTextTwo ? profileTextTwo : `pending`}
                </Font>
                <hr />
                <div className="pt-5">
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-3 pb-4">
                    <Input
                      text={profileTextThree}
                      width={"w-full"}
                      toggle={true}
                    />
                    <Input text="Last Name" width={"w-full"} toggle={true} />
                  </div>
                  <div className="pb-4">
                    <Input
                      text={profileTextFour}
                      width={"w-full"}
                      toggle={true}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-3 pb-4">
                    <Input
                      text={profileTextFive}
                      width={"w-full"}
                      toggle={true}
                    />
                    <Input
                      text={profileTextSix}
                      width={"w-full"}
                      toggle={true}
                    />
                  </div>
                  <div className="">
                    <Input
                      text={profileTextSeven}
                      width={"w-full"}
                      toggle={true}
                    />
                  </div>
                  <div className="pt-10 pb-4 flex justify-center">
                    <Button
                      className="rounded"
                      text={profileTextEight}
                      primary
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <BlackBannerLeafSection />
    </div>
  );
};

export default Employers;
export async function getServerSideProps() {
  const employers = await Client().query(
    Prismic.Predicates.at("document.type", "employers")
  );
  return {
    props: {
      employers,
    },
  };
}
