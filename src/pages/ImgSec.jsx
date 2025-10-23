import React from "react";

const ImgSec = () => {
  return (
    <>
      <div
        className="h-[30rem] mt-6 w-full bg-cover bg-center bg-no-repeat rounded-md"
        style={{ backgroundImage: "url('sky.png')" }}
      >
        <div className="p-3">
          <div className="h-[5rem] w-full bg-white/20 mt-5 flex flex-col items-center justify-center rounded-md">
            <h1 className="font-semibold text-center text-xl">
              Explore global map of wind
            </h1>
            <h1 className="font-semibold text-center text-xl">
              weather and ocean condition
            </h1>
          </div>
          <button className="p-5  text-2xl font-bold mt-52 ml-14 md:ml-12 rounded-md cursor-pointer bg-[#D9D9D9] transition-3s hover:bg-black hover:text-white">
            GET STARTED
          </button>
        </div>
      </div>
    </>
  );
};

export default ImgSec;
