import React, { useEffect } from "react";
import HomePageFirstSection from "../scr/components/Organism/homePageFirstSection";
import BlackBannerLeafSection from "../scr/components/Organism/blackBannerLeafSection";
import BlogCard from "../scr/components/Atoms/blogCard";
import Wrapper from "../scr/components/Organism/Wrapper";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../scr/components/Atoms/spinner";
import Font from "../scr/components/Atoms/Font";
import { fetchUserById } from "../Redux/blogSlicer/index";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
const Blog = ({
  blog,
}:
  | {
      license: string;
      next_page: null;
      prev_page?: null;
      results: [];
      results_per_page: number;
      results_size?: number;
      total_pages: number;
      total_results_size: number;
      version?: string;
    }[]
  | any) => {

  const dispatch = useDispatch();
  const state: any = useSelector((state: any) => state.BlogSlicer.data);
  const headingOne = blog.data.slices[1].items[0].title;
  const description = blog?.data.slices[1]?.items[0]?.description;
  const backgroundImage = blog?.data.slices[1]?.items[0]?.backgroundImage?.url;
  const mapper = blog?.data?.slices[0]?.items;
  
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
                {mapper &&
                  mapper?.map((items: object) => {
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
export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint);
  const blog = await client.getByUID("blog", "id-blog");
  return {
    props: {
      blog,
    },
  };
}
