import React from "react";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";
const ScrollTopButton = () => {
  return (
    <div>
      <a href="#">
        <ArrowCircleUpIcon
          className="w-10 h-10 z-10 cursor-pointer hover:bg-fuchsia-100 hover:rounded-full fixed bottom-10 right-10"
        />
      </a>
    </div>
  );
};

export default ScrollTopButton;
