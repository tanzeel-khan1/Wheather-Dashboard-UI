// import React from "react";
// import FirstSec from "./FirstSec";

// const TodayOverview = () => {
//   return (
//     <div className="md:h-[35rem] h-[59rem] mt-24 md:mt-0 w-full bg-red-800 flex flex-col md:flex-row">
//       {/* Left Section */}
//       <div className="h-[50%] md:h-full w-full md:w-1/2 bg-yellow-500 p-0 md:p-2">
//       <FirstSec/>
//       </div>

//       {/* Middle Section */}
//       <div className="h-[35%] md:h-full w-full md:w-1/4 mt-14 md:mt-0 bg-green-500"></div>

//       {/* Right Section */}
//       <div className="h-[25%] md:h-full w-full md:w-1/4 bg-green-800"></div>
//     </div>
//   );
// };

// export default TodayOverview;
import React from "react";
import FirstSec from "./FirstSec";

const TodayOverview = () => {
  return (
    <div className="md:flex grid flex-wrap w-full mt-24 md:mt-0 bg-black min-h-[35rem]">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 md:w-1/2 p-2 min-h-[15rem] flex items-center justify-center">
        <FirstSec />
      </div>

      {/* Middle Section */}
      <div className="w-full
       sm:w-1/4 md:w-1/4 bg-green-500 min-h-[15rem] flex items-center justify-center">
        <p className="text-white font-semibold">Middle Section</p>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-1/4 md:w-1/4 bg-green-800 min-h-[15rem] flex items-center justify-center">
        <p className="text-white font-semibold">Right Section</p>
      </div>
    </div>
  );
};

export default TodayOverview;
