import React from "react";
import FirstSec from "./FirstSec";

const TodayOverview = () => {
  return (
   <>
   <div className="bg-black">
    <h1 className="md:ml-6 ml-6 pt-30 md:pt-2 text-white">Today's Overview</h1>
    <div className="md:flex grid flex-wrap w-full mt-2 md:mt-0 bg-black min-h-[35rem]">
      <div className="w-full sm:w-1/2 md:w-1/2 p-2 min-h-[15rem] flex items-center justify-center">
        <FirstSec />
      </div>

      <div
        className="w-full
       sm:w-1/4 md:w-1/4 bg-green-500 min-h-[15rem] flex items-center justify-center"
      >
        <p className="text-white font-semibold">Middle Section</p>
      </div>

      <div className="w-full sm:w-1/4 md:w-1/4 bg-green-800 min-h-[15rem] flex items-center justify-center">
        <p className="text-white font-semibold">Right Section</p>
      </div>
    </div>
   </div>
    
   </>
  );
};

export default TodayOverview;
