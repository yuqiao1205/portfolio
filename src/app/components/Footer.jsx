// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer border-l-transparent border-r-transparent">
//       <div className="container p-12 flex justify-between">
//         <span>Yan Peng</span>
//         <p>All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-gray-100 via-white to-gray-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-pink-500/5"></div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Yan Peng
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Fullstack Software Engineer passionate about creating innovative solutions
              and bringing ideas to life through code.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/yuqiao1205"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200/80 dark:bg-slate-800/50 rounded-lg hover:bg-gray-300/80 dark:hover:bg-slate-700/50 transition-colors group"
              >
                <FaGithub className="text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/laurenpy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200/80 dark:bg-slate-800/50 rounded-lg hover:bg-gray-300/80 dark:hover:bg-slate-700/50 transition-colors group"
              >
                <FaLinkedin className="text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:loran1226@gmail.com"
                className="p-2 bg-gray-200/80 dark:bg-slate-800/50 rounded-lg hover:bg-gray-300/80 dark:hover:bg-slate-700/50 transition-colors group"
              >
                <FaEnvelope className="text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                About
              </Link>
              <Link href="#projects" className="block text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                Projects
              </Link>
              <Link href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                Contact
              </Link>
              <Link href="/images/yan_newresume.pdf" className="block text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                Resume
              </Link>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "Python", "Java", "MySQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-200/80 dark:bg-slate-800/50 text-cyan-400 rounded-full text-xs border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Yan Peng. All rights reserved.
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-500 text-sm">
              <span>Built with</span>
              <span className="mx-1 text-cyan-400">Next.js</span>
              <span>&</span>
              <span className="mx-1 text-pink-400">Tailwind CSS</span>
              <FaHeart className="mx-1 text-red-400" />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 dark:via-cyan-400/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 dark:via-pink-400/50 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;

