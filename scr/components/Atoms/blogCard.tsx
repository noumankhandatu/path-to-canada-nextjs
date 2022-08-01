import React, { useEffect } from "react";
import Font from "./Font";
import RedLableText from "./redLableText";
// import { fetchUserById } from "../../Redux/blogSlicer/index";
import Blog from "../../../pages/blog";

const BlogCard = ({ items }: object | any) => {
  console.log(items);

  const { image, title, price, description } = items;
  return (
    <div className="  flex flex-col cursor-pointer">
      <img className={"w-[300px] h-[200px]"} src={image} alt="" />
      <div className="text-xl text-aqua-color font-bold pb-2 pt-10">
        {title}
      </div>
      <small>{price} </small>
      <Font className="pt-2 pb-2">{description}</Font>
      <RedLableText text="READ MORE" />
    </div>
  );
};

export default BlogCard;
