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
         Hello, my name is Mohammed Fulwala and I am a Software Engineer. As a self-motivated and disciplined leader, an optimistic and determined team worker, and a hard-working individual, I strive to achieve excellence in every task. I am interested in the field of Software Development, Cyber Security and Machine Learning. <br /> <br />
         As an undergraduate Research Assistant at York University, I developed a CNN achieving a 95% accuracy rate in player classification based on jersey numbers in sports videos, and also contributed to MOT on the same videos using PyTorch. These experiences have equipped me with valuable insights and a strong foundation for a career in these fields. <br /> <br />
         As a Software Developer at SEQ Technology, I successfully built a full-stack application with a RESTful API server designed to streamline HR operations, resulting in a remarkable 50% increase in departmental efficiency. <br /> <br />
         Throughout my professional journey, I have established myself as a person with strong problem-solving and technical skills. My enthusiasm for the job, coupled with robust interpersonal and communication abilities, has been a driving force in my work. I take great pride in my work ethic, persistently tackling challenges and meticulously reviewing my programs to ensure their quality and reliability before sharing them. I actively contribute to discussions with innovative ideas and remain open to constructive criticism, firmly believing in the value of collaboration and continuous improvement. <br /> <br />
         I am confident that my exposure and practical application of a wide variety of tools and technologies, as well as my eagerness and openness to learn and further grow will make me excel in any field.
        </p>
      </div>
    </motion.div>
  );
}

export default About;