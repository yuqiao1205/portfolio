'use client';

import React from 'react';
import AccordionGroup from './AccordionGroup';
import Accordion from './Accordion';

const TravelWiseFeatures = () => {
  return (
    <div className="mt-4">
      <p className="font-bold">🚀 Features</p>
      <p style={{ color: '#fbbf24' }} className="mb-4">
        Click on each feature title below to expand and view details.
      </p>
      
      <AccordionGroup>
        <Accordion title="🔐 User Authentication">
          <span>
            • Users can log in using username and password.<br />
            • System checks whether the username exists.<br />
            • Passwords are hashed and verified securely.<br />
            • Incorrect username or password shows an error message.<br />
            • Users can register through a form with real-time input validation.<br />
            • Successful registration redirects users to the login page.
          </span>
        </Accordion>

        <Accordion title="👤 User Profile">
          <span>
            <strong>Profile Editing</strong><br />
            • Users can update profile details: email, nickname, full name, city, interests.<br />
            • Form validates all fields before updating the database.<br />
            • Users can upload a profile image (image type checked).<br />
            • Users can delete their account.<br />
            <strong>Profile Viewing</strong><br />
            • Users can view other authors' profiles by clicking their avatar in posts.<br />
            • Users can access their own profile settings page.
          </span>
        </Accordion>

        <Accordion title="📝 Blog Post Management">
          <span>
            <strong>Create Post</strong><br />
            • Registered users can create blog posts.<br />
            • Must fill all required fields.<br />
            • Must upload a valid image file.<br />
            • Select a category for the post.<br />
            • Select one or more themes via checkboxes.<br />
            • Input validation ensures all data is accurate before publishing.<br />
            <strong>Edit Post</strong><br />
            • Users can edit their own posts and see all previous details pre-filled.<br />
            • Users can change the post image (validated as an image).<br />
            • All inputs are revalidated before updating.<br />
            <strong>Post Ownership Logic</strong><br />
            • Edit and delete buttons only appear if the post belongs to the logged-in user.
          </span>
        </Accordion>

        <Accordion title="📚 Browsing & Categories">
          <span>
            • Users can browse posts by specific themes (adventure, beach, family travel, etc.).<br />
            • Users can browse posts by region (Asia, Europe, America, etc.).<br />
            • Users can search posts by keywords, region, title, or author.<br />
            • A general "search all" option supports keyword-based search across everything.
          </span>
        </Accordion>

        <Accordion title="⭐ User Interaction">
          <span>
            • Users can like posts.<br />
            • Users can comment on posts.<br />
            • Users can follow other users.<br />
            • Users can add posts to their favorites.
          </span>
        </Accordion>

        <Accordion title="📄 Personalized User Content">
          <span>
            <strong>User's Own Posts</strong><br />
            • Users can view a list of all posts they have created.<br />
            • Users can edit or delete posts directly from "My Posts List".<br />
            <strong>Favorite Posts</strong><br />
            • Users can view posts they have saved in "My Favorites List".<br />
            • Users can remove posts from favorites.<br />
            <strong>Followed Users</strong><br />
            • Users can view posts created by users they follow.
          </span>
        </Accordion>

        <Accordion title="🌍 Country Information">
          <span>
            • Users can input a country name.<br />
            • System displays details such as language, currency, region, population, etc.
          </span>
        </Accordion>

        <Accordion title="☀️ Weather Information">
          <span>
            • Users input a city name.<br />
            • System returns real-time weather and a 7-day forecast to help trip planning.
          </span>
        </Accordion>

        <Accordion title="📍 Nearby Places Search">
          <span>
            • Users can search for nearby restaurants, cafes, and bars.<br />
            • Results can be filtered or sorted by rating and category.
          </span>
        </Accordion>

        <Accordion title="🖼️ AI Image Recognition">
          <span>
            • Users can upload a photo of any place or landmark.<br />
            • The AI analyzes the image and identifies the location.<br />
            • The system returns details such as place name, country, and notable information.
          </span>
        </Accordion>

        <Accordion title="🤖 AI Travel Chatbot">
          <span>
            • Users can ask travel-related questions.<br />
            • AI bot responds with helpful tips, ideas, and suggested plans.
          </span>
        </Accordion>
      </AccordionGroup>
    </div>
  );
};

export default TravelWiseFeatures;