"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";
import { getImagePath } from "../utils/basePath";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-3 gap-4 text-pink-200">
        <li className="w-1/4">Java</li>
        <li className="w-1/4">Node.js</li>
        <li className="w-1/4">Express</li>
        <li className="w-1/4">React</li>
        <li className="w-1/4">NextJs</li>
        <li className="w-1/4">ReactNative</li>
        <li className="w-1/4 ">JavaScript</li>

        <li className="w-1/4">HTML/CSS</li>

        <li className="w-1/4">Python</li>
        <li className="w-1/4">PyTorch</li>
        <li className="w-1/4">C++</li>

        <li className="w-1/4">SpringBoot</li>
        <li className="w-1/4">MySQL</li>
        <li className="w-1/4">MongoDB</li>
        <li className="w-1/4">AI/ML</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-2 text-white">
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
      <div className="space-y-2 text-white">
        <div className="flex items-center group relative">
          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
          <span>IBM RAG and Agentic Al Professional Certification</span>
          <img src={getImagePath("/images/ibm_certificate.png")} alt="IBM Certificate" className="w-8 h-8 ml-3 rounded cursor-pointer" />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            <img src={getImagePath("/images/ibm_certificate.png")} alt="IBM Certificate Full" className="w-64 h-auto border border-gray-300 rounded shadow-lg" />
          </div>
        </div>
        <div className="flex items-center group relative">
          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
          <span>Meta Front-End Developer Professional Certification</span>
          <img src={getImagePath("/images/meta_certificate.png")} alt="Meta Certificate" className="w-8 h-8 ml-3 rounded cursor-pointer" />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            <img src={getImagePath("/images/meta_certificate.png")} alt="Meta Certificate Full" className="w-64 h-auto border border-gray-300 rounded shadow-lg" />
          </div>
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
          className="block p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200 text-yellow-400 hover:text-cyan-300"
        >
          📊 SOLID Principles Presentation
        </Link>
        <Link
          href="/images/dp_ppt.pdf"
          className="block p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200 text-yellow-400 hover:text-cyan-300"
        >
          🤖 Handwritten Digit Recognition
        </Link>
        <Link
          href="/images/onlineshop_ppt.pdf"
          className="block p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors duration-200 text-yellow-400 hover:text-cyan-300"
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
        <div className="relative flex flex-col items-center gap-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-lg blur-xl opacity-30"></div>
            <img
              src={getImagePath("/images/yandrinking.jpg")}
              alt="About me image 1"
              className="relative rounded-lg shadow-2xl w-full h-auto max-w-sm mx-auto border-4 border-cyan-300/50"
              width={400}
              height={400}
            />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur-xl opacity-30"></div>
            <img
              src={getImagePath("/images/aboutmecs.jpg")}
              alt="About me image 2"
              className="relative rounded-2xl shadow-2xl w-full h-auto max-w-sm mx-auto border-4 border-pink-300/50"
              width={350}
              height={350}
            />
          </div>
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
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-600">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
