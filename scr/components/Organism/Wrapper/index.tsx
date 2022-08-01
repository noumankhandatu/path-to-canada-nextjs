import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={`pl-5 pr-5 sm:pl-20 sm:pr-20  md:pl-30 md:pr-30    lg:pl-52 lg:pr-52  ${className}`}
    >
      <div>{children}</div>
    </div>
  );
};

export default Wrapper;
