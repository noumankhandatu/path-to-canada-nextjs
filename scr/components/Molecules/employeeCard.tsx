import React from "react";
import RedLableText from "../Atoms/redLableText";
import Font from "../Atoms/Font";
type EmployeeCard = {
  items: object | any;
};
const EmployeeCard = ({ items }: EmployeeCard) => {
  const { heading, paragraph, link } = items;
  return (
    <div className="bg-white  p-10 ">
      <div className="text-lg font-bold tracking-wider">{heading}</div>
      <Font className=" pt-5 pb-5 ">{paragraph}</Font>
      <RedLableText text={link} />
    </div>
  );
};

export default EmployeeCard;
