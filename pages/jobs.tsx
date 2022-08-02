import React from "react";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import Wrapper from "../scr/components/Organism/Wrapper";
import Stepper from "../scr/components/Molecules/stepper";
import Button from "../scr/components/Atoms/button";
import Select from "../scr/components/Atoms/select";
import { BsFillBagCheckFill, BsSearch } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { RiCalendarTodoFill } from "react-icons/ri";
import Font from "../scr/components/Atoms/Font";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
const Jobs = ({ jobs }: any) => {
  const mapper = jobs?.results?.map((items) => {
    return items?.data;
  });

  const values = ["hello", "world"];
  const headingStepper = mapper?.map((items) => {
    return items.headingStepper;
  });
  const stepperFirstCount = mapper?.map((items) => {
    return items.stepperFirstCount;
  });
  const stepperFirstTitle = mapper?.map((items) => {
    return items.stepperFirstTitle;
  });
  const stepperFirstDes = mapper?.map((items) => {
    return items.stepperFirstDes;
  });
  const stepperSecondTitle = mapper?.map((items) => {
    return items.stepperSecondTitle;
  });
  const stepperSecondCount = mapper?.map((items) => {
    return items.stepperSecondCount;
  });
  const stepperSecondDes = mapper?.map((items) => {
    return items.stepperSecondDes;
  });
  const stepperThirdTitle = mapper?.map((items) => {
    return items.stepperThirdTitle;
  });
  const stepperThirdCount = mapper?.map((items) => {
    return items.stepperThirdCount;
  });
  const stepperThirdDes = mapper?.map((items) => {
    return items.stepperThirdDes;
  });
  const stepperFourthTitle = mapper?.map((items) => {
    return items.stepperFourthTitle;
  });
  const stepperForuthCount = mapper?.map((items) => {
    return items.stepperForuthCount;
  });
  const stepperFourthDes = mapper?.map((items) => {
    return items.stepperFourthDes;
  });
  const StepperArray = [
    {
      count: stepperFirstCount ? stepperFirstCount : `pending`,
      heading: stepperFirstTitle ? stepperFirstTitle : `pending`,
      paragraph: stepperFirstDes ? stepperFirstDes : `pending`,
    },
    {
      count: stepperSecondCount ? stepperSecondCount : `pending`,
      heading: stepperSecondTitle ? stepperSecondTitle : `pending`,
      paragraph: stepperSecondDes ? stepperSecondDes : `pending`,
    },
    {
      count: stepperThirdCount ? stepperThirdCount : `pending`,
      heading: stepperThirdTitle ? stepperThirdTitle : `pending`,
      paragraph: stepperThirdDes ? stepperThirdDes : `pending`,
    },
    {
      count: stepperForuthCount ? stepperForuthCount : `pending`,
      heading: stepperFourthTitle ? stepperFourthTitle : `pending`,
      paragraph: stepperFourthDes ? stepperFourthDes : `pending`,
    },
  ];
  // home banner slice
  const bTitle = mapper?.map((items) => {
    return items.slices[0].items[0].title;
  });
  const bDescription = mapper?.map((items) => {
    return items.slices[0].items[0].description;
  });
  const backgroundImage = mapper?.map((items) => {
    return items.slices[0].items[0].backgroundImage.url;
  });
  // home banner slice end

  const officeImage = mapper?.map((items) => {
    return items.officeImage.url;
  });
  const teamlead = mapper?.map((items) => {
    return items.teamlead;
  });
  const btnApply = mapper?.map((items) => {
    return items.btnApply;
  });
  const FullTime = mapper?.map((items) => {
    return items.FullTime;
  });
  const location = mapper?.map((items) => {
    return items.location;
  });
  const date = mapper?.map((items) => {
    return items.date;
  });
  const descriptions = mapper?.map((items) => {
    return items.descriptions;
  });
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading={bTitle ? bTitle : `pending`}
        paragraph={bDescription ? bDescription : `pending`}
        bgImage={backgroundImage ? backgroundImage : `pending`}
        showFirstBtn={true}
      />
      <Wrapper className="bg-aqua-color pt-20 pb-20 text-white text-center">
        <div className="text-5xl font-bold">
          {headingStepper ? headingStepper : `pending`}
        </div>
        <div className="flex flex-col  lg:flex-row justify-center items-center lg:items-start pt-20">
          {StepperArray.map((items: any) => {
            const { count, paragraph, heading } = items;
            return (
              <Stepper count={count} heading={heading} paragraph={paragraph} />
            );
          })}
        </div>
        <div className="flex justify-center">
          <Button text={"AM I A CANDIDATE?"} primary />
        </div>
      </Wrapper>
      <Wrapper className="bg-white pt-20 pb-20">
        <div className="bg-accordion-color  grid lg:grid-cols-4 grid-cols-1 gap-10 p-10">
          <Select label={"Job Type"} values={values} />
          <Select label={"Location"} values={values} />
          <div className="bg-teal-700 flex items-center justify-center">
            <BsSearch className="text-white w-5 h-8 lg:h-5 " />
          </div>
        </div>
        <div className="mt-10 p-5 border border-gray-300 flex justify-between">
          <div className="flex ">
            <img
              className="w-20"
              src={officeImage ? officeImage : `pending`}
              alt=""
            />
            <Font className="ml-6 mt-2">{teamlead ? teamlead : `pending`}</Font>
          </div>
          <div>
            <Button text={btnApply ? btnApply : `pending`} teal />
          </div>
        </div>
        <div className="p-5 border border-gray-300">
          <div className="bg-accordion-color  grid lg:grid-cols-4 grid-cols-1 gap-10 lg:p-10 pl-6">
            <div className="flex items-center">
              <BsFillBagCheckFill />
              <Font className="ml-2">{FullTime ? FullTime : `pending`}</Font>
            </div>
            <div className="flex items-center">
              <IoLocation />
              <Font className="ml-2">{location ? location : `pending`}</Font>
            </div>
            <div className="flex items-center">
              <RiCalendarTodoFill />
              <Font className="ml-2">{date ? date : `pending`}</Font>
            </div>
          </div>
          <Font>{descriptions ? descriptions : `pending`}</Font>
        </div>
      </Wrapper>
      <BlackBannerLeafSection />
    </div>
  );
};

export default Jobs;
export async function getServerSideProps() {
  const jobs = await Client().query(
    Prismic.Predicates.at("document.type", "jobs")
  );
  return {
    props: {
      jobs,
    },
  };
}
