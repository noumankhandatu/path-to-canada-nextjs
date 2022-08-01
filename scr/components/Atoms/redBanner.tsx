import React from "react";
type RedBannerProps = {
  text: string;
};
const RedBanner = ({ text }: RedBannerProps) => {
  return (
    <div className="bg-red-600 pt-5 pb-10 text-white pr-10 pl-5 text-center">
      <p className="text-3xl  font-bold ">{text}</p>
    </div>
  );
};

export default RedBanner;
