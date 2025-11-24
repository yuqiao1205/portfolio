import React from "react";
import { useTheme } from "next-themes";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`${
        isSelected
          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400"
          : "text-gray-300 border-slate-600 hover:border-cyan-400 hover:text-cyan-400"
      } rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-all duration-200 transform hover:scale-105`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
