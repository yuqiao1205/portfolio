"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const theme = "dark"; // You should replace this with your actual logic to get the current theme

  // Define the color of the GitHub icon based on the current theme
  const githubColor = theme === "dark" ? "#cbd5e1" : "#f1f5f9";
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="h-60 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold my-2">Let&apos;s Connect</h5>
        <p className="text-[#94a3b8] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <h2 className="text-[#94a3b8] mb-4 max-w-md">
          You can also reach me at{" "}
          <a
            href="mailto:loran1226@gmail.com"
            className="text-[#55a4dd] underline"
          >
            loran1226@gmail.com
          </a>
          .
        </h2>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/yuqiao1205">
            <FaGithub size={32} color={githubColor} />
            <span>GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/laurenpy/">
            <FaLinkedin size={32} color="#0077b5" />
            <span>Linkedin</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
