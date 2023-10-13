import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const project1 = {
    name: "AuctionHub",
    description: "Designed and implemented a secure online auction e-commerce platform.",
    image: "./auctionhub.png",
    link: "",
  };
  const project2 = {
    name: "Market Basket Analysis" ,
    description:"Conducted a market-basket analysis on data sets from a Belgian Retail Store and Netflix",
    image: "./MBA.png",
    link: "",
  };
  const project3 = {
    name: "Chatbox",
    description: "A chat-based application with end-to-end encryption.",
    image:"./chatbox.png",
    link: "",
  };
  const project4 = {
    name: "Allegro Tab Converter",
    description:"A software system that converts music tablature in text format to a MusicXML file format for use in digital playback programs and websites.",
    image:"./allegro.png",
    link: "",
  };

  const projects = [project1, project2, project3, project4];

  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin mt-0">
        {projects.map((project, i) => {
          return (
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
              key={i}
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={project.image}
                className="max-h-[250px]"
              />
              <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4-xl font-semibold text-center">
                  Project {i + 1} of {projects.length}: {project.name}
                </h4>
                <p className="text-sm text-center md:text-left">
                  {project.description}
                </p>

                <span className="text-sm" key={i}>
                      <a href={project.link} className="underline hover:text-green-500">
                        {project.link}
                      </a>
                      <br />
                    </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;