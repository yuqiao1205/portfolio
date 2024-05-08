"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-wrap">
  <li className="w-1/3">Java</li>
  <li className="w-1/3">Node.js</li>
  <li className="w-1/3">Express</li>
  <li className="w-1/3">JavaScript</li>
  <li className="w-1/3">React</li>
  <li className="w-1/3">HTML / CSS</li>
  <li className="w-1/3">MySQL</li>
  <li className="w-1/3">Python</li>
  <li className="w-1/3">C++</li>
</ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor’ s degree: Computer Science</li>
        <li>San Francisco State University</li>
        <li>GPA:4.0</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Japanese-Language Proficiency N1</li>
        <li>Japanese-Business Certificate J2</li>
      </ul>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/yan1.jpg" width={500} height={500} alt="aboutme" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I&apos;m Originally from China, I have a passion for exploring diverse
          cultures and cuisines. Moreover, my fascination extends to the realms
          of technology, particularly in the fields of deep learning, artificial
          intelligence (AI), and software development. I am particularly
          interested in backend development. Leveraging my skills in software
          development, I aspire to innovate and create solutions that enhance
          user experiences and contribute to technological advancements.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
