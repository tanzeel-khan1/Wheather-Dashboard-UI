import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-black flex flex-wrap items-center justify-between px-4 py-3">
      <div className="flex items-center space-x-3">
        <section className="h-9 w-9 rounded-full bg-[#1E1E1E] flex justify-center items-center">
          <img src="img1.png" alt="icon" className="h-4" />
        </section>
        <section className="h-9 w-9 rounded-full bg-[#1E1E1E] flex justify-center items-center">
          <img src="bell.png" alt="bell" className="h-4" />
        </section>

        <div className="flex items-center gap-2 text-[#FEFEFE]">
          <img src="location.png" alt="location" className="h-4" />
          <p className="text-sm sm:text-base">Karachi, Pakistan</p>
        </div>
      </div>

      <div className="flex items-center gap-6 mt-3 sm:mt-0">
        <div className="flex items-center bg-[#1E1E1E] rounded-md px-3 py-2 w-[14rem] sm:w-[18rem] md:w-[23rem]">
          <img src="meg.png" alt="search" className="h-5 mr-3" />
          <input
            type="text"
            placeholder="Search City"
            className="bg-transparent w-full text-white placeholder-gray-400 outline-none text-sm sm:text-base"
          />
        </div>

        <div className="flex items-center gap-3">
          <h4 className="text-[#818085] text-sm sm:text-base">
            Developed by{" "}
            <span className="font-semibold text-white">Tanzeel</span>
          </h4>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
