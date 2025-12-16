"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const highlightStats = [
    { label: "Projects", value: "30+", detail: "Full-stack launches" },
    { label: "Focus", value: "AI x Web", detail: "Vision & automation" },
    { label: "Availability", value: "Jan 2025", detail: "Internships & SWE" },
    { label: "Based", value: "SF Bay", detail: "Hybrid / Remote" },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-slate-900/5 dark:bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-purple-500/15 to-pink-500/25"></div>
      <div className="absolute inset-0 bg-slate-900/15 dark:bg-transparent"></div>
      <div className="absolute -top-32 -right-48 w-96 h-96 bg-cyan-400/30 blur-[140px] rounded-full"></div>
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-pink-400/20 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-10 py-20 lg:py-28 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-center lg:text-left">
              <p className="inline-flex items-center gap-2 text-xs tracking-[0.4em] uppercase text-cyan-500 bg-white/70 dark:bg-white/5 px-4 py-2 rounded-full border border-cyan-400/30">
                Software Engineer · Storyteller
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Yan Peng</span>
                <br />
                <TypeAnimation
                  sequence={["Web Developer", 1500, "Backend Engineer", 1500, "Fullstack Developer", 1500]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="block text-3xl sm:text-4xl bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent"
                />
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                I build human-centered digital experiences that connect resilient APIs, accessible design systems,
                and AI-assisted automation. Currently exploring how agentic workflows can power travel tech and
                community platforms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Hire Me
              </Link>
              <Link
                href="/images/yan_newresume.pdf"
                download
                className="px-8 py-4 rounded-full border-2 border-cyan-400 text-cyan-500 hover:bg-cyan-400/10 font-semibold transition-all duration-300"
              >
                Download Resume
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Link
                href="https://yuqiao1205.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-2xl border border-emerald-300/60 bg-white/80 dark:bg-slate-900/40 px-5 py-4 text-center text-sm font-semibold text-emerald-700 dark:text-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all"
              >
                View Live Resume ↗
              </Link>
              <div className="md:col-span-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="https://techblog-pi-opal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-5 py-4 text-center text-sm font-semibold text-white shadow-lg transition-all"
                >
                  Visit My Tech Blog ↗
                </Link>
                <Link
                  href="https://image-gallery-chi-murex.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 px-5 py-4 text-center text-sm font-semibold text-white shadow-lg transition-all"
                >
                  View My Art Works ↗
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlightStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/60 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/40 px-4 py-5 shadow-lg text-center"
                >
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-500 mt-1">{stat.label}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">{stat.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-pink-400/30 blur-3xl"></div>
            <div className="relative rounded-[36px] bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/40 dark:border-slate-800/80 shadow-2xl p-6">
              <div className="relative rounded-[28px] overflow-hidden border border-cyan-200/60 dark:border-cyan-300/30">
                <img
                  src="images/yanprofile.jpg"
                  alt="Yan Peng portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">Creative Builder</p>
                  <p className="text-2xl font-semibold">Turning ideas into shipping products</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/60 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/40 p-4 text-center">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">UI Kits</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Design systems & accessibility</p>
                </div>
                <div className="rounded-2xl border border-white/60 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/40 p-4 text-center">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">AI Ops</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Prompt & agent workflows</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/60 dark:border-slate-700/70 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 px-5 py-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-gray-300">Currently</p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">Designing event-driven AI prototypes</p>
                </div>
                <span className="text-3xl">⚡️</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
