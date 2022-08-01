import React from "react";
import CountCircle from "./countCircle";
const Line = ({ ...items }) => {
  const { countOne, countTwo } = items;
  return (
    <div className="hidden sm:block md:block">
      <div className="bg-red-50 w-1 h-52  flex justify-center  ">
        <CountCircle className="mt-32" count={countOne} />
      </div>
      <div className="bg-red-50 w-1 h-96  flex justify-center  ">
        <CountCircle count={countTwo} className="mt-40" />
      </div>
    </div>
  );
};

export default Line;
