import React from "react";
type FontProps = {
  children: React.ReactNode;
  className?: string | any;
};
const Font = ({ children, className }: FontProps) => {
  return (
    <div
      className={`${className} font-medium leading-8 tracking-tight text-base`}
    >
      {children}
    </div>
  );
};

export default Font;
