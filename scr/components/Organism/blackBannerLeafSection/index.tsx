import React from "react";
import Wrapper from "../Wrapper/index";

const BlackBannerLeafSection = () => {
  return (
    <div>
      <Wrapper className="bg-black pt-7 pb-7 z-10">
        <div className="grid grid-cols-1 text-center md:grid-cols-[1fr_0.2fr_1fr] items-center	  gap-4 md:gap-20 ">
          <div className="border-t-8 border-hrBanner-color  "></div>
          <div className="flex justify-center ">
            <img
              className="w-16"
              src="https://path2canada.ca/wp-content/uploads/2022/05/pathToCanada_favicon.png"
              alt=""
            />
          </div>
          <div className="border-t-8 border-hrBanner-color  "></div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlackBannerLeafSection;
