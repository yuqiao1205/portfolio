"use client";
import React from "react";
// import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="py-16 px-4 xl:px-16 relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span
              style={{
                background: `-webkit-linear-gradient(left, #00FFFF, #8A2BE2, #FF1493, #FF4500, #FFD700)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                1500,
                "Backend Engineer",
                1500,
                "Fullstack Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ fontSize: "35px", display: "inline-block" }}
              className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg mb-6 lg:text-xl text-gray-700 dark:text-gray-300"
          >
            An energetic and passionate undergraduate CS major student seeking
            internship opportunities as a software engineer. Let's build something amazing together!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Hire Me
            </Link>

            <Link
              href="/images/yan_newresume.pdf"
              download
              className="px-6 py-3 w-full sm:w-fit rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </Link>

            <Link
              href="https://yuqiao1205.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Live Resume
            </Link>

            <Link
              href="https://techblog-pi-opal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Visit My Tech Blog
            </Link>

            <Link
              href="https://image-gallery-chi-murex.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              My Image Gallery
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative rounded-full bg-gradient-to-br from-slate-700 to-slate-900 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] border-4 border-cyan-400/20 shadow-2xl">
              <img
                src="images/yanprofile.jpg"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-[230px] h-[230px] lg:w-[380px] lg:h-[380px] object-cover border-4 border-cyan-400/30"
              />
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
