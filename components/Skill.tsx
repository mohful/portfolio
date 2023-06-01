import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
  link: string;
  alt?: string;
  percent: string;
};

function Skill({ directionLeft, link, percent, alt }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={link}
        alt={alt}
        className="rounded-full border border-gray-500 object-cover w-24 h-24  filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover: bg-white h-24 w-24  rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-1xl font-bold text-black opacity-100">{percent}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;