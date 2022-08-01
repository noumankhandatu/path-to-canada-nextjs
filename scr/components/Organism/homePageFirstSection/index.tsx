import React from "react";
import Button from "../../Atoms/button";
type HomePageFirstSectionProps = {
  heading?: string;
  paragraph?: string;
  showFirstBtn?: boolean;
  showSecondBtn?: boolean;
  bgImage?: string | any;
};
const HomePageFirstSection = ({
  heading,
  paragraph,
  showFirstBtn,
  showSecondBtn,
  bgImage,
}: HomePageFirstSectionProps) => {
  return (
    <div>
      <div
        style={{
          backgroundSize: "80% 70%",
          height: "80vh",
          backgroundPosition: "right -61% bottom -16%",
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-5 pl-5 pr-10 md:pl-20 md:pr-20 md:w-1/2">
          <p className="lg:text-6xl text-4xl font-bold md:tracking-wide text-cyan-900	">
            {heading}
          </p>
          <p className="pt-10">{paragraph}</p>
          <div className="mt-10 md:flex ">
            {showFirstBtn ? <Button text="AM I CANDIDATE ?" primary /> : null}
            <div className="mr-4 mt-10 "></div>
            {showSecondBtn ? (
              <Button text="HELP ME FIND A CANDIDATE ?" secondary />
            ) : null}
          </div>
        </div>
      </div>
      <div className="h-12 bg-red-600"></div>
    </div>
  );
};

export default HomePageFirstSection;
