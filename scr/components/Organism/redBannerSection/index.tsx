import React from "react";
import Wrapper from "../Wrapper/index";
import Button from "../../Atoms/button";
import Font from "../../Atoms/Font";
import Avatar from "../../Atoms/avatar";
import AvatarArray from "../../array/avatarArray";
interface RedBannerProps {
  Fheading?: string;
  Sheading?: string;
  Flabel?: string;
  Slabel?: string;
}
const RedBannerSection = ({
  Fheading,
  Sheading,
  Flabel,
  Slabel,
}: RedBannerProps) => {
  return (
    <div>
      <Wrapper className="bg-red-bgColor text-white pb-20">
        <div className=" pt-16 pb-16">
          <p className="lg:text-4xl text-3xl text-center   font-bold ">
            We connect talent to hiring Canadian tech companies
            <p className="break-words">Let’s work together.</p>
          </p>
        </div>
        <div className="grid grid-cols-1 text-center md:grid-cols-[1fr_0.1fr_1fr] ">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">{Fheading}</p>
            <Font className="font-bold pt-5 pb-10">{Sheading}</Font>
            <Button text="Complete My Profile " dark />
          </div>
          <div className="w-hr h-22 bg-white"></div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">{Flabel}</p>
            <Font className="font-bold pt-5 pb-10">{Slabel}</Font>
            <Button text="Book a consultation" dark />
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="pt-20 pb-20 grid lg:grid-cols-2 grid-col-1 gap-10">
          <div>
            <p className="text-4xl text-aqua-color font-bold">
              Picking up your life and moving to a new country is HARD
            </p>
            <p className="text-2xl pb-10 pt-10 text-aqua-color font-bold">
              This is My Story
            </p>
            <Font>
              I am the son of an immigrant. I have great respect for people who
              leave their home country to seek a better life. I was born in the
              US and am a US citizen, but I have lived in Canada twice: once for
              graduate school to get an MBA at the University of Western Ontario
              (Ivey School of Business) and then to work for a few years in
              Toronto. I currently live in Larchmont, NY.
            </Font>
            <Font className="pt-4 pb-4">
              I’ve spent over 20 years building VC-backed startups in San
              Francisco, Silicon Valley, New York and Toronto in sales and
              business development roles. I also spent a year in Toronto in
              venture capital. In 2014, I founded Syndesus. Syndesus works with
              US VC backed startups and high growth tech companies to build
              engineering teams in Canada. As a PEO (Professional Employer of
              Record) we are able to legally handle HR/payroll/remote employment
              for workers in Canada. We are also focused in assisting in talent
              retention by providing a relatively easy solution for H1-B tech
              workers to relocate to Canada and work for their same employer.
              Path to Canada is the second cross border company I have founded.
            </Font>
            <p className="text-2xl pb-1 pt-1 text-aqua-color font-bold">
              Why I started Path to Canada
            </p>
            <Font className="pt-4 pb-4">
              Speaking from experience, I know that moving to a new country is a
              huge decision. Some of you making this move have no choice, as you
              cannot stay in the US any longer due to work visa or immigration
              issues. I also know that some of you have an H-1B but are
              considering moving to Canada because the wait for permanent
              residency is so long and you want a more permanent existence.
            </Font>
            <Font>
              Path to Canada is about the journey to a new life in a new
              country. It starts with qualifying for immigration, but, equally
              important, it includes getting a job with a Canadian tech company
              that will sponsor your work visa. And it also includes the journey
              to establishing life in a new country. We will provide guidance on
              every step of the process.
            </Font>
          </div>
          <div className="text-center">
            <img
              width={"100%"}
              src="https://path2canada.ca/wp-content/uploads/2022/05/Marc-Pavlopoulos-CEO-Founder.jpg"
              alt=""
            />
            <Font className="pt-10">Marc Pavlopoulos</Font>
            <Font className="pt-2">Founder and CEO</Font>
          </div>
        </div>
      </Wrapper>
      <Wrapper className="bg-TCard-color">
        <div className="grid lg:grid-cols-3  grid-cols-1 pt-20 pb-20 gap-10">
          {AvatarArray.map((items: object) => {
            return <Avatar items={items} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default RedBannerSection;
