import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import {BsFiletypePdf} from 'react-icons/bs'

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/mafulwala/"
          fgColor="gray"
          target="_blank"
          bgColor="transparent"
        ></SocialIcon>
        <SocialIcon
          url="https://github.com/mohful"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <a href="./Resume.pdf" target="_blank">
          <motion.button
            className="px-4 py-2 rounded-md text-[#F7AB0A] text-[13px] border border-[#F7AB0A] hover:bg-[rgb(100,255,218,0.1)]"
          >
            Resume
          </motion.button>
        </a>
        {/* <BsFiletypePdf />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </Link> */}
      </motion.div>
    </header>
  );
}

export default Header;