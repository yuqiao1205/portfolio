import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const EmailSection = () => {
  return (
    <section id="contact" className="py-16 px-4 xl:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          Feel free to reach out!
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaEnvelope className="text-cyan-400 mr-4 text-xl" />
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a
                        href="mailto:loran1226@gmail.com"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
                      >
                        loran1226@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-cyan-400 mr-4 text-xl" />
                    <div>
                      <p className="text-gray-300 text-sm">Location</p>
                      <p className="text-white text-lg font-medium">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/yuqiao1205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors group"
                  >
                    <FaGithub className="text-cyan-400 mr-2 text-lg group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/laurenpy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors group"
                  >
                    <FaLinkedin className="text-cyan-400 mr-2 text-lg group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm currently seeking new opportunities as a software engineer. Whether you're looking to
                  collaborate on an exciting project, discuss potential job opportunities, or just want to
                  connect with someone passionate about technology, I'd love to hear from you.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-3">What I'm Looking For</h4>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Full-time software engineering positions
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Collaborative project opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Technical discussions and networking
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    Mentorship and learning opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
