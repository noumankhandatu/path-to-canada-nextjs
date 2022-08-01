import React from "react";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import Wrapper from "../scr/components/Organism/Wrapper";
import Font from "../scr/components/Atoms/Font";
import Banner from "../scr/components/Atoms/redBanner";
import Accordion from "../scr/components/Molecules/accordion";
import AccordionArray from "../scr/components/array/accordionArray";
const FAQ = () => {
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading="Let’s answer some of those top-of-mind questions"
        paragraph="Gain access to some of the best talent in the world. Candidates are waiting to meet you."
        bgImage={
          "https://path2canada.ca/wp-content/uploads/2022/05/faqs_hero.svg"
        }
      />
      <Wrapper className="bg-aqua-color text-white">
        <div className="pt-20 pb-20 text-center">
          <p className="text-4xl font-bold">Help me find a candidate</p>
          <p className="font-bold pt-10 pb-2">
            How do I get experienced tech talent for my Canadian company?
          </p>
          <Font className="pt-4 pb-4">
            Is this a different pool of talent than what I can currently access?
            What does it cost? Why should I use your services? What is the
            Global Talent Stream program? Are these candidates ready to relocate
            to Canada? How long does this process take? Will it be a lot of work
            for me?
          </Font>
          <Font className="pt-4 pb-4">
            We fully understand that expanding your hiring strategies to include
            the possibility of hiring global tech talent comes with many burning
            questions. We are here to help. Below we’ve covered off some of the
            most frequent questions that our clients and candidates pose.
          </Font>
          <Font>
            Every client has a unique situation and specific requirements for
            the tech roles that they are actively trying to fill. Our team is
            ready to gain understanding of your unique needs and to answer all
            the questions you may have as you explore your options.
          </Font>
        </div>
      </Wrapper>
      <Wrapper className="pt-32 pb-20">
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-10">
          <Banner text="EMPLOYER FAQ" />
          <Banner text="EMPLOYER FAQ" />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 gap-cols-20 mt-10">
          {AccordionArray.map((items: {}) => {
            return <Accordion items={items} />;
          })}
        </div>
      </Wrapper>
      <BlackBannerLeafSection />
    </div>
  );
};

export default FAQ;
