"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "TravelWise - React, Nodejs, Express, MySQL, Azure.",
    description: (
      <span>
        This application revolutionizes travel blogging by seamlessly
        integrating advanced features tailored for modern travelers, including
        an AI-powered chatbot for personalized recommendations, destination
        vision feature, and real-time weather updates, enhancing trip planning.
        Complemented by essential project components such as the{" "}
        <Link
          href="/images/travelwise_plan.pdf"
          download
          className="text-sm underline text-pink-500"
        >
          TravelWise project plan
        </Link>
        ,{" "}
        <Link
          href="/images/travelwise_testing.pdf"
          download
          className="text-sm underline text-pink-500"
        >
          Testing Document
        </Link>
        ,{" "}
        <Link
          href="/images/travelwise_design.pdf"
          download
          className="text-sm underline text-pink-500"
        >
          architecture & REST API design & UML/UX Flows.
        </Link>
      </span>
    ),
    imgUrls: [
      "images/projects/travelwise.jpg", // Now we use an array of images
      "images/projects/travelwise.jpg", // Add additional images here
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/blogproject",
    previewUrl: "https://tp2024.westus3.cloudapp.azure.com/",
    worksUrl: "https://tp2024.westus3.cloudapp.azure.com/",
  },

  {
    id: 11,
    title: "EventHub - SpringBoot, Mybatis, React, Material UI, MySQL.",
    description:
      "EventHub is a web application built using SpringBoot, MyBatis, React, Material UI, and MySQL. It provides full CRUD functionality for managing events, categories, and articles. Users can also update personal settings such as profile pictures, passwords, and other user information. The application is fully responsive, ensuring a seamless experience across different devices.",

    imgUrls: [
      "images/projects/event_welcome.png",
      "images/projects/event_landing.png", // Now we use an array of images

      "images/projects/event_article.png", // Add additional images here
      "images/projects/event_userinfo.png",
      "images/projects/event_updateuser.png",
      "images/projects/event_updatepassword.png",
      "images/projects/event_addcat.png",
      "images/projects/event_addarticle.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/springboot_event",
    previewUrl: "",
    worksUrl: "",
  },
  {
    id: 2,
    title:
      "Photo Gallery - Nodejs, Express, Javascript, MySQL, Handlebar, CSS, HTML.",
    description:
      "The project implements a range of features catering to both unregistered and registered users, including login, register, post images, search, and make comments functionalities. Unregistered users can browse and search for content, while registered users gain additional capabilities such as posting images and making comments. The system offers a seamless and engaging experience, allowing users to interact with the platform's content in a dynamic and user-friendly manner.",
    imgUrls: ["images/projects/imagepost.png"],
    // image: "images/projects/imagepost.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/photo-site",
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
        My Projects 2
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
