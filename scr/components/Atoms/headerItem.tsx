import React from "react";
import Link from "next/link";
type HeaderItemProps = {
  text: string;
  id: number;
};
const HeaderItem = ({ text, id }: HeaderItemProps) => {
  const style: string =
    "text-1xl cursor-pointer hover:text-red-600 ease-in duration-300 font-bold tracking-wider";
  let teleport: string = "";
  if (id === 0) {
    teleport = "employee";
  }
  if (id === 1) teleport = "employer";
  if (id === 2) teleport = "jobs";
  if (id === 3) teleport = "faqs";
  if (id === 4) teleport = "blog";
  if (id === 5) teleport = "aboutus";

  return (
    <Link href={`${teleport}`}>
      <div className={`${style}`}> {text}</div>
    </Link>
  );
};

export default HeaderItem;
