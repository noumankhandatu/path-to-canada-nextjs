import React, { useEffect } from "react";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import BlogCard from "../scr/components/Atoms/blogCard";
import Wrapper from "../scr/components/Organism/Wrapper";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../scr/components/Atoms/spinner";
import Font from "../scr/components/Atoms/Font";
import { fetchUserById } from "../Redux/blogSlicer/index";
const Blog = () => {
  const dispatch = useDispatch();
  const state: any = useSelector((state: any) => state.BlogSlicer.data);
  useEffect(() => {
    dispatch(fetchUserById());
  }, []);
  return (
    <div className="pt-40">
      <HomePageFirstSection
        heading="Stay informed about working in Canadian tech"
        bgImage="https://path2canada.ca/wp-content/uploads/2022/05/blog_hero.svg"
        paragraph="Our industry and immigration blog is designed to help you decide if Canada is the right path for you, and prepare you to make the move."
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
