import React from "react";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import Wrapper from "../scr/components/Organism/Wrapper";
import Button from "../scr/components/Atoms/button";
import Stepper from "../scr/components/Molecules/stepper";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import Input from "../scr/components/Atoms/input";
import Font from "../scr/components/Atoms/Font";
const Employers = () => {
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading="Is your company looking for senior tech talent?"
        paragraph="Gain exclusive access to a vetted pool of quality tech candidates that are expertly matched to your open roles. Let’s work together."
        bgImage={
          "https://path2canada.ca/wp-content/uploads/2022/05/employers_hero.svg"
        }
        showFirstBtn={true}
      />
      <Wrapper className="bg-employee-Color">
        <div className="grid lg:grid-cols-2  grid-cols-1 gap-10 pt-20 pb-20">
          <div>
            <div className="text-4xl font-bold text-aqua-color">
              Struggling to hire quality tech talent in Canada?
            </div>
            <Font className="pt-10">
              Path to Canada has played a huge role in recruiting and hiring top
              talent to meet the needs of growing technology companies in
              Canada. Companies like yours all over the country are experiencing
              unprecedented growth, and unfortunately, a corresponding tech
              shortage.
            </Font>
            <Font className="pt-10">
              Did you know that Canada has a secret weapon to acquire tech
              talent – Global Talent Stream, the best work visa program in the
              world? We can help you use this program to acquire highly-skilled
              tech talent from around the world and the US and bring them to
              Canada permanently in less than 90 days.
            </Font>
          </div>
          <div>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lcGgjS6U3vA"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="pt-20 pb-20 text-center">
          <p className="text-5xl font-bold text-aqua-color">What We Do?</p>
          <Font className="pt-5  pb-5">
            Path to Canada is solving the Canadian tech talent shortage. We have
            a vetted pool of international tech talent (75% US H-1B visa holders
            and 25% global) that are eager to permanently move to Canada. You
            interview, decide who to hire, and then sponsor their Canadian work
            visa (via Global Talent Stream). Relocating tech talent into Canada
            using a world-class immigration program is our specialty.
          </Font>
          <Font className=" pb-3">
            Our personal, individualized high-touch service will not only save
            you time and effort, but we put our years of experience to work for
            you, finding you quality candidates that will help grow your company
            and so you can compete on the North American tech stage.
          </Font>
          <Font className="pt-3 pb-2">
            Our team partners with you to understand your specific talent
            requirements. In the following stages, we carefully vet experienced
            and educated US and global talent and present you with only the
            strongest candidates suited to your job.
          </Font>
          <Font className="pt-3">
            Access our hands-on, full-service model for the same fee as a
            typical recruitment agency.
          </Font>
          <Font className="">
            No upfront fees — you only pay once we find you your perfect
            employee.
          </Font>
          <div className="flex justify-center pt-8">
            <Button text={"LETS CONNECT"} primary />
          </div>
        </div>
      </Wrapper>
      {/* Canada  Secret  Section Starts*/}
      <Wrapper className="bg-aqua-color text-white pt-20 pb-20">
        <div className="text-center pb-20 pt-20">
          <p className="text-5xl font-bold pb-5">Canada’s Secret Weapon</p>
          <Font>
            Global Talent Stream (GTS), Canada’s best-in-the-world immigration
            program, was created to specifically support the growth and
            scalability of the Canada’s tech market. GTS allows us to
            efficiently and quickly relocate the most outstanding, sought-after
            candidates to fulfill your open roles right here in Canada.
          </Font>
          <Font className="pt-4 text-3xl font-bold">Timeline​</Font>
          <Font className="pt-4 text-1xl font-bold">(8-10 Weeks)</Font>
        </div>
        <div className="flex flex-col  lg:flex-row justify-center items-center">
          <Stepper count={1} heading="Application Prep" paragraph="2 Weeks" />
          <Stepper count={2} heading="Labor Market" paragraph="5 Weeks" />
          <Stepper
            count={3}
            heading="Work Visa Application"
            paragraph="4-6 Weeks"
          />
        </div>
        <div className="text-center pt-5 pb-5">
          <Font className="pt-10 pb-5">
            Two-year work visa (renewable) which includes an open work visa for
            spouse.
          </Font>
          <p className="font-bold text-2xl pt-10">
            Canada’s more flexible work visa and immigration systems, including
            the Global Talent Stream provide opportunities for foreign workers
            to move to Canada and live the “Canadian Dream”.
          </p>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="pt-20 pb-20">
          <p className="text-5xl text-center font-bold text-aqua-color">
            Fill your open roles quickly with highly experienced talent.
          </p>
          <Font className="pt-10 pb-10 text-center">
            <Font className="">
              Combine Canada’s work class immigration program with our vetted
              pool of international tech talent
            </Font>
            (75% H-1B U.S. visa holders and 25% global) that are eager and ready
            to move to Canada and you have an extraordinary opportunity
            <Font className="">to capitalize on.</Font>
          </Font>
        </div>
        {/* form */}
        <div className="pb-24 pt-10">
          <div className="grid lg:grid-cols-[1fr_1fr]  grid-cols-1">
            <div className="bg-light-blue-color p-10">
              <p className="lg:text-4xl text-3xl font-bold  text-red-600">
                Five Simple Steps
              </p>
              <Font className="text-lg pb-6 pt-6 font-normal  ">
                Extend your talent acquisition strategy to include Global and
                U.S. talent. In 10 – 14 weeks, your open roles could be filled
                with an outstanding highly talented employee.
              </Font>
              <Font>
                <li className="list-decimal pt-2">
                  Enter into a Service Agreement with Path to Canada
                </li>
                <li className="list-decimal pt-2">
                  Intake call with the Path to Canada recruitment team to gather
                  information on your company and the perfect candidate
                </li>
                <li className="list-decimal pt-2">
                  Vetted candidates are submitted – you interview and hire
                  workers that are the right fit for your role and company
                </li>
                <li className="list-decimal pt-2">Work Visa process begins</li>
                <li className="list-decimal pt-2">
                  Worker moves to Canada and joins your team! Exclusive access
                  to a new source of technical talent to help you build your
                  engineering team in Canada
                </li>
              </Font>
              <p className="text-2xl pt-10 font-bold  text-aqua-color">
                Exclusive access to a new source of technical talent to help you
                build your team in Canada
              </p>
            </div>
            {/* form below */}
            <div className="border border-black">
              <div className=" p-10 bg-white text-black">
                <p className="lg:text-5xl text-3xl font-bold  text-aqua-color">
                  Book a Consultation
                </p>
                <Font className="pt-10 pb-10">
                  Got questions? Want to find out more? Let’s talk about how our
                  services can provide you access to a new pool of high-caliber
                  talent.
                </Font>
                <hr />
                <div className="pt-5">
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-3 pb-4">
                    <Input text="First Name" width={"w-full"} toggle={true} />
                    <Input text="Last Name" width={"w-full"} toggle={true} />
                  </div>
                  <div className="pb-4">
                    <Input text="Company Name" width={"w-full"} toggle={true} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-3 pb-4">
                    <Input text="Job Title" width={"w-full"} toggle={true} />
                    <Input text="Email  " width={"w-full"} toggle={true} />
                  </div>
                  <div className="">
                    <Input text="Comment" width={"w-full"} toggle={true} />
                  </div>
                  <div className="pt-10 pb-4 flex justify-center">
                    <Button className="rounded" text="NEXT" primary />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <BlackBannerLeafSection />
    </div>
  );
};

export default Employers;
