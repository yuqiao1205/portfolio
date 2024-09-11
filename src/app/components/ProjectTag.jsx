import React from "react";
import { useTheme } from "next-themes";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const buttonStyles = isSelected
    ? "border-primary-500"
    : isDarkMode
    ? "text-[#ADB7BE] border-slate-600 hover:border-white"
    : "text-[#ADB7BE] border-slate-600 hover:border-[#a5f3fc]";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
