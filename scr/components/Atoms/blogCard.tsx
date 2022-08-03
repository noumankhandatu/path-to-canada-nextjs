import React from "react";
import Font from "./Font";
import RedLableText from "./redLableText";

const BlogCard = ({ items }: object | any) => {
  const { image, title, date, description } = items;
  return (
    <div className="  flex flex-col cursor-pointer">
      <img className={"w-[300px] h-[200px]"} src={image} alt="" />
      <div className="text-xl text-aqua-color font-bold pb-2 pt-10">
        {title}
      </div>
      <small>{date} </small>
      <Font className="pt-2 pb-2">{description}</Font>
      <RedLableText text="READ MORE" />
    </div>
  );
};

export default BlogCard;
