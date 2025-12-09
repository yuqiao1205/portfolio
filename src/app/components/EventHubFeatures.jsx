'use client';

import React from 'react';
import AccordionGroup from './AccordionGroup';
import Accordion from './Accordion';

const EventHubFeatures = () => {
  return (
    <div className="mt-4">
      <p className="font-bold">🚀 Features</p>
      <p style={{ color: '#fbbf24' }} className="mb-4">
        Click on each feature title below to expand and view details.
      </p>
      
      <AccordionGroup>
        <Accordion title="📅 Event Posting">
          <span>
            • Users can create and publish new events.<br />
            • Each event includes essential details such as title, time,category, description, and event information.
          </span>
        </Accordion>

        <Accordion title="👤 User Profile Management">
          <span>
            • Users can update their personal profile information, including name, email, and other details.<br />
            • Users can upload or change their profile picture.<br />
            • Users can update their password securely.
          </span>
        </Accordion>

        <Accordion title="🏷️ Category Management">
          <span>
            • Users can create new event categories.<br />
            • Users can edit or update existing categories to better organize events.
          </span>
        </Accordion>
      </AccordionGroup>
    </div>
  );
};

export default EventHubFeatures;