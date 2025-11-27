import React from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import ProjectImageGallery from "../../components/ProjectImageGallery";
import BackToProjectsLink from "../../components/BackToProjectsLink";
import projectsData from "../../data/projects";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

const ProjectDetailPage = ({ params }) => {
  const id = parseInt(params.id);
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <BackToProjectsLink />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tag.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
            <ProjectImageGallery imgUrls={project.imgUrls} />
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              {project.gitUrl && (
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 lg:px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 text-sm lg:text-base"
                >
                  <CodeBracketIcon className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                  View Source Code
                </a>
              )}
              {project.previewUrl && (
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 lg:px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-colors duration-200 text-sm lg:text-base"
                >
                  <EyeIcon className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                  Live Preview
                </a>
              )}
              {project.worksUrl && (
                <a
                  href={project.worksUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 lg:px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-colors duration-200 text-sm lg:text-base"
                >
                  View Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
                Project Overview
              </h2>
              <div className="prose prose-sm lg:prose-lg dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                  {typeof project.description === 'string' ? (
                    <p>{project.description}</p>
                  ) : (
                    project.description
                  )}
                </div>
              </div>
            </div>


            {/* Technologies Used */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.title.split(' - ')[1]?.split(', ').map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 lg:px-3 py-1 bg-gradient-to-r from-cyan-100 to-pink-100 dark:from-cyan-900 dark:to-pink-900 text-cyan-800 dark:text-cyan-200 rounded-full text-xs lg:text-sm font-medium"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
                Project Links
              </h3>
              <div className="space-y-2 lg:space-y-3">
                {project.gitUrl && (
                  <div className="flex items-center">
                    <CodeBracketIcon className="h-4 w-4 lg:h-5 lg:w-5 text-cyan-500 mr-2 lg:mr-3" />
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 underline text-sm lg:text-base"
                    >
                      GitHub Repository
                    </a>
                  </div>
                )}
                {project.previewUrl && (
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 lg:h-5 lg:w-5 text-cyan-500 mr-2 lg:mr-3" />
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 underline text-sm lg:text-base"
                    >
                      Live Preview
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
