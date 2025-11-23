"use client";
import React, { useTransition, useState } from "react";
import Link from "next/link";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          "Java", "Node.js", "Express", "React", "Next.js", "React Native",
          "JavaScript", "HTML/CSS", "Python", "PyTorch", "C++", "Spring Boot",
          "MySQL", "MongoDB"
        ].map((skill, index) => (
          <div key={index} className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-lg p-3 text-center text-white font-medium border border-cyan-400/30 hover:border-cyan-400 transition-colors duration-200">
            {skill}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-2 text-gray-300">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
          <span>Bachelor's degree: Computer Science</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
          <span>San Francisco State University</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
          <span className="underline decoration-cyan-400">GPA: 4.0</span>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-2 text-gray-300">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
          <span>AI Professional Certification</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
          <span>Japanese-Language Proficiency N1</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
          <span>Japanese-Business Certificate J2</span>
        </div>
      </div>
    ),
  },
  {
    title: "Presentations",
    id: "ppts",
    content: (
      <div className="space-y-3">
        <Link
          href="/images/solid_ppt.pdf"
          className="block p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200 text-cyan-400 hover:text-cyan-300"
        >
          📊 SOLID Principles Presentation
        </Link>
        <Link
          href="/images/dp_ppt.pdf"
          className="block p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200 text-cyan-400 hover:text-cyan-300"
        >
          🤖 Handwritten Digit Recognition
        </Link>
        <Link
          href="/images/onlineshop_ppt.pdf"
          className="block p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200 text-cyan-400 hover:text-cyan-300"
        >
          🛒 OnlineShop Database Presentation
        </Link>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="py-16 px-4 xl:px-16">
      <div className="md:grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-lg blur-xl opacity-30"></div>
          <img
            src="images/yandrinking.jpg"
            alt="About me image"
            className="relative rounded-lg shadow-2xl w-full h-auto max-w-md mx-auto md:mx-0"
            width={500}
            height={500}
          />
        </div>
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-4">
            I'm graduating with a Computer Science degree from SFSU this
            month, where I have honed my skills in a variety of technologies,
            including Java, Node.js, React.js, Next.js, C++, Python, database
            management, cloud infrastructure, and web development.
          </p>
          <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-4">
            One of my notable achievements is the development of a comprehensive
            travel website, where I single-handedly designed and implemented
            the entire frontend, backend, REST API, database architecture, and
            managed its deployment on the Azure cloud server. In addition, I
            integrated advanced functionalities into the website by leveraging
            the OpenAI API for text generation and vision.
          </p>
          <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-8">
            I am deeply passionate about software development and aspire to
            leverage my skills in leadership, communication, teamwork, and
            problem-solving to create innovative solutions that not only enhance
            user experiences but also contribute to technological advancements
            in the field.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("ppts")}
              active={tab === "ppt"}
            >
              Presentations
            </TabButton>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
