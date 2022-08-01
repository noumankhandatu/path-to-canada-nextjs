import React from "react";
interface CheckBoxProps {
  text: string;
}
const CheckBox = ({ text }: CheckBoxProps) => {
  return (
    <div className="flex items-center align-center space-x-5">
      <input type="radio" />
      <label htmlFor="">{text}</label>
    </div>
  );
};

export default CheckBox;
