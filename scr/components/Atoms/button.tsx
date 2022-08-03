import React from "react";
/**
 * @dev returns the current window size
 * @props takes five props Primary and Secondary
 */

type ButtonProps = {
  text: string;
  className?: string | any;
  primary?: boolean;
  dark?: boolean;
  secondary?: boolean;
  teal?: boolean;
};
const Button = ({
  text,
  primary,
  dark,
  secondary,
  teal,
  className,
}: ButtonProps) => {
  let cssProps: string =
    "ease-in duration-300 cursor-pointer  flex  items-center justify-center font-bold  text-sm    hover:border-2 tracking-tighter hover:p-3 p-3 h-10   border-2 ";
  return (
    <div>
      {primary ? (
        <button
          className={`${className} ${cssProps} bg-red-600 hover:bg-white text-white  hover:text-red-600 border-red-600 `}
        >
          {text}
        </button>
      ) : null}
      {secondary ? (
        <button
          className={`${className}  ${cssProps} hover:bg-red-600 bg-white hover:text-white text-red-600 border-red-600 `}
        >
          {text}
        </button>
      ) : null}
      {dark ? (
        <button
          className={`${className} ${cssProps} hover:bg-red-600 bg-gray-700 hover:text-white   border-gray-600 hover:border-white`}
        >
          {text}
        </button>
      ) : null}
      {teal ? (
        <button
          className={`${className} ${cssProps} bg-teal-700 text-white border-teal-700`}
        >
          {text}
        </button>
      ) : null}
    </div>
  );
};

export default Button;

