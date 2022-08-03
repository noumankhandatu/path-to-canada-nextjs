import React from "react";
type CountCircleProps = {
  count: number | string | any;
  className?: string | any;
};

const CountCircle = ({ count, className }: CountCircleProps) => {
  return (
    <div
      className={`p-5  h-14 text-center rounded-full flex items-center  ${className} bg-red-600 text-white text-2xl	font-bold`}
    >
      {count}
    </div>
  );
};

export default CountCircle;
