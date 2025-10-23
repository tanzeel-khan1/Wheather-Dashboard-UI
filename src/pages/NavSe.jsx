import { useState } from "react";

const NavSe = () => {
  const [selected, setSelected] = useState("forecast");

  return (
    <nav className="h-10 w-full bg-black flex ">
      <p className="text-[#818085] cursor-pointer ml-5 hover:text-[#BBD7EC]">
        Tomorrow
      </p>
      <p className="text-[#818085] ml-5 cursor-pointer hover:text-[#BBD7EC]">
        Today
      </p>
      <h4 className="hidden md:block text-white/90 ml-5 cursor-pointer hover:text-[#BBD7EC]">
        Next 7days
      </h4>

      <div className="hidden md:flex h-8 w-[12rem] rounded-full bg-[#1E1E1E] gap-2 cursor-pointer mr-6 sm:ml-auto">
        <div
          onClick={() => setSelected("forecast")}
          className={`h-full w-[50%] rounded-full flex items-center justify-center transition-all duration-300 ${
            selected === "forecast"
              ? "bg-[#BBD7EC] text-black"
              : "bg-transparent text-[#818085]"
          }`}
        >
          <p>Forecast</p>
        </div>

        <div
          onClick={() => setSelected("air")}
          className={`h-full w-[50%] rounded-full flex items-center justify-center transition-all duration-300 ${
            selected === "air"
              ? "bg-[#BBD7EC] text-black"
              : "bg-transparent text-[#818085]"
          }`}
        >
          <p>Air Quality</p>
        </div>
      </div>

      <p className="hidden md:block text-white mr-0 md:mr-26 md:ml-0 ml-5">
        Chance Of Rain
      </p>
    </nav>
  );
};

export default NavSe;
