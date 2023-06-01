import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};

function WorkExperience({}: Props) {
  const icons = ["./SEQ.png", "./YU.png", "./BEST.png"];
  const description = [
    [
      "Currently working with the Best lab so I will update as I go through."
    ],
    [
      "Worked on a project to develop a machine learning approach for identifying players in team sports video through their jersey numbers.",
      "Invented a CNN to perform binary classification of player images based on the visibility of their jersey number using a dataset of manually labelled hockey player images.",
      "Contributed to the field of Computer Vision by individually presenting my findings at the Lassonde Undergraduate Research Conference 2022.",
      "Evaluated existing Multiple Object Tracking (MOT) on the hockey dataset to identify players on the field by recognizing their movement patterns. This required reading and understanding relevant papers, adapting open source code to the dataset, and training and evaluating models using Python and PyTorch."
    ], 
    [
      "Supported over a 100 students in understanding the fundamental concepts of Operating Systems.",
      "Assisted the course director by providing office hours, invigilating, grading assessments, and developing course material.",
      "Demonstrated great time management by working over 40 hours as part of the teaching assistant load alongside full-time research position at university."
    ], 
    [
      "Constructed a full stack application with a RESTful API server from scratch that performs internal admin operations, allowing HR to focus more on HR-focused operations than front office work. Improved efficiency of the department by 50%.",
      "Enhanced the security of the application and protected sensitive user data by implementing User Authentication using Amazon Web Services tools like Cognito and Amplify.",
      "Streamlined the onboarding process at SEQ by inventing an admin portal using Cognito API that allows admins and HR to create new users in the user pool easily.",
      "Containerized the entire application and managed all services using Docker, thus improving the development quality along with maintainability and portability of the application.",
      "Used React.js, Python, Flask and MySQL for the duration of this internship."
    ], 
  ];

  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Experience
      </h3>

      <div
        className="w-full h-[550px] flex space-x-5 overflow-x-scroll px-10 py-5 snap-x snap-mandatory 
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 xl:mt-[100px]"
      >
        <ExperienceCard
          companyIcon={icons[2]}
          companyName="BEST Lab"
          duration="May 2023 - Present"
          title="Software Engineer"
          description={description[0]}
        />
        <ExperienceCard
          companyIcon={icons[2]}
          companyName="Elder Lab for Human and Computer Vision"
          duration="June 2022 - April 2023"
          title="Research Assistant"
          description={description[1]}
        />
        <ExperienceCard
          companyIcon={icons[1]}
          companyName="York University"
          duration="May 2022 - August 2023"
          title="Teaching Assistant"
          description={description[2]}
        />
         <ExperienceCard
          companyIcon={icons[0]}
          companyName="SEQ Technology"
          duration="Jan 2022 - April 2022"
          title="Software Developer"
          description={description[3]}
        />
      </div>
    </motion.div>
  );
}

export default WorkExperience;