"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TravelWise - React Web Application for Travel Enthusiasts.",
    description:
      " The blog app not only provides traditional blog features but also offers users with a unique experience by integrating cutting-edge features such as an AI-powered travel chatbot for personalized recommendations, AI-powered vision feature for destination identification and assistance, automated question answering for seamless information retrieval, and real-time weather updates with counrtry info checks to enhance trip planning.",
    image: "images/projects/travelwise.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/blogproject",
    previewUrl: "/",
  },
  {
    id: 2,
    title:
      "Photo Gallery - Image Post Web Application with nodejs backend and MySQL database.",
    description:
      "The project implements a range of features catering to both unregistered and registered users, including login, register, post images, search, and make comments functionalities. Unregistered users can browse and search for content, while registered users gain additional capabilities such as posting images and making comments. The system offers a seamless and engaging experience, allowing users to interact with the platform's content in a dynamic and user-friendly manner.",
    image: "images/projects/imagepost.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/photo-site",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Banking System - Java Application for Banking System.",
    description:
      "The project encompasses the implementation of a banking system featuring checking and savings accounts, as well as cash deposit functionality. It allows users to create various types of accounts, reset account details, view account information, and perform withdrawals. The project leverages JavaFX to create a user-friendly graphical interface for input, enhancing the overall user experience ",
    image: "images/projects/banksystem.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/advancedjava/tree/main/assigment1/BankingSystem/src",
    previewUrl: "/",
  },
  {
    id: 4,
    title:
      "Brick Game Application - Javascript Based Application using HTML, CSS, and JS.",
    description:
      "The project encompasses the implementation of a brick game with features such as point calculation, increasing ball speeds for each level, and progressing to the next level upon eliminating all blocks. Keyboard and mouse controls are integrated into the game, enhancing user interaction and gameplay experience. The game's design focuses on providing engaging gameplay while challenging players with progressively difficult levels, ensuring an enjoyable and immersive gaming experience. ",
    image: "images/projects/brickgame.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/brickgame",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Calculator Application - Java Based Application.",
    description:
      "The project involves implementing an infix expression evaluator using Java, with a focus on essential mathematical functions and utilizing two stacks. Additionally, a Java Swing GUI is created to provide a user-friendly interface for calculator input. This approach allows users to input complex mathematical expressions in infix notation, which are then evaluated accurately. The project enhances user experience by providing a visually appealing and intuitive way to perform calculations. ",
    image: "images/projects/calculator1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/csc413-ex-1-calculator",
    previewUrl: "/",
  },
  {
    id: 6,
    title:
      "User Management System - Spring Boot Application with MySQL Database and React Frontend.",
    description:
      "This Spring Boot application manages users with CRUD operations, utilizing a MySQL database and a React frontend. It enables creating, reading, updating, and deleting user accounts, ensuring efficient user data management. The React frontend provides a user-friendly interface for seamless interaction with the system.",
    image: "images/projects/usersystem.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Handwritten Digit Recognition - Deep Learning Model using Pytorch.",
    description:
      "The project involves developing and evaluating a Convolutional Neural Network (CNN) model for classifying handwritten digits from the well-known MNIST dataset. The CNN is trained to accurately recognize and classify the digits, showcasing its ability to effectively handle image classification tasks.",
    image: "images/projects/handwritting1.png",
    tag: ["All", "Deep Learning"],
    gitUrl: "https://github.com/yuqiao1205/handwriting-app",
    previewUrl: "/",
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
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
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
          name="Deep Learning"
          isSelected={tag === "Deep Learning"}
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
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
