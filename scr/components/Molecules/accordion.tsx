import React, { useRef, useEffect } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

type AccordionProps = {
  items: object | any;
};
const Accordion = ({ items }: AccordionProps) => {
  const { label, paragraph } = items;
  const ref = useRef<HTMLDivElement>(null!);
  const toggle = useRef<HTMLDivElement>(null!);
  const handleToggle = () => {
    const grey = "#F4F4F4";
    const white = "white";
    if (ref.current && ref.current.style.background != white) {
      ref.current.style.background = white;
      toggle.current.style.display = "block";
    } else if (ref.current && ref.current.style.background === "white") {
      ref.current.style.background = grey;
      toggle.current.style.display = "none";
    }
  };
  useEffect(() => {
    ref.current.style.background = "#F4F4F4";
    toggle.current.style.display = "none";
  }, []);
  return (
    <div
      ref={ref}
      className="p-3  ease-in-out duration-1000 cursor-pointer cord border"
      onClick={handleToggle}
    >
      <div className="flex justify-between ">
        <small>{label}</small>
        <IoIosArrowDropdown className="w-5 h-5  text-gray-300" />
      </div>
      <div ref={toggle} className="ease-in-out duration-1000  ">
        <small className="pt-6 ">{paragraph}</small>
      </div>
    </div>
  );
};

export default Accordion;
