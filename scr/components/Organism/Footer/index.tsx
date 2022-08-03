import React, { useState } from "react";
import Wrapper from "../Wrapper/index";
import Input from "../../Atoms/input";
import {
  AcademicCapIcon,
  AnnotationIcon,
  ArrowCircleRightIcon,
  ArrowNarrowDownIcon,
} from "@heroicons/react/solid";
import CheckBox from "../../Atoms/checkbox";
import Button from "../../Atoms/button";
import Font from "../../Atoms/Font";
import Prismic from "prismic-javascript";
import { Client } from "../../../../prismic-configuration";
const Footer = () => {
  const [toggleFn, setToggleFn] = useState<Boolean>(true);
  const [fetchData, setFetchData] = useState<
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
    | any
  >("");
  async function getServerSideProps() {
    const footer = await Client().query(
      Prismic.Predicates.at("document.type", "footer")
    );
    setFetchData(footer);
    return {
      props: {
        footer,
      },
    };
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }
  const lets = fetchData?.results?.map((items) => {
    return items?.data.lets;
  });
  const Connected = fetchData?.results?.map((items) => {
    return items?.data.Connected;
  });
  const Sign = fetchData?.results?.map((items) => {
    return items?.data.Sign;
  });
  const North = fetchData?.results?.map((items) => {
    return items?.data.North;
  });
  const industry = fetchData?.results?.map((items) => {
    return items?.data.industry;
  });
  const First = fetchData?.results?.map((items) => {
    return items?.data.First;
  });
  const Last = fetchData?.results?.map((items) => {
    return items?.data.Last;
  });
  const Email = fetchData?.results?.map((items) => {
    return items?.data.Email;
  });
  const CHOOSE = fetchData?.results?.map((items) => {
    return items?.data.CHOOSE;
  });
  const SUBSCRIBE = fetchData?.results?.map((items) => {
    return items?.data.SUBSCRIBE;
  });
  const CANADA = fetchData?.results?.map((items) => {
    return items?.data.CANADA;
  });
  return (
    <div>
      <Wrapper className="bg-footer-color pt-10 pb-10 text-white h-auto bg-[url('https://path2canada.ca/wp-content/uploads/2022/05/leaf.green_.footer.png')] bg-no-repeat bg-footer-img-position">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-20 pt-20">
          <div>
            <div className="lg:text-5xl text-4xl font-bold tracking-wider">
              {lets ? lets : `pending`}
            </div>
            <div className="lg:text-5xl text-4xl font-bold pb-5 tracking-wider">
              {Connected ? Connected : `pending`}
            </div>
            <Font>{Sign ? Sign : `pending`}</Font>
            <Font>{North ? North : `pending`}</Font>
            <Font>{industry ? industry : `pending`}</Font>
            <div className="flex item-center space-x-4 pt-5 pb-5">
              <AcademicCapIcon className="h-10 p-2 w-10 cursor-pointer rounded-full bg-white text-footer-color" />
              <AnnotationIcon className="h-10 p-2 w-10  cursor-pointer rounded-full bg-white text-footer-color" />
              <ArrowCircleRightIcon className="h-10 p-2 w-10 cursor-pointer rounded-full bg-white text-footer-color" />
              <ArrowNarrowDownIcon className="h-10 p-2 w-10 cursor-pointer rounded-full bg-white text-footer-color" />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-3 pb-5">
              <Input text={First ? First : `pending`} width={"w-full"} />
              <Input text={Last ? Last : `pending`} width={"w-full"} />
            </div>
            <Input text={Email ? Email : `pending`} width={"w-full"} />
            <div className="font-bold pb-5  pt-8">
              {CHOOSE ? CHOOSE : `pending`}
            </div>
            <CheckBox text="FOR EMPLOYEES" />
            <div className="pt-3 -pb-3"></div>
            <CheckBox text="FOR EMPLOYERS" />
            <div className="pt-10 pb-3">
              <Button text={SUBSCRIBE ? SUBSCRIBE : `pending`} primary={true} />
            </div>
          </div>
        </div>
        <Font className="text-center  pb-10">
          {CANADA ? CANADA : `pending`}
        </Font>
      </Wrapper>
    </div>
  );
};

export default Footer;
