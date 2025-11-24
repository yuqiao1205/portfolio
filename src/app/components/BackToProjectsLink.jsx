"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const BackToProjectsLink = () => {
  const router = useRouter();

  const handleBackClick = (e) => {
    e.preventDefault();
    router.push('/#projects');
    
    // Try multiple times to ensure the element is found and scrolled to
    const scrollToProjects = (attempts = 0) => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < 10) {
        setTimeout(() => scrollToProjects(attempts + 1), 100);
      }
    };
    
    setTimeout(() => scrollToProjects(), 100);
  };

  return (
    <a
      href="/#projects"
      onClick={handleBackClick}
      className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-4 cursor-pointer"
    >
      <ArrowLeftIcon className="h-5 w-5 mr-2" />
      Back to Projects
    </a>
  );
};

export default BackToProjectsLink;
