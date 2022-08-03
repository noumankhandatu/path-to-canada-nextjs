import React, { useEffect } from "react";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import BlogCard from "../scr/components/Atoms/blogCard";
import Wrapper from "../scr/components/Organism/Wrapper";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../scr/components/Atoms/spinner";
import Font from "../scr/components/Atoms/Font";
import { fetchUserById } from "../Redux/blogSlicer/index";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
const Blog = ({ blog }: any) => {
  const mapper = blog?.results?.map((items) => {
    return items.data?.slices;
  });
  // home banner
  const headingOne = mapper?.map((data) => {
    return data[0]?.items[0]?.title;
  });
  const description = mapper?.map((data) => {
    return data[0]?.items[0]?.description;
  });
  const backgroundImage = mapper?.map((data) => {
    return data[0]?.items[0]?.backgroundImage.url;
  });
  // home banner end

  const dispatch = useDispatch();
  const state: any = useSelector((state: any) => state.BlogSlicer.data);
  useEffect(() => {
    dispatch(fetchUserById());
  }, []);
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading={headingOne ? headingOne : `pending`}
        bgImage={backgroundImage ? backgroundImage : `pending`}
        paragraph={description ? description : `pending`}
      />
      <Wrapper>
        <div className="pt-10 pb-20">
          <div>
            {state && state.length > 1 ? (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {state.map((items: object) => {
                  return <BlogCard items={items} />;
                })}
              </div>
            ) : (
              <div className="text-center">
                <Spinner />
                <Font>Please Wait</Font>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
      <BlackBannerLeafSection />
    </div>
  );
};

export default Blog;
export async function getServerSideProps() {
  const blog = await Client().query(
    Prismic.Predicates.at("document.type", "blog")
  );
  return {
    props: {
      blog,
    },
  };
}
