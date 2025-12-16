"use client";
import React, { useTransition, useState } from "react";
import Link from "next/link";
import TabButton from "./TabButton";
import { getImagePath } from "../utils/basePath";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm font-semibold text-slate-800 dark:text-pink-100">
        {["Java", "Node.js", "Express", "React", "Next.js", "React Native", "JavaScript", "HTML/CSS", "Python", "PyTorch", "C++", "Spring Boot", "MySQL", "MongoDB", "AI/ML"].map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true"></span>
            {skill}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-3 text-slate-800 dark:text-white">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
          <span>Bachelor's degree: Computer Science</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
          <span>San Francisco State University</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
          <span className="underline decoration-cyan-500">GPA: 4.0</span>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-3 text-slate-800 dark:text-white">
        <div className="flex items-center group relative">
          <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
          <span>IBM RAG and Agentic Al Professional Certification</span>
          <img src={getImagePath("/images/ibm_certificate.png")} alt="IBM Certificate" className="w-8 h-8 ml-3 rounded cursor-pointer" />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            <img src={getImagePath("/images/ibm_certificate.png")} alt="IBM Certificate Full" className="w-64 h-auto border border-gray-300 rounded shadow-lg" />
          </div>
        </div>
        <div className="flex items-center group relative">
          <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
          <span>Meta Front-End Developer Professional Certification</span>
          <img src={getImagePath("/images/meta_certificate.png")} alt="Meta Certificate" className="w-8 h-8 ml-3 rounded cursor-pointer" />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            <img src={getImagePath("/images/meta_certificate.png")} alt="Meta Certificate Full" className="w-64 h-auto border border-gray-300 rounded shadow-lg" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
          <span>Japanese-Language Proficiency N1</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
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
          className="block p-3 rounded-xl border border-slate-200/70 bg-white text-slate-800 dark:bg-slate-700/50 dark:text-yellow-300 hover:border-cyan-400/70 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors duration-200 font-medium"
        >
          📊 SOLID Principles Presentation
        </Link>
        <Link
          href="/images/dp_ppt.pdf"
          className="block p-3 rounded-xl border border-slate-200/70 bg-white text-slate-800 dark:bg-slate-700/50 dark:text-yellow-300 hover:border-cyan-400/70 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors duration-200 font-medium"
        >
          🤖 Handwritten Digit Recognition
        </Link>
        <Link
          href="/images/onlineshop_ppt.pdf"
          className="block p-3 rounded-xl border border-slate-200/70 bg-white text-slate-800 dark:bg-slate-700/50 dark:text-yellow-300 hover:border-cyan-400/70 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors duration-200 font-medium"
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
    <section id="about" className="py-20 px-4 xl:px-16">
      <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400">
              Get to know me
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300">
              I'm wrapping up my Computer Science degree at SFSU, where I've built production-ready web apps,
              system integrations, and cloud deployments focusing on clean architecture and delightful user experiences.
            </p>
            <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300">
              From architecting a travel platform end-to-end on Azure to experimenting with OpenAI integrations and
              multimodal workflows, I love connecting design thinking with reliable engineering practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[{
              label: "Years coding",
              value: "5+",
              detail: "Academic & freelance builds"
            }, {
              label: "Shipped projects",
              value: "30+",
              detail: "From SaaS dashboards to mobile"
            }, {
              label: "Tech focus",
              value: "Fullstack",
              detail: "React · Next.js · Node · Java"
            }, {
              label: "Collaboration",
              value: "Global",
              detail: "Team lead & mentor roles"
            }].map((card) => (
              <div
                key={card.label}
                className="p-5 rounded-2xl border border-slate-200/30 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm shadow-lg"
              >
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{card.value}</p>
                <p className="text-sm uppercase tracking-widest text-cyan-500 mb-1">{card.label}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{card.detail}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200/30 dark:border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-6 text-gray-100 shadow-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-3">Currently exploring</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2"><span className="text-pink-400">▹</span>Agentic workflows that blend OpenAI APIs with event-driven backends</li>
              <li className="flex items-start gap-2"><span className="text-pink-400">▹</span>Performant UI systems that adapt across desktop, tablet, and mobile</li>
              <li className="flex items-start gap-2"><span className="text-pink-400">▹</span>Observability stacks that keep solo projects production-ready</li>
              <li className="flex items-start gap-2"><span className="text-pink-400">▹</span>Inclusive product storytelling through photography and UI copy</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                Skills
              </TabButton>
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                Education
              </TabButton>
              <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                Certifications
              </TabButton>
              <TabButton selectTab={() => handleTabChange("ppts")} active={tab === "ppts"}>
                Presentations
              </TabButton>
            </div>
            <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-slate-200/40 dark:border-slate-700/60 shadow-lg min-h-[180px]">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-pink-500/20 rounded-[32px] blur-3xl -z-10"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-[32px] overflow-hidden border border-cyan-200/40 shadow-2xl">
              <img
                src={getImagePath("/images/greenyan.jpg")}
                alt="Yan collaborating over coffee"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[28px] overflow-hidden border border-pink-200/40 shadow-xl">
              <img
                src={getImagePath("/images/yphi.jpg")}
                alt="Workshop snapshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[28px] overflow-hidden border border-violet-200/40 shadow-xl">
              <img
                src={getImagePath("/images/aboutmecs.jpg")}
                alt="Outdoor portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 right-2 sm:right-8 bg-white/90 dark:bg-slate-900/90 border border-slate-200/40 dark:border-slate-700/60 rounded-2xl p-5 shadow-2xl backdrop-blur-md max-w-xs">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-2">Beyond code</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Multilingual storyteller & lifelong learner
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <p className="text-xl font-bold text-cyan-500">3</p>
                <p className="uppercase tracking-wide text-xs">Languages</p>
              </div>
              <div>
                <p className="text-xl font-bold text-pink-500">20+</p>
                <p className="uppercase tracking-wide text-xs">Art works</p>
              </div>
              <div>
                <p className="text-xl font-bold text-violet-500">∞</p>
                <p className="uppercase tracking-wide text-xs">Ideas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
