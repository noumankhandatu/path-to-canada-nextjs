import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Wrapper from "../scr/components/Organism/Wrapper";
import RoadMapCards from "../scr/components/Molecules/RoadMapCards";
import RoadMapArray from "../scr/components/array/roadmaparray";
import TestimonialCard from "../scr/components/Molecules/testimonialCard";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import RedLableText from "../scr/components/Atoms/redLableText";
import Font from "../scr/components/Atoms/Font";
import RedBannerSection from "../scr/components/Organism/redBannerSection";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Path to Canada</title>
        <link
          rel="icon"
          href="https://codeminimalist.atlassian.net/jira/software/projects/COM/boards/3?selectedIssue=COM-5"
        />
        <script
          async
          defer
          src="https://static.cdn.prismic.io/prismic.js?new=true&repo=codeminimalist"
        ></script>
      </Head>
      <div className="pt-40">
        <HomePageFirstSection
          heading={`Solving the Canadian tech talent shortage.`}
          paragraph={
            "We are a marketplace that expertly matches highly experienced global talent with hiring Canadian companies. Relocating talent into Canada using a world-class immigration program is our specialty."
          }
          bgImage={`https://path2canada.ca/wp-content/uploads/2022/05/home_hero.svg`}
          showFirstBtn={true}
          showSecondBtn={true}
        />
        {/* Second Section Started  => */}
        <Wrapper className="bg-light-red">
          <div className="text-4xl text-center font-bold pt-20  pb-10  text-cyan-900">
            Path to Canada has a deep understanding
            <div className="breaks-words">
              of the current hiring challenges in the
            </div>
            <div className="breaks-words ">North American tech ecosystem.</div>
          </div>
          <Font className=" pt-10 pb-16 ">
            Utilizing Global Talent Stream, Path to Canada expertly connects
            only the most qualified H-1Bs and global tech talent with Canadian
            tech companies. Global Talent Stream is the best work visa program
            in the world, and it can help Canadian tech companies scale and
            recruit the best talent. It truly is Canada’s secret weapon — it is
            an unknown resource that can quickly provide immigration solutions
            for qualified tech workers.
          </Font>
          {/* grid =>  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 pb-20 gap-10">
            <div>
              <div className="text-red-600 text-xl	 font-bold tracking-wide	">
                TECH PROFESSIONALS
              </div>
              <div className=" text-2xl	font-bold  pb-10 pt-4 tracking-wide	">
                Facing immigration or permanent resident challenges in the US?
              </div>
              <img
                className="w-6/7"
                src="https://path2canada.ca/wp-content/uploads/2022/05/home_techProfessionals.svg"
                alt=""
              />
              <Font className="pt-10 pb-1 list-disc	">
                <li>
                  Have an H-1B work visa, or working in the US but are tired of
                  waiting for a US Green Card?
                </li>
              </Font>
              <Font className=" pb-1 list-disc	">
                <li>
                  Disillusioned with the US immigration system and looking for a
                  way to stay in North America?
                </li>
              </Font>
              <Font className=" pb-1 list-disc	">
                <li>
                  Already tried the US immigration option and have been forced
                  to exit and move back to your home country? Open to exploring
                  Canada as a permanent option for living and working?
                </li>
              </Font>
              <Font className=" pb-1 list-disc	">
                <li>
                  Open to exploring Canada as a permanent option for living and
                  working?
                </li>
              </Font>
              <Font>
                If any of the above applies to you, complete your profile today
                and let us match you with a Canadian Tech Company who is
                actively hiring for someone exactly like you.
              </Font>
              <div className="mt-10 mb-10">
                <RedLableText text="AM I A CANDIDATE?" />
              </div>
            </div>
            <div>
              <div className="text-red-600 text-xl  	font-bold tracking-wide	">
                CANADIAN EMPLOYERS
              </div>
              <div className="text-2xl pt-4  pb-10	font-bold tracking-wide	">
                Struggling to access and to hire extraordinary, quality talent?
              </div>
              <img
                className="w-6/7"
                src="https://path2canada.ca/wp-content/uploads/2022/05/home_employers.svg"
                alt=""
              />
              <Font className="pt-10 pb-10 ">
                Path to Canada has a Tech Talent Relocation Program that
                utilizes Canada’s Global Talent Stream, the best immigration
                program in the world, that was specifically created to support
                Canada’s tech sector.
              </Font>
              <Font>
                We match our candidates to your open roles and provide you with
                a curated, carefully vetted group of top-quality, significantly
                <Font>
                  experienced and educated US and global talent. These highly
                  skilled workers are ready to move to Canada to continue their
                  tech careers.
                </Font>
                <div className="mt-10 mb-10">
                  <RedLableText text=" HELP ME FIND A CANDIDATE" />
                </div>
              </Font>
            </div>
          </div>
        </Wrapper>
        {/* Road Map Start */}
        <Wrapper className="bg-road-map-color text-white">
          <div className=" pt-20 pb-52">
            <div className="lg:text-5xl text-3xl text-center   font-bold ">
              The Path to Canada Road Map
            </div>
            <Font className="text-center pt-16 pb-16">
              From the moment you submit your online profile to the day you walk
              into your new office and start working in Canada, your journey
              will take approximately 90 days. Compared to waiting decades to
              get a green card in the US, the Canada’s Global Talent Stream
              process is relatively quick. Path to Canada partners with clients
              and employees providing high-touch individualized service every
              step of the way.
            </Font>
            {RoadMapArray.map((items: any) => {
              return <RoadMapCards {...items} />;
            })}
          </div>
        </Wrapper>
        {/* red layer connecting section */}
        <RedBannerSection
          Fheading="Find my tech role in Canada"
          Sheading={`Help me build my life and career.`}
          Flabel="Find my tech role in Canada"
          Slabel="   Help me build my life and career."
        />
        {/* testimonals */}
        <Wrapper className="pb-20 ">
          <div className=" pt-20 pb-16">
            <div className="lg:text-5xl text-4xl text-center text-aqua-color  font-bold ">
              What our candidates say
            </div>
          </div>
          <div className="grid grid-cols-1 text-center md:grid-cols-[1fr_1fr] gap-4  ">
            <div>
              <TestimonialCard
                text="“Having to leave the US by December due to a denied H-1B was obviously a stressful situation. I was able to secure a Canadian work permit using Global Talent Stream quickly. I can now continue my tech career in Canada.”"
                iconImg={
                  "https://path2canada.ca/wp-content/uploads/2022/05/quotes-img.png"
                }
                avatarImg={
                  "https://path2canada.ca/wp-content/uploads/2022/05/Deepak-Bandi-150x150-1.jpeg"
                }
              />
            </div>
            <div>
              <TestimonialCard
                text="I am writing this testimonial to show my appreciation and gratitude towards the Path 2 Canada team who helped me immensely in getting Canadian work permit visa using Global talent stream. Got a prompt response for all the questions I had in the immigration process. They have a highly skilled expert team to provide end to end immigration services. "
                iconImg={
                  "https://path2canada.ca/wp-content/uploads/2022/05/quotes-img.png"
                }
                avatarImg={
                  "https://path2canada.ca/wp-content/uploads/2022/05/Gaurav-Saraswat-150x150-1.jpeg"
                }
              />
            </div>
          </div>
        </Wrapper>
        {/* black banner */}
        <BlackBannerLeafSection />
      </div>
    </div>
  );
};

export default Home;

// this function is called everytime a request/refresh is made
// export async function getServerSideProps() {
//   const home = await Client().query(
//     Prismic.Predicates.at("document.type", "home")
//   );
//   return {
//     props: {
//       home,
//     },
//   };
// }
