"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCardresponsive";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const projectsData = [
  {
    id: 4,
    title: "Banking System - Java Application for Banking System.",
    description:
      "The project encompasses the implementation of a banking system featuring checking and savings accounts, as well as cash deposit functionality. It allows users to create various types of accounts, reset account details, view account information, and perform withdrawals. The project leverages JavaFX to create a user-friendly graphical interface for input, enhancing the overall user experience ",
    imgUrls: [
      "images/projects/bankaccount/banksystem.png",
      "images/projects/bankaccount/banksystem.png",
    ],
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/yuqiao1205/advancedjava/tree/main/assigment1/BankingSystem/src",
    previewUrl: "",
    worksUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        My All Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-1 py-5">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DL"
          isSelected={tag === "DL"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              className="color"
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrls={project.imgUrls} // Pass multiple images as an array
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              worksUrl={project.worksUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
