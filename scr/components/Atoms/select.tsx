import React from "react";
import Font from "./Font";
type SelectProps = {
  label: string;
  values: string[] | object | any;
};
const Select = ({ label, values }: SelectProps) => {
  return (
    <div>
      <select
        id="countries"
        className="bg-white border border-white-300  cursor-pointer lg:w-full  p-2.5  text-black focus:outline-none"
      >
        <option selected>
          <Font>{label}</Font>
        </option>
        {values.map((items: any) => {
          console.log(items);
          return (
            <option>
              <Font> {items}</Font>
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
