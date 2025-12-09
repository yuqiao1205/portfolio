'use client';

import React, { useState } from 'react';

const AccordionGroup = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: openIndex === index,
            onToggle: () => handleToggle(index),
          });
        }
        return child;
      })}
    </div>
  );
};

export default AccordionGroup;