'use client';

import React from 'react';

const Accordion = ({ title, children, isOpen = false, onToggle }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={onToggle}
        className="w-full text-left py-3 px-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-between"
      >
        <span className="font-medium text-gray-900 dark:text-white">{title}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-3 text-gray-700 dark:text-gray-300">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;