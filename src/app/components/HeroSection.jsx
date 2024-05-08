"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
// import resume from "../../../public/images/yan_resume_pink.pdf";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"> */}

            {/* Hello, I&apos;m{" "}
            </span> */}
            <span
              style={{
                // background: `-webkit-linear-gradient(left, #9C89B8, #F0A6CA, #EFC3E6, #F0E6EF)`,
                // background: `-webkit-linear-gradient(left,#FFC8DD, #FFAFCC, #BDEOFE, #A2D2FF)`,

                background: `-webkit-linear-gradient(left, #64A6BD, #90A8C3, #ADA7C9, #D7B9D5, #F4CAE0)`,
                // background: `-webkit-linear-gradient(left, #FFD6FF, #E7C6FF, #C8B6FF, #B8C0FF, #BBD0FF)`,
                // background: `-webkit-linear-gradient(left, #10E0FF, #0086EB, #006EE9, #FFCD00, #FFEF00)`,



                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Web Developer", 1000, "Backend Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            An energetic and passionate undergraduate student seeking an
            internship as a software engineer opportunity.
          </p>
          <div>
            <Link
              href="/#contact"
              // className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              <button className="block  hover:bg-slate-800 rounded-full px-5 py-2">
                Hire Me
              </button>
            </Link>
            {/* <a
              href={resume}
              download="yan_resume_pink1.1.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </a> */}

            <Link
              href="/portfolio/images/yan_resume_pink.pdf"
              download
              // href="/images/yan_resume_pink1.1.pdf"
              // to={resume}
              // className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              <button className="block hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#334155] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/portfolio/images/py5.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={360}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
