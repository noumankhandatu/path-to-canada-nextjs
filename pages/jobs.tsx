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
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
const Jobs = ({
  jobs,
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
  const items = jobs.data;
  const headingStepper = items.headingStepper;
  const stepperFirstCount = items.stepperFirstCount;
  const stepperFirstTitle = items.stepperFirstTitle;
  const stepperFirstDes = items.stepperFirstDes;
  const stepperSecondTitle = items.stepperSecondTitle;
  const stepperSecondCount = items.stepperSecondCount;
  const stepperSecondDes = items.stepperSecondDes;
  const stepperThirdTitle = items.stepperThirdTitle;
  const stepperThirdCount = items.stepperThirdCount;
  const stepperThirdDes = items.stepperThirdDes;
  const stepperFourthTitle = items.stepperFourthTitle;
  const stepperForuthCount = items.stepperForuthCount;
  const stepperFourthDes = items.stepperFourthDes;
  const bTitle = items.slices[0].items[0].title;
  const bDescription = items.slices[0].items[0].description;
  const backgroundImage = items.slices[0].items[0].backgroundImage.url;
  const officeImage = items.officeImage.url;
  const teamlead = items.teamlead;
  const btnApply = items.btnApply;
  const FullTime = items.FullTime;
  const location = items.location;
  const date = items.date;
  const descriptions = items.descriptions;
  const StepperArray = [
    {
      count: stepperFirstCount,
      heading: stepperFirstTitle,
      paragraph: stepperFirstDes,
    },
    {
      count: stepperSecondCount,
      heading: stepperSecondTitle,
      paragraph: stepperSecondDes,
    },
    {
      count: stepperThirdCount,
      heading: stepperThirdTitle,
      paragraph: stepperThirdDes,
    },
    {
      count: stepperForuthCount,
      heading: stepperFourthTitle,
      paragraph: stepperFourthDes,
    },
  ];
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading={bTitle}
        paragraph={bDescription}
        bgImage={backgroundImage}
        showFirstBtn={true}
      />
      <Wrapper className="bg-aqua-color pt-20 pb-20 text-white text-center">
        <div className="text-5xl font-bold">{headingStepper}</div>
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
          <div>
            <div>
              <Select label={"Job Type"} />
            </div>
            <div>
              <Select label={"Location"} />
            </div>
          </div>
          <div className="bg-teal-700 flex items-center justify-center">
            <BsSearch className="text-white w-5 h-8 lg:h-5 " />
          </div>
        </div>
        <div className="mt-10 p-5 border border-gray-300 flex justify-between">
          <div className="flex ">
            <img className="w-20" src={officeImage} alt="" />
            <Font className="ml-6 mt-2">{teamlead}</Font>
          </div>
          <div>
            <Button text={btnApply} teal />
          </div>
        </div>
        <div className="p-5 border border-gray-300">
          <div className="bg-accordion-color  grid lg:grid-cols-4 grid-cols-1 gap-10 lg:p-10 pl-6">
            <div className="flex items-center">
              <BsFillBagCheckFill />
              <Font className="ml-2">{FullTime}</Font>
            </div>
            <div className="flex items-center">
              <IoLocation />
              <Font className="ml-2">{location}</Font>
            </div>
            <div className="flex items-center">
              <RiCalendarTodoFill />
              <Font className="ml-2">{date}</Font>
            </div>
          </div>
          <Font>{descriptions}</Font>
        </div>
      </Wrapper>
      <BlackBannerLeafSection />
    </div>
  );
};

export default Jobs;

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const jobs = await client.getByUID("jobs", "id-jobs");
  return {
    props: {
      jobs,
    },
  };
}
