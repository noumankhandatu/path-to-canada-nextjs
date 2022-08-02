import React from "react";
import Font from "../Atoms/Font";
type TestimonialCardProps = {
  text?: string;
  iconImg?: string | any;
  avatarImg?: string | any;
  name: string;
};
const TestimonialCard = ({
  text,
  iconImg,
  avatarImg,
  name,
}: TestimonialCardProps) => {
  return (
    <div className="bg-TCard-color p-5 lg:lg:w-[500px] lg:h-[800px] ">
      <div className="md:pl-10 md:pr-10 pr-3 pl-3">
        <div className="text-center flex justify-items-center justify-center">
          <img src={iconImg} alt="" />
        </div>
        <Font className="pt-10 tracking-wider	pb-10	">{text}</Font>
        <div className="text-center flex justify-center  ">
          <img src={avatarImg} alt="" className="rounded-full grayscale " />
        </div>
        <Font className="pt-10 	pb-16	font-bold">
          <b>- {name}</b>
        </Font>
      </div>
    </div>
  );
};

export default TestimonialCard;
