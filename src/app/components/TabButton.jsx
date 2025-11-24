import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
        active
          ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30"
          : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
