import React, { useEffect, useState, useRef } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import HeaderItem from "../../Atoms/headerItem";
import Link from "next/link";
import ScrollTopButton from "../../Molecules/scrollTopButton";
import Drawer from "../Drawer/index";
import Prismic from "prismic-javascript";
import { Client } from "../../../../prismic-configuration";
import logoAlt from "/logo.svg";
const Header = () => {
  const [toggleFn, setToggleFn] = useState<Boolean>(true);
  const [fetchData, setFetchData] = useState<
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
    | any
  >("");
  async function getServerSideProps() {
    const header = await Client().query(
      Prismic.Predicates.at("document.type", "header")
    );
    setFetchData(header);
    return {
      props: {
        header,
      },
    };
  }
  if (toggleFn) {
    getServerSideProps();
    setToggleFn(!toggleFn);
  }
  // header dynamiic
  const logo = fetchData?.results?.map((items) => {
    return items?.data.logo.url;
  });
  const linkOne = fetchData?.results?.map((items) => {
    return items?.data.linkOne;
  });
  const linkTwo = fetchData?.results?.map((items) => {
    return items?.data.linkTwo;
  });
  const linkThree = fetchData?.results?.map((items) => {
    return items?.data.linkThree;
  });
  const linkFour = fetchData?.results?.map((items) => {
    return items?.data.linkFour;
  });
  const linkFive = fetchData?.results?.map((items) => {
    return items?.data.linkFive;
  });
  const linkSix = fetchData?.results?.map((items) => {
    return items?.data.linkSix;
  });
  const myArray: string[] = [
    linkOne ? linkOne : `EMPLOYEE`,
    linkTwo ? linkTwo : `EMPLOYERS`,
    linkThree ? linkThree : `JOBS`,
    linkFour ? linkFour : `FAQS`,
    linkFive ? linkFive : `BLOG`,
    linkSix ? linkSix : `ABOUT US`,
  ];
  // dynamic end here

  const [drawer, setDrawer] = useState<boolean>(false);
  const iconRef = useRef<HTMLDivElement>(null!);
  const [headerValue, setHeaderValue] = useState<number>(1);
  const headerRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLImageElement>(null!);
  useEffect(() => {
    window.onscroll = () => {
      setHeaderValue(window.pageYOffset);
    };
    if (headerValue > 100) {
      headerRef.current.style.height = "55px";
      imageRef.current.style.height = "40px";
      headerRef.current.style.boxShadow = "2px 2px 4px #e4e4e7";
    } else if (headerValue < 100) {
      headerRef.current.style.height = "100px";
      imageRef.current.style.height = "80px";
      headerRef.current.style.boxShadow = "none";
    }
    if (iconRef.current)
      if (headerValue >= 1000) iconRef.current.style.display = "block";
      else if (headerValue <= 1000) iconRef.current.style.display = "none";
  });

  return (
    <div>
      <div ref={iconRef}>
        <ScrollTopButton />
      </div>
      <div
        ref={headerRef}
        className="fixed ease-in-out duration-1000 bg-white z-10 top-0 left-0 right-0 p-3 pl-10 pr-10 flex items-center justify-between"
      >
        <Link href="/">
          <img
            className="ease-in-out duration-1000 cursor-pointer"
            ref={imageRef}
            src={logo ? logo : "/logo.svg"}
            alt={"loading"}
          />
        </Link>
        <div className="md:hidden gap-4 sm:hidden lg:flex space-x-4 hidden ">
          {myArray.map((items, id) => {
            return <HeaderItem text={items} id={id} />;
          })}
        </div>
        <div className="block sm:block md:block lg:hidden relative">
          <MenuIcon
            onClick={() => {
              setDrawer(!drawer);
            }}
            className="w-8 h-8"
          />
          {drawer && <Drawer myArray={myArray} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
