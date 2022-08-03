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
  const mapper = blog?.results?.map((items) => {
    return items.data?.slices;
  });
  // home banner
  const headingOne = mapper?.map((data) => {
    return data[1]?.items[0]?.title;
  });
  const description = mapper?.map((data) => {
    return data[1]?.items[0]?.description;
  });
  const backgroundImage = mapper?.map((data) => {
    return data[1]?.items[0]?.backgroundImage.url;
  });
  // home banner end

  const dispatch = useDispatch();
  const state: any = useSelector((state: any) => state.BlogSlicer.data);
  useEffect(() => {
    dispatch(fetchUserById());
  }, []);
  // blog cards
  const imageOne = mapper?.map((data) => {
    return data[0]?.items[0]?.image.url;
  });
  const titleOne = mapper?.map((data) => {
    return data[0]?.items[0]?.title;
  });
  const dateOne = mapper?.map((data) => {
    return data[0]?.items[0]?.date;
  });
  const descriptionOne = mapper?.map((data) => {
    return data[0]?.items[0]?.description;
  });

  const imageTwo = mapper?.map((data) => {
    return data[0]?.items[1]?.image.url;
  });
  const titleTwo = mapper?.map((data) => {
    return data[0]?.items[1]?.title;
  });
  const dateTwo = mapper?.map((data) => {
    return data[0]?.items[1]?.date;
  });
  const descriptionTwo = mapper?.map((data) => {
    return data[0]?.items[1]?.description;
  });

  const imageThree = mapper?.map((data) => {
    return data[0]?.items[2]?.image.url;
  });
  const titleThree = mapper?.map((data) => {
    return data[0]?.items[2]?.title;
  });
  const dateThree = mapper?.map((data) => {
    return data[0]?.items[2]?.date;
  });
  const descriptionThree = mapper?.map((data) => {
    return data[0]?.items[2]?.description;
  });

  const imageFour = mapper?.map((data) => {
    return data[0]?.items[3]?.image.url;
  });
  const titleFour = mapper?.map((data) => {
    return data[0]?.items[3]?.title;
  });
  const dateFour = mapper?.map((data) => {
    return data[0]?.items[3]?.date;
  });
  const descriptionFour = mapper?.map((data) => {
    return data[0]?.items[3]?.description;
  });

  const imageFive = mapper?.map((data) => {
    return data[0]?.items[4]?.image.url;
  });
  const titleFive = mapper?.map((data) => {
    return data[0]?.items[4]?.title;
  });
  const dateFive = mapper?.map((data) => {
    return data[0]?.items[4]?.date;
  });
  const descriptionFive = mapper?.map((data) => {
    return data[0]?.items[4]?.description;
  });

  const imageSix = mapper?.map((data) => {
    return data[0]?.items[5]?.image.url;
  });
  const titleSix = mapper?.map((data) => {
    return data[0]?.items[5]?.title;
  });
  const dateSix = mapper?.map((data) => {
    return data[0]?.items[5]?.date;
  });
  const descriptionSix = mapper?.map((data) => {
    return data[0]?.items[5]?.description;
  });

  const imageSeven = mapper?.map((data) => {
    return data[0]?.items[6]?.image.url;
  });
  const titleSeven = mapper?.map((data) => {
    return data[0]?.items[6]?.title;
  });
  const dateSeven = mapper?.map((data) => {
    return data[0]?.items[6]?.date;
  });
  const descriptionSeven = mapper?.map((data) => {
    return data[0]?.items[6]?.description;
  });

  const imageEight = mapper?.map((data) => {
    return data[0]?.items[7]?.image.url;
  });
  const titleEight = mapper?.map((data) => {
    return data[0]?.items[7]?.title;
  });
  const dateEight = mapper?.map((data) => {
    return data[0]?.items[7]?.date;
  });
  const descriptionEight = mapper?.map((data) => {
    return data[0]?.items[7]?.description;
  });

  const imageNine = mapper?.map((data) => {
    return data[0]?.items[8]?.image.url;
  });
  const titleNine = mapper?.map((data) => {
    return data[0]?.items[8]?.title;
  });
  const dateNine = mapper?.map((data) => {
    return data[0]?.items[8]?.date;
  });
  const descriptionNine = mapper?.map((data) => {
    return data[0]?.items[8]?.description;
  });

  const imageTen = mapper?.map((data) => {
    return data[0]?.items[9]?.image.url;
  });
  const titleTen = mapper?.map((data) => {
    return data[0]?.items[9]?.title;
  });
  const dateTen = mapper?.map((data) => {
    return data[0]?.items[9]?.date;
  });
  const descriptionTen = mapper?.map((data) => {
    return data[0]?.items[9]?.description;
  });

  const imageEleven10 = mapper?.map((data) => {
    return data[0]?.items[10]?.image.url;
  });
  const titleEleven10 = mapper?.map((data) => {
    return data[0]?.items[10]?.title;
  });
  const dateEleven10 = mapper?.map((data) => {
    return data[0]?.items[10]?.date;
  });
  const descriptionEleven10 = mapper?.map((data) => {
    return data[0]?.items[10]?.description;
  });

  const imageTwl = mapper?.map((data) => {
    return data[0]?.items[11]?.image.url;
  });
  const titleTwl = mapper?.map((data) => {
    return data[0]?.items[11]?.title;
  });
  const dateTwl = mapper?.map((data) => {
    return data[0]?.items[11]?.date;
  });
  const descriptionTwl = mapper?.map((data) => {
    return data[0]?.items[11]?.description;
  });

  const imageThr = mapper?.map((data) => {
    return data[0]?.items[12]?.image.url;
  });
  const titleThr = mapper?.map((data) => {
    return data[0]?.items[12]?.title;
  });
  const dateThr = mapper?.map((data) => {
    return data[0]?.items[12]?.date;
  });
  const descriptionThr = mapper?.map((data) => {
    return data[0]?.items[12]?.description;
  });

  const imageFourthen = mapper?.map((data) => {
    return data[0]?.items[13]?.image.url;
  });
  const titleFourthen = mapper?.map((data) => {
    return data[0]?.items[13]?.title;
  });
  const dateFourthen = mapper?.map((data) => {
    return data[0]?.items[13]?.date;
  });
  const descriptionFourthen = mapper?.map((data) => {
    return data[0]?.items[13]?.description;
  });
  const blogArray = [
    {
      image: imageOne ? imageOne : `pending`,
      title: titleOne ? titleOne : `pending`,
      date: dateOne ? dateOne : `pending`,
      description: descriptionOne ? descriptionOne : `pending`,
    },
    {
      image: imageTwo ? imageTwo : `pending`,
      title: titleTwo ? titleTwo : `pending`,
      date: dateTwo ? dateTwo : `pending`,
      description: descriptionTwo ? descriptionTwo : `pending`,
    },
    {
      image: imageThree ? imageThree : `pending`,
      title: titleThree ? titleThree : `pending`,
      date: dateThree ? dateThree : `pending`,
      description: descriptionThree ? descriptionThree : `pending`,
    },
    {
      image: imageFour ? imageFour : `pending`,
      title: titleFour ? titleFour : `pending`,
      date: dateFour ? dateFour : `pending`,
      description: descriptionFour ? descriptionFour : `pending`,
    },
    {
      image: imageFive ? imageFive : `pending`,
      title: titleFive ? titleFive : `pending`,
      date: dateFive ? dateFive : `pending`,
      description: descriptionFive ? descriptionFive : `pending`,
    },
    {
      image: imageSix ? imageSix : `pending`,
      title: titleSix ? titleSix : `pending`,
      date: dateSix ? dateSix : `pending`,
      description: descriptionSix ? descriptionSix : `pending`,
    },
    {
      image: imageSeven ? imageSeven : `pending`,
      title: titleSeven ? titleSeven : `pending`,
      date: dateSeven ? dateSeven : `pending`,
      description: descriptionSeven ? descriptionSeven : `pending`,
    },
    {
      image: imageEight ? imageEight : `pending`,
      title: titleEight ? titleEight : `pending`,
      date: dateEight ? dateEight : `pending`,
      description: descriptionEight ? descriptionEight : `pending`,
    },
    {
      image: imageNine ? imageNine : `pending`,
      title: titleNine ? titleNine : `pending`,
      date: dateNine ? dateNine : `pending`,
      description: descriptionNine ? descriptionNine : `pending`,
    },
    {
      image: imageTen ? imageTen : `pending`,
      title: titleTen ? titleTen : `pending`,
      date: dateTen ? dateTen : `pending`,
      description: descriptionTen ? descriptionTen : `pending`,
    },
    {
      image: imageEleven10 ? imageEleven10 : `pending`,
      title: titleEleven10 ? titleEleven10 : `pending`,
      date: dateEleven10 ? dateEleven10 : `pending`,
      description: descriptionEleven10 ? descriptionEleven10 : `pending`,
    },
    {
      image: imageTwl ? imageTwl : `pending`,
      title: titleTwl ? titleTwl : `pending`,
      date: dateTwl ? dateTwl : `pending`,
      description: descriptionTwl ? descriptionTwl : `pending`,
    },
    {
      image: imageThr ? imageThr : `pending`,
      title: titleThr ? titleThr : `pending`,
      date: dateThr ? dateThr : `pending`,
      description: descriptionThr ? descriptionThr : `pending`,
    },

    {
      image: imageFourthen ? imageFourthen : `pending`,
      title: titleFourthen ? titleFourthen : `pending`,
      date: dateFourthen ? dateFourthen : `pending`,
      description: descriptionFourthen ? descriptionFourthen : `pending`,
    },
  ];
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
                {blogArray.map((items: object) => {
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
