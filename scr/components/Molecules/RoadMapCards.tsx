import React, { useEffect } from "react";
import Line from "../Atoms/line";
import AOS from "aos";
import "aos/dist/aos.css";
import Font from "../Atoms/Font";

const RoadMapCards = ({ ...items }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { firstImg, secondImg } = items;
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.1fr_1fr] gap-10">
      <div>
        <img
          data-aos="fade-down"
          data-aos-duration="2000"
          style={{ width: "350px ", height: "250px" }}
          src={firstImg}
          alt=""
        />
        <Font>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
          asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Provident, qui?
        </Font>
      </div>
      <div>
        <Line {...items} />
      </div>
      <div className="relative ">
        <div className="static md:absolute top-64  ">
          <img
            data-aos="fade-down"
            data-aos-duration="2000"
            style={{ width: "350px ", height: "250px" }}
            src={secondImg}
            alt=""
          />
          <Font>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            asperiores. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Provident, qui?
          </Font>
        </div>
      </div>
    </div>
  );
};

export default RoadMapCards;
