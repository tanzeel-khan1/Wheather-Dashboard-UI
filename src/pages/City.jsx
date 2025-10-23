import React from "react";

const City = () => {
  return (
    <>
      <div className="h-auto w-full p-2 flex justify-center">
        <div className="h-full w-full max-w-xl p-2">
          <section
            className="h-[6rem] w-full bg-[#1B1B1D] rounded-md text-[#EFEFEF] flex items-center justify-between px-5 
          transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#252527] hover:shadow-md"
          >
            <div>
              <p className="text-[#818085]">China</p>
              <h2 className="text-xl font-light">Beijing</h2>
              <p className="text-[#818085]">Cloudy</p>
            </div>
            <img src="Rainy.png" alt="" className="h-12 w-12 object-contain" />
          </section>

          <section
            className="h-[6rem] w-full mt-6 bg-[#1B1B1D] rounded-md text-[#EFEFEF] flex items-center justify-between px-5 
          transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#252527] hover:shadow-md"
          >
            <div>
              <p className="text-[#818085]">US</p>
              <h2 className="text-xl font-light">California</h2>
              <p className="text-[#818085]">Windy</p>
            </div>
            <img src="sunny.png" alt="" className="h-12 w-12 object-contain" />
          </section>

          <section
            className="h-[6rem] w-full mt-6 bg-[#1B1B1D] rounded-md text-[#EFEFEF] flex items-center justify-between px-5 
          transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#252527] hover:shadow-md"
          >
            <div>
              <p className="text-[#818085]">Dubai</p>
              <h2 className="text-xl font-light">Arab Emirates</h2>
              <p className="text-[#818085]">Mostly Sunny</p>
            </div>
            <img src="eainy.png" alt="" className="h-12 w-12 object-contain" />
          </section>

          <section
            className="h-[6rem] w-full mt-6 bg-[#1B1B1D] rounded-md text-[#EFEFEF] flex items-center justify-between px-5 
          transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#252527] hover:shadow-md"
          >
            <div>
              <p className="text-[#818085]">Canada</p>
              <h2 className="text-xl font-light">Charlottetown</h2>
              <p className="text-[#818085]">Light SnowShower</p>
            </div>
            <img src="shower.png" alt="" className="h-12 w-12 object-contain" />
          </section>
        </div>
      </div>
    </>
  );
};

export default City;
