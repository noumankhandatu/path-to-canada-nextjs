import React from "react";
import CountCircle from "../Atoms/countCircle";
import Font from "../Atoms/Font";
type StepperProps = {
  count: number;
  heading?: string;
  paragraph?: string;
};
const Stepper = ({ count, heading, paragraph }: StepperProps) => {
  return (
    <div className=" pt-5 pb-5 w-full text-center">
      <div className="relative">
        <div
          className="bg-white"
          style={{ height: "2px", width: "100%" }}
        ></div>
        <CountCircle
          className="absolute -top-6 lg:left-[185px] md:left-96 left-32"
          count={count}
        />
      </div>
      <Font className="pt-20 pb-5 text-xl font-bold">{heading}</Font>
      <Font className="font-bold">{paragraph}</Font>
    </div>
  );
};

export default Stepper;
