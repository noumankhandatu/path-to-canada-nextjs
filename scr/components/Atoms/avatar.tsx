import React from "react";
import Font from "./Font";
interface AvatarProps {
  items: object | any;
}
const Avatar = ({ items }: AvatarProps) => {
  const { img, label, name } = items;
  return (
    <div className="flex flex-col text-center items-center justify-center">
      <img className="rounded-full grayscale" src={img} alt="Avatars" />
      <div className="text-2xl font-semibold pt-4 pb-4 text-aqua-color">
        {name}
      </div>
      <Font>{label}</Font>
    </div>
  );
};

export default Avatar;
