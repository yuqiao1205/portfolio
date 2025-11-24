import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const BackToProjectsLink = () => {
  return (
    <a
      href="/#projects"
      className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-4 cursor-pointer"
    >
      <ArrowLeftIcon className="h-5 w-5 mr-2" />
      Back to Projects
    </a>
  );
};

export default BackToProjectsLink;
