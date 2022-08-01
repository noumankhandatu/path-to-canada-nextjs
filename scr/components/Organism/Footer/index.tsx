import React from "react";
import Wrapper from "../Wrapper/index";
import ScrollTopButton from "../../Molecules/scrollTopButton";
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
const Footer = () => {
  return (
    <div>
      <Wrapper className="bg-footer-color pt-10 pb-10 text-white h-auto bg-[url('https://path2canada.ca/wp-content/uploads/2022/05/leaf.green_.footer.png')] bg-no-repeat bg-footer-img-position">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-20 pt-20">
          <div>
            <div className="lg:text-5xl text-4xl font-bold tracking-wider">
              Let’s stay
            </div>
            <div className="lg:text-5xl text-4xl font-bold pb-5 tracking-wider">
              Connected
            </div>
            <Font>
              Sign up for our email newsletter to keep up-to-date on the
            </Font>
            <Font>
              North American Tech Sector. We will share insights, stats and key
            </Font>
            <Font>industry information.</Font>
            <div className="flex item-center space-x-4 pt-5 pb-5">
              <AcademicCapIcon className="h-10 p-2 w-10 cursor-pointer rounded-full bg-white text-footer-color" />
              <AnnotationIcon className="h-10 p-2 w-10  cursor-pointer rounded-full bg-white text-footer-color" />
              <ArrowCircleRightIcon className="h-10 p-2 w-10 cursor-pointer rounded-full bg-white text-footer-color" />
              <ArrowNarrowDownIcon className="h-10 p-2 w-10 cursor-pointer rounded-full bg-white text-footer-color" />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-3 pb-5">
              <Input text={"First Name"} width={"w-full"} />
              <Input text={"Last Name"} width={"w-full"} />
            </div>
            <Input text={"Last Name"} width={"w-full"} />
            <div className="font-bold pb-5  pt-8">
              CHOOSE YOUR SUBSCRIPTION*
            </div>
            <CheckBox text="FOR EMPLOYEES" />
            <div className="pt-3 -pb-3"></div>
            <CheckBox text="FOR EMPLOYERS" />
            <div className="pt-10 pb-3">
              <Button text={"SUBSCRIBE"} primary={true} />
            </div>
          </div>
        </div>
        <Font className="text-center  pb-10">
          © 2022 PATH TO CANADA. ALL RIGHTS RESERVED. | PRIVACY NOTICE
        </Font>
      </Wrapper>
    </div>
  );
};

export default Footer;
