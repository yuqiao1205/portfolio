"use client";
import React, { useTransition, useState } from "react";
import Link from "next/link";
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
  <li className="w-1/3">React</li>
  <li className="w-1/3">JavaScript</li>
  <li className="w-1/3">HTML/CSS</li>
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
        <li style={{ textDecoration: 'underline' }}>GPA:4.0</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AI Professioanal Certification</li>
        <li>Japanese-Language Proficiency N1</li>
        <li>Japanese-Business Certificate J2</li>
      </ul>
    ),
  },
  // {
  //   title: "Design-Documents",
  //   id: "designdocuments",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>
  //         <Link href="/images/travelwise_design.pdf" passHref>
  //           Download TravelWise App Data Architecture & RestAPI Design & UML &
  //           UX Flows
  //         </Link>
  //       </li>

  //       <li>
  //         <Link href="/images/travelwise_testing.pdf" passHref>
  //           Download TravelWise App Testing Document
  //         </Link>
  //       </li>
  //       <li>
  //         <Link href="/images/travelwise_plan.pdf" passHref>
  //           Download TravelWise App Project Plan
  //         </Link>
  //       </li>
  //     </ul>
  //   ),
  // },
  {
    title: "PPT",
    id: "presentationppt",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <Link href="/images/solid_ppt.pdf">
            SOLID Principles  Presentation 
          </Link>
        </li>
        <li>
          <Link href="/images/dp_ppt.pdf" passHref>
            Handwritten Digit Recognition
          </Link>
        </li>
        <li>
          <Link href="/images/onlineshop_ppt.pdf" passHref>
            OnlineShop Database Presentation
          </Link>
        </li>
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
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="images/yandrinking.jpg"
          alt="hero image"
          className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-gray mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m graduating with a Computer Science degree from SFSU this
            month, where I have honed my skills in a variety of technologies,
            including Java, Node.js, React.js, Next.js, C++, Python, database
            management, cloud infrastructure, and web development.
          </p><br></br>
          <p className="text-base lg:text-lg">
            One of my notable achievements is the development of a
            comprehensive travel website, where I single-handedly designed and
            implemented entire the frontend, backend, REST API, database
            architecture, and managed its deployment on the Azure cloud server.
            In addition, I integrated advanced functionalities into the website
            by leveraging the OpenAI API for text generation and vision. 
          </p>
          <br></br>

          <p className="text-base lg:text-lg">
            I am deeply passionate about software development and aspire to
            leverage my skills in leadership, communication, teamwork, and
            problem-solving to create innovative solutions that not only enhance
            user experiences but also contribute to technological advancements
            in the field.
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
       
            <TabButton
              selectTab={() => handleTabChange("presentationppt")}
              active={tab === "PPT"}
            >
              {" "}
              PPT{" "}
            </TabButton>
          </div>
          <br></br>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
