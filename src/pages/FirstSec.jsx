import React from "react";
import { motion } from "framer-motion";
import { IoIosCloudOutline } from "react-icons/io";

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FirstSec = () => {
  return (
    <div className="min-h-[34rem] w-full flex justify-center items-center py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-[95%] sm:w-[90%] h-auto mr-0 md:mr-11">
        <motion.section
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="h-auto bg-[#1B1B1D] rounded-md text-white p-4 flex flex-col justify-between"
        >
          <div>
            <h1 className="text-lg font-light">Wind Status</h1>
            <img
              src="wind.png"
              alt="wind"
              className="mt-8 w-full max-h-12 object-contain"
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <h4 className="font-bold text-lg sm:text-xl">
              7.50 <span className="text-sm font-normal">km/h</span>
            </h4>
            <p className="text-sm sm:text-base">6.20 AM</p>
          </div>
        </motion.section>

        <motion.section
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="h-auto bg-[#1B1B1D] rounded-md text-white p-4 flex flex-col justify-between"
        >
          <h1 className="text-lg font-light sm:ml-5">UV Index</h1>
          <img
            src="speed.png"
            alt="UV"
            className="mt-4 mx-auto w-24 sm:w-28 object-contain"
          />
          <h1 className="text-center font-bold text-lg sm:text-xl mt-2">
            5.50 UV
          </h1>
        </motion.section>

        <motion.section
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="h-auto bg-[#1B1B1D] rounded-md text-white p-4 flex flex-col justify-between"
        >
          <h1 className="text-lg font-light">Humidity</h1>
          <IoIosCloudOutline className="mt-4 mx-auto text-[80px] sm:text-[100px]" />
          <div className="flex flex-wrap items-center mt-3">
            <h4 className="font-bold text-lg sm:text-xl">84%</h4>
            <img src="new.png" className="h-6 w-6 ml-2 sm:ml-8" alt="new" />
            <div className="flex flex-col leading-tight text-[#818085] ml-3">
              <p className="text-sm">The dew point is 270</p>
              <p className="text-sm">right now</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="h-auto bg-[#1B1B1D] rounded-md text-white p-4 flex flex-col justify-between"
        >
          <h1 className="text-lg font-light">Visibility</h1>
          <img
            src="visi.png"
            alt="visibility"
            className="w-20 h-20 mx-auto mt-4 object-contain"
          />
          <div className="flex flex-wrap items-center mt-4">
            <h4 className="font-bold text-lg sm:text-xl">04 km</h4>
            <img src="eye.png" className="h-6 w-6 ml-2 sm:ml-8" alt="eye" />
            <div className="flex flex-col leading-tight text-[#818085] ml-3">
              <p className="text-sm">Haze is affecting</p>
              <p className="text-sm">visibility</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default FirstSec;
