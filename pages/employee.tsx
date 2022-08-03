import React from "react";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import Wrapper from "../scr/components/Organism/Wrapper";
import EmployeeCard from "../scr/components/Molecules/employeeCard";
import Input from "../scr/components/Atoms/input";
import Button from "../scr/components/Atoms/button";
import Font from "../scr/components/Atoms/Font";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
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
  const mapper = employee?.results?.map((items) => {
    return items?.data;
  });
  // home banner started
  const backgroundImage = mapper.map((data) => {
    return data.slices[1]?.items[0]?.backgroundImage.url;
  });
  const title = mapper.map((data) => {
    return data.slices[1]?.items[0]?.title;
  });
  const description = mapper.map((data) => {
    return data.slices[1]?.items[0]?.description;
  });
  // home banner ended
  // employe started
  const imageOne = mapper?.map((data) => {
    return data?.imageOne?.url;
  });
  const titleOne = mapper?.map((data) => {
    return data?.title;
  });
  const descriptionOne = mapper?.map((data) => {
    return data?.description;
  });

  const linkOne = mapper?.map((data) => {
    return data?.linkOne;
  });
  const linkTwo = mapper?.map((data) => {
    return data?.linkTwo;
  });
  const linkThree = mapper?.map((data) => {
    return data?.linkThree;
  });
  const headingOne = mapper?.map((data) => {
    return data?.headingOne;
  });
  const headingTwo = mapper?.map((data) => {
    return data?.headingTwo;
  });
  const headingThree = mapper?.map((data) => {
    return data?.headingThree;
  });
  const paragraphOne = mapper?.map((data) => {
    return data?.paragraphOne;
  });
  const paragraphTwo = mapper?.map((data) => {
    return data?.paragraphTwo;
  });
  const paragraphThree = mapper?.map((data) => {
    return data?.paragraphThree;
  });

  const EmployeeCardArray = [
    {
      heading: headingOne ? headingOne : `pending`,
      paragraph: paragraphOne ? paragraphOne : `pending`,
      link: linkOne ? linkOne : `pending`,
    },
    {
      heading: headingTwo ? headingTwo : `pending`,
      paragraph: paragraphTwo ? paragraphTwo : `pending`,
      link: linkTwo ? linkTwo : `pending`,
    },
    {
      heading: headingThree ? headingThree : `pending`,
      paragraph: paragraphThree ? paragraphThree : `pending`,
      link: linkThree ? linkThree : `pending`,
    },
  ];
  const textOne = mapper.map((data) => {
    return data.slices[0]?.items[0]?.textOne;
  });
  const textTwo = mapper.map((data) => {
    return data.slices[0]?.items[0]?.textTwo;
  });
  const textThree = mapper.map((data) => {
    return data.slices[0]?.items[0]?.textThree;
  });
  const textFour = mapper.map((data) => {
    return data.slices[0]?.items[0]?.textFour;
  });
  const textFive = mapper.map((data) => {
    return data.slices[0]?.items[0]?.textFive;
  });
  const textSix = mapper.map((data) => {
    return data.slices[0]?.items[0]?.textSix;
  });
  const textSeven = mapper.map((data) => {
    return data.slices[0]?.items[0]?.textSeven;
  });
  const textEight = mapper.map((data) => {
    return data.slices[0]?.items[0]?.textEight;
  });

  const profileTextOne = mapper.map((data) => {
    return data.slices[0]?.items[0]?.profileTextOne;
  });
  const profileTextTwo = mapper.map((data) => {
    return data.slices[0]?.items[0]?.profileTextTwo;
  });
  const profileTextThree = mapper.map((data) => {
    return data.slices[0]?.items[0]?.profileTextThree;
  });
  const profileTextFour = mapper.map((data) => {
    return data.slices[0]?.items[0]?.profileTextFour;
  });
  const profileTextFive = mapper.map((data) => {
    return data.slices[0]?.items[0]?.profileTextFive;
  });
  const profileTextSix = mapper.map((data) => {
    return data.slices[0]?.items[0]?.profileTextSix;
  });
  const profileTextSeven = mapper.map((data) => {
    return data.slices[0]?.items[0]?.profileTextSeven;
  });
  const profileTextEight = mapper.map((data) => {
    return data.slices[0]?.items[0]?.profileTextEight;
  });
  const profileTextNine = mapper.map((data) => {
    return data.slices[0]?.items[0]?.profileTextNine;
  });
  const backgroundImageOne = mapper.map((data) => {
    return data.slices[0]?.items[0]?.backgroundImage.url;
  });

  const bannerTextOne = mapper.map((data) => {
    return data.bannerTextOne;
  });
  const bannerTextTwo = mapper.map((data) => {
    return data.bannerTextThree;
  });
  const bannerTextThree = mapper.map((data) => {
    return data.bannerTextTwo;
  });
  const bannerBackgroundImage = mapper.map((data) => {
    return data.bannerBackgroundImage.url;
  });
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading={title ? title : `pending`}
        paragraph={description ? description : `pending`}
        bgImage={backgroundImage ? backgroundImage : `pending`}
        showFirstBtn={true}
      />
      <Wrapper className="bg-employee-Color pt-5 pb-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10  pt-20 ">
          <div>
            <img src={imageOne ? imageOne : `pending`} alt="" />
          </div>
          <div>
            <div className="text-4xl font-bold  text-cyan-900">
              {titleOne ? titleOne : `pending`}
            </div>
            <Font className="pt-5">
              {descriptionOne ? descriptionOne : `pending`}
            </Font>
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
            backgroundImage: `url(${
              backgroundImageOne ? backgroundImageOne : null
            })`,
            backgroundSize: "40% 59%",
            backgroundPosition: "left 25% bottom -27%",
          }}
          className="pb-20 pt-20 bg-cover	 bg-no-repeat  "
        >
          <div className="grid lg:grid-cols-[0.7fr_1fr]  grid-cols-1 text-white gap-32">
            <div>
              <div className="lg:text-4xl text-3xl font-bold  ">
                {textOne ? textOne : `pending`}
              </div>
              <div className="text-2xl pt-10 font-bold  ">
                {textTwo ? textTwo : `pending`}
              </div>
              <Font>
                <li className="list-disc  ">
                  {textThree ? textThree : `pending`}
                </li>
                <li className="list-disc  ">
                  {textFour ? textFour : `pending`}
                </li>
                <li className="list-disc  "> {textFive}</li>
              </Font>
              <div className="text-2xl pt-10 font-bold  text-white">
                {textSix ? textSix : `pending`}
              </div>
              <Font className="pt-4">{textSeven ? textSeven : `pending`}</Font>
              <Font className=" pt-4">{textEight ? textEight : `pending`}</Font>
            </div>
            {/* form below */}
            <div>
              <div className="text-center p-10 bg-red-600">
                <div className="lg:text-4xl text-3xl font-bold  text-white">
                  {profileTextOne ? profileTextOne : `pending`}
                </div>
                <div className="pt-5">
                  {profileTextTwo ? profileTextTwo : `pending`}
                </div>
              </div>
              <div className=" p-10 bg-white text-black">
                <div className="lg:text-5xl text-3xl font-bold  text-aqua-color">
                  {profileTextThree ? profileTextThree : `pending`}
                </div>
                <Font className="pt-10 pb-10">
                  {profileTextFour ? profileTextFour : `pending`}
                </Font>
                <hr />
                <div className="pt-5">
                  <div className="text-base font-bold pb-10">
                    {profileTextFive ? profileTextFive : `pending`}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-3 pb-5">
                    <Input
                      text={profileTextSix ? profileTextSix : `pending`}
                      width={"w-full"}
                      toggle={true}
                    />
                    <Input
                      text={profileTextSeven ? profileTextSeven : `pending`}
                      width={"w-full"}
                      toggle={true}
                    />
                  </div>
                  <div className="pt-5">
                    <Input
                      text={profileTextEight ? profileTextEight : `pending`}
                      width={"w-full"}
                      toggle={true}
                    />
                  </div>
                  <div className="pt-10 pb-5">
                    <Button
                      text={profileTextNine ? profileTextNine : `pending`}
                      primary
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      {/* guy with coffee section below */}
      <div
        className="lg:pl-32 pl-5  pt-10"
        style={{ backgroundColor: "#F2EAE1" }}
      >
        <div className="pt-20 relative  grid lg:grid-cols-[0.7fr_1fr_1fr]  grid-cols-1 gap-2">
          <div>
            <div className="lg:text-6xl text-3xl font-bold lg:tracking-wide text-cyan-900	">
              {bannerTextOne ? bannerTextOne : `pending`}
            </div>
          </div>
          <div>
            <div className="break-words tracking-wide text-lg	 font-bold pb-5">
              {bannerTextThree ? bannerTextThree : `pending`}
            </div>
            <Font className="pt-4 ">
              {bannerTextTwo ? bannerTextTwo : `pending`}
            </Font>
          </div>
          <div>
            <img
              src={bannerBackgroundImage ? bannerBackgroundImage : `pending`}
              alt=""
            />
          </div>
        </div>
      </div>
      <BlackBannerLeafSection />
    </div>
  );
};

export default Employee;
export async function getServerSideProps() {
  const employee = await Client().query(
    Prismic.Predicates.at("document.type", "employee")
  );
  return {
    props: {
      employee,
    },
  };
}
