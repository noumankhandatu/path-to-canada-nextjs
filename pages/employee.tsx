import React from "react";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import Wrapper from "../scr/components/Organism/Wrapper";
import EmployeeCard from "../scr/components/Molecules/employeeCard";
import Input from "../scr/components/Atoms/input";
import Button from "../scr/components/Atoms/button";
import Font from "../scr/components/Atoms/Font";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";

const Employee = ({
  employee,
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
  const backgroundImage =
    employee.data.slices[1]?.items[0]?.backgroundImage.url;
  const title = employee.data.slices[1]?.items[0]?.title;
  const description = employee.data.slices[1]?.items[0]?.description;
  const imageOne = employee.data?.imageOne?.url;
  const titleOne = employee.data?.title;
  const descriptionOne = employee.data?.description;
  const linkOne = employee.data?.linkOne;
  const linkTwo = employee.data?.linkTwo;
  const linkThree = employee.data?.linkThree;
  const headingOne = employee.data?.headingOne;
  const headingTwo = employee.data?.headingTwo;
  const headingThree = employee.data?.headingThree;
  const paragraphOne = employee.data?.paragraphOne;
  const paragraphTwo = employee.data?.paragraphTwo;
  const paragraphThree = employee.data?.paragraphThree;
  const textOne = employee.data.slices[0]?.items[0]?.textOne;
  const textTwo = employee.data.slices[0]?.items[0]?.textTwo;
  const textThree = employee.data.slices[0]?.items[0]?.textThree;
  const textFour = employee.data.slices[0]?.items[0]?.textFour;
  const textFive = employee.data.slices[0]?.items[0]?.textFive;
  const textSix = employee.data.slices[0]?.items[0]?.textSix;
  const textSeven = employee.data.slices[0]?.items[0]?.textSeven;
  const textEight = employee.data.slices[0]?.items[0]?.textEight;
  const profileTextOne = employee.data.slices[0]?.items[0]?.profileTextOne;
  const profileTextTwo = employee.data.slices[0]?.items[0]?.profileTextTwo;
  const profileTextThree = employee.data.slices[0]?.items[0]?.profileTextThree;
  const profileTextFour = employee.data.slices[0]?.items[0]?.profileTextFour;
  const profileTextFive = employee.data.slices[0]?.items[0]?.profileTextFive;
  const profileTextSix = employee.data.slices[0]?.items[0]?.profileTextSix;
  const profileTextSeven = employee.data.slices[0]?.items[0]?.profileTextSeven;
  const profileTextEight = employee.data.slices[0]?.items[0]?.profileTextEight;
  const profileTextNine = employee.data.slices[0]?.items[0]?.profileTextNine;
  const backgroundImageOne =
    employee.data.slices[0]?.items[0]?.backgroundImage.url;
  const bannerTextOne = employee.data.bannerTextOne;
  const bannerTextTwo = employee.data.bannerTextThree;
  const bannerTextThree = employee.data.bannerTextTwo;
  const bannerBackgroundImage = employee.data.bannerBackgroundImage.url;
  const EmployeeCardArray = [
    {
      heading: headingOne,
      paragraph: paragraphOne,
      link: linkOne,
    },
    {
      heading: headingTwo,
      paragraph: paragraphTwo,
      link: linkTwo,
    },
    {
      heading: headingThree,
      paragraph: paragraphThree,
      link: linkThree,
    },
  ];
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading={title}
        paragraph={description}
        bgImage={backgroundImage}
        showFirstBtn={true}
      />
      <Wrapper className="bg-employee-Color pt-5 pb-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10  pt-20 ">
          <div>
            <img src={imageOne} alt="" />
          </div>
          <div>
            <div className="text-4xl font-bold  text-cyan-900">{titleOne}</div>
            <Font className="pt-5">{descriptionOne}</Font>
          </div>
        </div>
        <div className="pt-20 pb-20 grid lg:grid-cols-3  grid-cols-1 gap-5">
          {EmployeeCardArray.map((items: object) => {
            return <EmployeeCard items={items} />;
          })}
        </div>
      </Wrapper>
      <Wrapper className="bg-form-color">
        <div
          style={{
            backgroundImage: `url(${backgroundImageOne})`,
            backgroundSize: "40% 59%",
            backgroundPosition: "left 25% bottom -27%",
          }}
          className="pb-20 pt-20 bg-cover	 bg-no-repeat  "
        >
          <div className="grid lg:grid-cols-[0.7fr_1fr]  grid-cols-1 text-white gap-32">
            <div>
              <div className="lg:text-4xl text-3xl font-bold  ">{textOne}</div>
              <div className="text-2xl pt-10 font-bold  ">{textTwo}</div>
              <Font>
                <li className="list-disc  ">{textThree}</li>
                <li className="list-disc  ">{textFour}</li>
                <li className="list-disc  "> {textFive}</li>
              </Font>
              <div className="text-2xl pt-10 font-bold  text-white">
                {textSix}
              </div>
              <Font className="pt-4">{textSeven}</Font>
              <Font className=" pt-4">{textEight}</Font>
            </div>
            <div>
              <div className="text-center p-10 bg-red-600">
                <div className="lg:text-4xl text-3xl font-bold  text-white">
                  {profileTextOne}
                </div>
                <div className="pt-5">{profileTextTwo}</div>
              </div>
              <div className=" p-10 bg-white text-black">
                <div className="lg:text-5xl text-3xl font-bold  text-aqua-color">
                  {profileTextThree}
                </div>
                <Font className="pt-10 pb-10">{profileTextFour}</Font>
                <hr />
                <div className="pt-5">
                  <div className="text-base font-bold pb-10">
                    {profileTextFive}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-3 pb-5">
                    <Input
                      text={profileTextSix}
                      width={"w-full"}
                      toggle={true}
                    />
                    <Input
                      text={profileTextSeven}
                      width={"w-full"}
                      toggle={true}
                    />
                  </div>
                  <div className="pt-5">
                    <Input
                      text={profileTextEight}
                      width={"w-full"}
                      toggle={true}
                    />
                  </div>
                  <div className="pt-10 pb-5">
                    <Button text={profileTextNine} primary />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <div
        className="lg:pl-32 pl-5  pt-10"
        style={{ backgroundColor: "#F2EAE1" }}
      >
        <div className="pt-20 relative  grid lg:grid-cols-[0.7fr_1fr_1fr] grid-cols-1 gap-2">
          <div>
            <div className="lg:text-6xl text-3xl font-bold lg:tracking-wide text-cyan-900	">
              {bannerTextOne}
            </div>
          </div>
          <div>
            <div className="break-words tracking-wide text-lg font-bold pb-5">
              {bannerTextThree}
            </div>
            <Font className="pt-4">{bannerTextTwo}</Font>
          </div>
          <div>
            <img src={bannerBackgroundImage} alt="" />
          </div>
        </div>
      </div>
      <BlackBannerLeafSection />
    </div>
  );
};

export default Employee;

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const employee = await client.getByUID("employee", "id-employee");
  return {
    props: {
      employee,
    },
  };
}
