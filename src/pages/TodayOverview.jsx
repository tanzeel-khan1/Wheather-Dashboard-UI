import React from "react";
import FirstSec from "./FirstSec";
import ImgSec from "./ImgSec";
import City from "./City";

const TodayOverview = () => {
  return (
    <>
      <div className="bg-black">
        <h1 className="md:ml-6 ml-6 pt-30 md:pt-2 text-white">
          Today's Overview
        </h1>
        <div className="md:flex grid flex-wrap w-full mt-2 md:mt-0 bg-black min-h-[35rem]">
          <div className="w-full sm:w-1/2 md:w-1/2 p-2 min-h-[15rem] flex items-center justify-center">
            <FirstSec />
          </div>

          <div
            className="w-full
       sm:w-1/4 md:w-1/4 min-h-[15rem] md:p-2.5 p-5 "
          >
            <ImgSec />
          </div>

          <div className="w-full sm:w-1/4 md:w-1/4  min-h-[15rem]">
            <nav className="h-7 w-full flex">
              <p className="text-[#FFFFFF] ml-7 md:ml-4 cursor-pointer ">
                Other Cities
              </p>
              <p className="md:ml-42 ml-42 text-[#FFFFFF] cursor-pointer hover:text-[#BBD7EC]">
                See All
              </p>
            </nav>
            <City />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayOverview;
