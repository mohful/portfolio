import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 top-44">
        <Skill
          link="https://img.icons8.com/color/512/java-coffee-cup-logo.png"
          percent="95%"
          alt="java"
        />
        <Skill
          link="https://img.icons8.com/?size=512&id=TpULddJc4gTh&format=png"
          percent="80%"
          alt="c++"
        />
        <Skill
          link="https://img.icons8.com/3d-fluency/512/python.png"
          percent="90%"
          alt="python"
        />
        <Skill
          link="https://img.icons8.com/?size=512&id=MBA5vPE4dGz2&format=png"
          percent="95%"
          alt="sql"
        />
        <Skill
          link="https://img.icons8.com/?size=512&id=45490&format=png"
          percent="75%"
          alt="c#"
        />
        <Skill
          link="https://img.icons8.com/?size=512&id=108784&format=png"
          percent="80%"
          alt="JavaScript"
        />
        <Skill
          directionLeft={true}
          link="https://img.icons8.com/?size=512&id=CLvQeiwFpit4&format=png"
          percent="80%"
          alt="R"
        />
        <Skill
          directionLeft={true}
          link="https://img.icons8.com/plasticine/512/react.png"
          percent="90%"
          alt="React.js"
        />
        <Skill
          directionLeft={true}
          link="https://pytorch.org/assets/images/pytorch-logo.png"
          percent="80%"
          alt="PyTorch"
        />
        <Skill
          directionLeft={true}
          link="https://www.ambient-it.net/wp-content/uploads/2018/07/scikit-learn-175.png"
          percent="75%"
          alt="Sklearn"
        />
        <Skill
          directionLeft={true}
          link="https://www.svgrepo.com/show/331370/docker.svg"
          percent="80%"
          alt="Docker"
        />
        <Skill
          directionLeft={true}
          link="https://static-00.iconduck.com/assets.00/aws-icon-1024x1024-runl182z.png"
          percent="80%"
          alt="AWS"
        />
      </div>
    </motion.div>
  );
}

export default Skills;