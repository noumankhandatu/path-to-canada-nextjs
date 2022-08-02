import React, { useState } from "react";
import Wrapper from "../Wrapper/index";
import Prismic from "prismic-javascript";
import { Client } from "../../../../prismic-configuration";
const BlackBannerLeafSection = () => {
  const [toggleFn, setToggleFn] = useState<Boolean>(true);
  const [fetchData, setFetchData] = useState<any>("");
  async function getServerSideProps() {
    const home = await Client().query(
      Prismic.Predicates.at("document.type", "home")
    );
    setFetchData(home);
    return {
      props: {
        home,
      },
    };
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }
  const mapper = fetchData?.results?.map((items) => {
    return items?.data?.ImageLeaf?.url;
  });
  return (
    <div>
      <Wrapper className="bg-black pt-7 pb-7 z-10">
        <div className="grid grid-cols-1 text-center md:grid-cols-[1fr_0.2fr_1fr] items-center	  gap-4 md:gap-20 ">
          <div className="border-t-8 border-hrBanner-color  "></div>
          <div className="flex justify-center ">
            <img className="w-16" src={mapper ? mapper : `pending`} alt="" />
          </div>
          <div className="border-t-8 border-hrBanner-color  "></div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlackBannerLeafSection;
