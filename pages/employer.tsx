import React from "react";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import Wrapper from "../scr/components/Organism/Wrapper";
import Button from "../scr/components/Atoms/button";
import Stepper from "../scr/components/Molecules/stepper";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import Input from "../scr/components/Atoms/input";
import Font from "../scr/components/Atoms/Font";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
const Employers = ({
  employers,
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
  const backgroundImage = employers.data.slices[1].items[0].backgroundImage.url;
  const title = employers.data.slices[1].items[0].title;
  const description = employers.data.slices[1].items[0].description;
  const titleOne = employers.data.titleOne;
  const desOne = employers.data.desOne;
  const desTwo = employers.data.desTwo;
  const iframes = employers.data.iframes;
  const lableOne = employers.data.lableOne;
  const lableTwo = employers.data.lableTwo;
  const lableThree = employers.data.lableThree;
  const btnText = employers.data.btnText;
  const countOne = employers.data.countOne;
  const countTwo = employers.data.countTwo;
  const countThree = employers.data.countThree;
  const countHeadingOne = employers.data.countHeadingOne;
  const countHeadingTwo = employers.data.countHeadingTwo;
  const countHeadingThree = employers.data.countHeadingThree;
  const countDesOne = employers.data.countDesOne;
  const countDesTwo = employers.data.countDesTwo;
  const countDesThree = employers.data.countDesThree;
  const textOne = employers.data.textOne;
  const textTwo = employers.data.textTwo;
  const textThree = employers.data.textThree;
  const textFour = employers.data.textFour;
  const textFive = employers.data.textFive;
  const textSix = employers.data.textSix;
  const headingOne = employers.data.headingOne;
  const descriptionOne = employers.data.descriptionOne;
  const ProfiletextOne = employers.data.slices[0].items[0].textOne;
  const ProfiletextTwo = employers.data.slices[0].items[0].textTwo;
  const ProfiletextThree = employers.data.slices[0].items[0].textThree;
  const ProfiletextFour = employers.data.slices[0].items[0].textFour;
  const ProfiletextFive = employers.data.slices[0].items[0].textFive;
  const ProfiletextSix = employers.data.slices[0].items[0].textSix;
  const ProfiletextSeven = employers.data.slices[0].items[0].textSeven;
  const ProfiletextEight = employers.data.slices[0].items[0].textEight;
  const profileTextOne = employers.data.slices[0].items[0].profileTextOne;
  const profileTextTwo = employers.data.slices[0].items[0].profileTextTwo;
  const profileTextThree = employers.data.slices[0].items[0].profileTextThree;
  const profileTextFour = employers.data.slices[0].items[0].profileTextFour;
  const profileTextFive = employers.data.slices[0].items[0].profileTextFive;
  const profileTextSix = employers.data.slices[0].items[0].profileTextSix;
  const profileTextSeven = employers.data.slices[0].items[0].profileTextSeven;
  const profileTextEight = employers.data.slices[0].items[0].profileTextEight;
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading={title}
        paragraph={description}
        bgImage={backgroundImage}
        showFirstBtn={true}
      />
      <Wrapper className="bg-employee-Color">
        <div className="grid lg:grid-cols-2  grid-cols-1 gap-10 pt-20 pb-20">
          <div>
            <div className="text-4xl font-bold text-aqua-color">{titleOne}</div>
            <Font className="pt-10">{desOne}</Font>
            <Font className="pt-10">{desTwo}</Font>
          </div>
          <div>
            <iframe
              width="100%"
              height="100%"
              src={iframes}
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="pt-20 pb-20 text-center">
          <div className="text-5xl font-bold text-aqua-color">{lableOne}</div>
          <Font className="pt-5  pb-5">{lableTwo}</Font>
          <Font className="pt-3 pb-2">{lableThree}</Font>
          <div className="flex justify-center pt-8">
            <Button text={btnText} primary />
          </div>
        </div>
      </Wrapper>
      {/* Canada  Secret  Section Starts*/}
      <Wrapper className="bg-aqua-color text-white pt-20 pb-20">
        <div className="text-center pb-20 pt-20">
          <div className="text-5xl font-bold pb-5">{textOne}</div>
          <Font>{textTwo}</Font>
          <Font className="pt-4 text-3xl font-bold">{textThree}</Font>
          <Font className="pt-4 text-1xl font-bold">({textFour})</Font>
        </div>
        <div className="flex flex-col  lg:flex-row justify-center items-center">
          <Stepper
            count={countOne}
            heading={countHeadingOne}
            paragraph={countDesOne}
          />
          <Stepper
            count={countTwo}
            heading={countHeadingTwo}
            paragraph={countDesTwo}
          />
          <Stepper
            count={countThree}
            heading={countHeadingThree}
            paragraph={countDesThree}
          />
        </div>
        <div className="text-center pt-5 pb-5">
          <Font className="pt-10 pb-5">{textFive}.</Font>
          <div className="font-bold text-2xl pt-10">{textSix}</div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="pt-20 pb-20">
          <div className="text-5xl text-center font-bold text-aqua-color">
            {headingOne}
          </div>
          <Font className="pt-10 pb-10 text-center">{descriptionOne}</Font>
        </div>
        {/* form */}
        <div className="pb-24 pt-10">
          <div className="grid lg:grid-cols-[1fr_1fr]  grid-cols-1">
            <div className="bg-light-blue-color p-10">
              <div className="lg:text-4xl text-3xl font-bold  text-red-600">
                {ProfiletextOne}
              </div>
              <Font className="text-lg pb-6 pt-6 font-normal  ">
                {ProfiletextTwo}
              </Font>
              <Font>
                <li className="list-decimal pt-2">{ProfiletextThree}</li>
                <li className="list-decimal pt-2">{ProfiletextFour}</li>
                <li className="list-decimal pt-2">{ProfiletextFive}</li>
                <li className="list-decimal pt-2">{ProfiletextSix}</li>
                <li className="list-decimal pt-2">{ProfiletextSeven}</li>
              </Font>
              <div className="text-2xl pt-10 font-bold  text-aqua-color">
                {ProfiletextEight}
              </div>
            </div>
            {/* form below */}
            <div className="border border-black">
              <div className=" p-10 bg-white text-black">
                <div className="lg:text-5xl text-3xl font-bold  text-aqua-color">
                  {profileTextOne}
                </div>
                <Font className="pt-10 pb-10">{profileTextTwo}</Font>
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
export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const employers = await client.getByUID("employers", "id-employers");
  return {
    props: {
      employers,
    },
  };
}
