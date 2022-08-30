import React from "react";
type SelectProps = {
  label: string;
};
const Select = ({ label }: SelectProps) => {
  return (
    <div>
      <select
        id="countries"
        className="form-control bg-white border border-white-300  cursor-pointer lg:w-full  p-2.5  text-black focus:outline-none"
      >
        <option>{label}</option>
        <option>tokyo</option>
        <option>china</option>
        <option>japan</option>
        <option>pakistan</option>
      </select>
    </div>
  );
};

export default Select;
