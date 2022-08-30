import React, { useState } from "react";
import Wrapper from "../Wrapper/index";
import Button from "../../Atoms/button";
import Font from "../../Atoms/Font";
import Avatar from "../../Atoms/avatar";
import Prismic from "prismic-javascript";
import { Client } from "../../../../prismic-configuration";
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
    return items?.data;
  });
  // avatar banner slice
  const nameOne = mapper?.map((items) => {
    return items.slices[0].primary.nameOne;
  });
  const nameTwo = mapper?.map((items) => {
    return items.slices[0].primary.nameTwo;
  });
  const nameThree = mapper?.map((items) => {
    return items.slices[0].primary.nameThree;
  });
  const nameFour = mapper?.map((items) => {
    return items.slices[0].primary.nameFour;
  });
  const nameFive = mapper?.map((items) => {
    return items.slices[0].primary.nameFive;
  });
  const nameSix = mapper?.map((items) => {
    return items.slices[0].primary.nameSix;
  });
  const titleOne = mapper?.map((items) => {
    return items.slices[0].primary.titleOne;
  });
  const titleTwo = mapper?.map((items) => {
    return items.slices[0].primary.titleTwo;
  });
  const titleThree = mapper?.map((items) => {
    return items.slices[0].primary.titleThree;
  });
  const titleFour = mapper?.map((items) => {
    return items.slices[0].primary.titleFour;
  });
  const titleFive = mapper?.map((items) => {
    return items.slices[0].primary.titleFive;
  });
  const titleSix = mapper?.map((items) => {
    return items.slices[0].primary.titleSix;
  });

  const imageOne = mapper?.map((items) => {
    return items.slices[0].primary.imageOne.url;
  });
  const imageTwo = mapper?.map((items) => {
    return items.slices[0].primary.imageTwo.url;
  });
  const imageThree = mapper?.map((items) => {
    return items.slices[0].primary.ImageThree.url;
  });
  const imageFour = mapper?.map((items) => {
    return items.slices[0].primary.imageFour.url;
  });
  const imageFive = mapper?.map((items) => {
    return items.slices[0].primary.imageFive.url;
  });
  const imageSix = mapper?.map((items) => {
    return items.slices[0].primary.imageSix.url;
  });
  // avatar banner slice end

  let AvatarArray = [
    {
      img: imageOne,
      name: nameOne,
      label: titleOne,
    },
    {
      img: imageTwo,
      name: nameTwo,
      label: titleTwo,
    },
    {
      img: imageThree,
      name: nameThree,
      label: titleThree,
    },
    {
      img: imageFour,
      name: nameFour,
      label: titleFour,
    },
    {
      img: imageFive,
      name: nameFive,
      label: titleFive,
    },
    {
      img: imageSix,
      name: nameSix,
      label: titleSix,
    },
  ];

  const weConnect = mapper?.map((items) => {
    return items?.weConnect;
  });
  const letsWork = mapper?.map((items) => {
    return items?.letsWork;
  });

  const pickingUp = mapper?.map((items) => {
    return items?.pickingUp;
  });
  const myStory = mapper?.map((items) => {
    return items?.myStory;
  });
  const storyDes = mapper?.map((items) => {
    return items?.storyDes;
  });
  const pathToCanada = mapper?.map((items) => {
    return items?.pathToCanada;
  });
  const pathToCanadaDes = mapper?.map((items) => {
    return items?.pathToCanadaDes;
  });
  const WriterImage = mapper?.map((items) => {
    return items?.WriterImage.url;
  });
  const writedName = mapper?.map((items) => {
    return items?.writedName;
  });
  const writerDes = mapper?.map((items) => {
    return items?.writerDes;
  });

  return (
    <div>
      <Wrapper className="bg-red-bgColor text-white pb-20">
        <div className=" pt-16 pb-16">
          <div className="lg:text-4xl text-3xl text-center   font-bold ">
            {weConnect}
            <div className="break-words">{letsWork}</div>
          </div>
        </div>
        <div className="grid grid-cols-1 text-center md:grid-cols-[1fr_0.1fr_1fr] ">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold">{Fheading}</div>
            <Font className="font-bold pt-5 pb-10">{Sheading}</Font>
            <Button text="Complete My Profile " dark />
          </div>
          <div className="w-hr h-22 bg-white"></div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold">{Flabel}</div>
            <Font className="font-bold pt-5 pb-10">{Slabel}</Font>
            <Button text="Book a consultation" dark />
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="pt-20 pb-20 grid lg:grid-cols-2 grid-col-1 gap-10">
          <div>
            <div className="text-4xl text-aqua-color font-bold">
              {pickingUp}
            </div>
            <div className="text-2xl pb-10 pt-10 text-aqua-color font-bold">
              {myStory}
            </div>
            <Font>{storyDes}</Font>
            <div className="text-2xl pb-1 pt-1 text-aqua-color font-bold">
              {pathToCanada}
            </div>
            <Font className="pt-4 pb-4 ">{pathToCanadaDes}</Font>
          </div>
          <div className="text-center">
            <img width={"100%"} src={WriterImage} alt="" />
            <Font className="pt-10">{writedName}</Font>
            <Font className="pt-2">{writerDes}</Font>
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
