import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  const imageURL = process.env.REACT_APP_PROFILE_URL;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="./IMG_0952.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[450px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-base">
         Hello, my name is Mohammed Fulwala and I am a Software Engineer. As a self-motivated and disciplined leader, an optimistic and determined team worker, and a hard-working individual, I strive to achieve excellence in every task. I am experienced in the field of Software Development, Cyber Security and Machine Learning. <br /> <br />
         My curious nature has driven me to learn a wide variety of technologies like Python, C++, Docker and PyTorch. I always endeavour to apply each skill I learn to projects that create solutions to practical problems. <br /> <br />
         One of the many projects I have worked on is a desktop application that converts text-based music tablature (which is very prevalent online but is not easy to work with) into a MusicXML format which enables users to play the music scores using other softwares. The application strives to be user-focused as it goes beyond simple conversation by enabling the user to modify their input with its interface, allowing them to add different instrumental symbols to receive a unique tune as an output. <br /> <br />
         I worked with this four month project collaboratively as a team leader of a small group of skilled colleagues. This experience helped me gain a firm grasp of Object Oriented programming concepts, as well as software design and testing principles. More importantly, contributing to and being accountable for a team allowed me to develop good teamwork and code-collaboration practices. <br /> <br />
         I am confident that my exposure and practical application of a wide variety of tools and technologies, as well as my eagerness and openness to learn and further grow will make me excel in any field.
        </p>
      </div>
    </motion.div>
  );
}

export default About;