import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { div } from "framer-motion/client";

const data = [
  { time: "10AM", value: 7.5 },
  { time: "11AM", value: 8.0 },
  { time: "12PM", value: 5.0 },
  { time: "01PM", value: 6.5 },
  { time: "02PM", value: 9.0 },
  { time: "03PM", value: 7.0 },
];

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const weatherData = [
    { day: "SAT", temp: "10", img: "sunny.png" },
    { day: "SUN", temp: "15", img: "Sunny 2.png" },
    { day: "MON", temp: "11", img: "eainy.png" },
    { day: "TUE", temp: "10", img: "Rainy.png" },
    { day: "WED", temp: "12", img: "h rainy.png" },
    { day: "THU", temp: "10", img: "sunny.png" },
  ];

  return (
    <div className="bg-black">
      <motion.div
        className="w-full bg-black flex flex-col md:flex-row items-stretch gap-4 p-4 rounded-xl shadow-lg h-[20rem] md:h-64"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          variants={cardVariants}
          className="w-full md:w-[25%] bg-[#1E1E1E] backdrop-blur-md rounded-xl p-4 flex flex-col justify-between shadow-md h-full"
        >
          <div>
            <h4 className="text-white font-semibold text-lg mb-1">Friday</h4>
            <p className="text-white/80 text-sm mb-2">11:45 AM</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white relative">
                16
                <span className="absolute -top-2 left-10 text-xl">°</span>
              </h1>
              <p className="text-white/80 text-sm mt-1">Real Feel 18°</p>
              <p className="text-white/80 text-sm">Wind N-E 6-7 km/h</p>
            </div>
            <img src="sun.png" className="w-16 h-16" alt="Sun" />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="w-full md:w-[50%] flex flex-wrap justify-between gap-2 h-full"
        >
          
          {weatherData.map((d, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center bg-[#1E1E1E] backdrop-blur-md w-[14%] min-w-[50px] rounded-xl p-2 text-white h-full shadow-md"
            >
              <p className="text-xs font-semibold">{d.day}</p>
              <img
                src={d.img}
                alt={d.day}
                className="w-8 h-8 my-1 object-contain"
              />
              <h1 className="text-lg font-bold">{d.temp}°</h1>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="w-full md:w-[25%] hidden md:flex bg-[#1E1E1E] backdrop-blur-md rounded-xl p-4 flex flex-col justify-between shadow-md h-full"
        >
          <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid stroke="#ffffff30" strokeDasharray="3 3" />
                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#fff" }}
                />
                <YAxis domain={[0, 10]} hide />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    borderRadius: "4px",
                    border: "none",
                  }}
                  itemStyle={{ color: "#fff" }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#fff"
                  strokeWidth={2}
                  dot
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
