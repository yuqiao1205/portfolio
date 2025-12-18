import TravelWiseFeatures from '../components/TravelWiseFeatures';
import EventHubFeatures from '../components/EventHubFeatures';

const projectsData = [
  {
    id: 1,
    title: "TravelWise - React, Nodejs, Express, MySQL, Azure.",
    description: "A comprehensive travel blog platform with AI-powered features for personalized recommendations, destination analysis, and real-time weather updates.",
    detailedDescription: (
      <div>
        <p>
          TravelWise is a comprehensive travel planning and social platform that enables users to discover destinations, share experiences, connect with fellow travelers, and access real-time travel information, including weather, local businesses, and country details. This app transforms travel blogging by integrating advanced features for modern travelers, such as an AI-powered chatbot for personalized recommendations, a destination vision feature, and real-time weather updates, all designed to enhance trip planning. It is further supported by essential project components such as the{" "}
          <a
            href="/images/travelwise_plan.pdf"
            download
            className="text-sm underline text-pink-500"
          >
            TravelWise project plan
          </a>
          ,{" "}
          <a
            href="/images/travelwise_testing.pdf"
            download
            className="text-sm underline text-pink-500"
          >
            Testing Document
          </a>
          ,{" "}
          <a
            href="/images/travelwise_design.pdf"
            download
            className="text-sm underline text-pink-500"
          >
            architecture & REST API design & UML/UX Flows.
          </a>
        </p>

        <TravelWiseFeatures />
      </div>
    ),
    imgUrls: [
      "/images/projects/blog/01travelhomepage.png",
      "/images/projects/blog/travelhomepage2.png",
      "/images/projects/blog/travelsinglepage.png",
      "/images/projects/blog/travelregion.png",
      "/images/projects/blog/travellogin.png",
      "/images/projects/blog/travelregister.png",
      "/images/projects/blog/traveladdpost.png",
      "/images/projects/blog/travelupdatepost.png",
      "/images/projects/blog/travelweather.png",
      "/images/projects/blog/travelyelpsearch.png",
      "/images/projects/blog/travelyourposts.png",
      "/images/projects/blog/travelaccountsetting.png",
      "/images/projects/blog/travelprofile.png",
      "/images/projects/blog/travelsearchresult.png",
      "/images/projects/blog/travelchatbot.png",
      "/images/projects/blog/traveldestination.png",
      "/images/projects/blog/travelyourposts.png",
      "/images/projects/blog/userfeatures.png",
      "/images/projects/blog/travelsubscribe.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/travelwise_v2.0",
    previewUrl: "",
    worksUrl: "",
  },
  {
    id: 14,
    title: "SurveyHub - TypeScript, Next.js, MongoDB, Tailwind CSS, Recharts, Vercel.",
    description: "A modern survey management system with secure authentication, admin dashboard, flexible survey creation, and real-time data visualization.",
    detailedDescription: (
      <div>
        <p>
          Survey App is a modern survey management system built with Next.js, MongoDB, and TypeScript. It provides a complete platform for creating, managing, and analyzing surveys. The system includes secure user authentication, an intuitive admin dashboard, flexible survey creation tools, and real-time data visualization for survey results.
        </p>
        
        <div className="mt-4">
          <p className="font-bold">🚀 Features</p>
          <p style={{ color: '#fbbf24' }} className="mb-4">
            Click on each feature section below to learn more.
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-cyan-400">👤 User Features</p>
              <span>
                • 📝 Browse and complete available surveys<br />
                • ✅ Single choice, multiple choice, and text answer questions<br />
                • 🔒 One response per survey per user
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🔧 Admin Features</p>
              <span>
                • 🎨 Create and edit surveys with flexible question types<br />
                • 📈 View real-time survey results with charts<br />
                • 📊 Data visualization using Recharts<br />
                • 🗑️ Delete surveys and manage content<br />
                • 👥 Full CRUD operations on surveys
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🛠️ Tech Stack</p>
              <span>
                • Next.js 14 - React framework for production<br />
                • TypeScript - Type-safe JavaScript<br />
                • MongoDB - NoSQL database<br />
                • Tailwind CSS - Utility-first CSS framework<br />
                • Recharts - Data visualization library<br />
                • Vercel - Deployment platform
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    imgUrls: [
      "/images/projects/survey_app/surveyhomepage.png",
      "/images/projects/survey_app/surveylogin.png",
      "/images/projects/survey_app/surveyregister.png",
      "/images/projects/survey_app/admindashboard.png",
      "/images/projects/survey_app/adminresults.png",
      "/images/projects/survey_app/create_survey.png",
      "/images/projects/survey_app/userpage.png",
      "/images/projects/survey_app/usersurveypage.png",
   
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/surveys_app",
    previewUrl: "https://surveyhub-eta.vercel.app/",
    worksUrl: "https://surveyhub-eta.vercel.app/",
  },
  {
    id: 11,
    title: "EventHub - SpringBoot, Mybatis, React, Material UI, MySQL.",
    description: "A responsive event management web application with full CRUD support, personalized account settings, and category management.",
    detailedDescription: (
      <div>
        <p>
          EventHub is a responsive event management web application that enables users to manage events and content with full CRUD support and personalized account settings. Built with a robust Spring Boot backend and a modern React frontend, it provides a seamless experience for organizing and tracking events.
        </p>
        
        <EventHubFeatures />
      </div>
    ),
    imgUrls: [
      "/images/projects/events/event-home.png",
      "/images/projects/events/event-welcome.png",
      "/images/projects/events/event-article.png",
      "/images/projects/events/event-userinfo.png",
      "/images/projects/events/event-updatepicture.png",
      "/images/projects/events/event-updatepassword.png",
      "/images/projects/events/event_addcat.png",
      "/images/projects/events/event-addarticle.png",
      "/images/projects/events/event-addwithclock.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/springboot_event",
    previewUrl: "",
    worksUrl: "",
  },
  {
    id: 13,
    title: "Lauren's YouTube Video Summarizer & Q&A - Next.js 16, React 19, TypeScript, OpenRouter API, LangChain, Tailwind CSS 4",
    description: "An AI-powered web application that summarizes YouTube videos and enables Q&A about video content using advanced language models.",
    detailedDescription: (
      <div>
        <p>
          An AI-powered web application that allows users to summarize YouTube videos and ask questions about their content using advanced language models. This tool helps users quickly understand video content without watching the entire video.
        </p>
        
        <div className="mt-4">
          <p className="font-bold">🚀 Features</p>
          <p style={{ color: '#fbbf24' }} className="mb-4">
            Explore the powerful capabilities of this application.
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-cyan-400">📹 Video Processing</p>
              <span>
                • Video Summarization: Generate concise summaries of YouTube videos in English or Chinese<br />
                • Filter YouTube Videos by Transcript Availability: Search YouTube Videos with Transcripts<br />
                • Q&A Functionality: Ask questions about video content and receive AI-generated answers
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🌐 Language & Interface</p>
              <span>
                • Language Support: Choose between English and Chinese for summaries and responses<br />
                • User-Friendly Interface: Clean, responsive design with intuitive controls<br />
                • Download & copy Summaries: Easily download or copy generated summaries for offline reference
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🤖 AI Capabilities</p>
              <span>
                • Model Selection: Choose from multiple AI LLMs to enhance summarization and Q&A capabilities<br />
                • OpenRouter API integration for multi-model support<br />
                • LangChain for advanced AI workflows
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🛠️ Tech Stack</p>
              <span>
                • Next.js 16 - React framework for production<br />
                • React 19 - UI library with modern hooks<br />
                • TypeScript - Type-safe JavaScript<br />
                • Tailwind CSS 4 - Utility-first CSS framework<br />
                • OpenRouter API - Multi-model AI platform
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    imgUrls: [
      "/images/projects/youtube/homepage_01.png",
      "/images/projects/youtube/homepage_02.png",
      "/images/projects/youtube/result.png",
      "/images/projects/youtube/summary_qa.png",
      "/images/projects/youtube/summary.png",
    ],
    tag: ["All", "AI"],
    gitUrl: "https://github.com/yuqiao1205/youtube_video_summarizer_qa",
    previewUrl: "https://youtube-video-summarizer-qa.vercel.app/",
    worksUrl: "https://youtube-video-summarizer-qa.vercel.app/",
  },
  {
    id: 12,
    title: "AI-safe-beauty - Next.js 14, React 18, Node.js, OpenRouter API, Grok Models, GPT-4o, Puppeteer.",
    description: "An AI-powered cosmetic safety analyzer that assesses product ingredients and provides risk assessments with detailed explanations.",
    detailedDescription: (
      <div>
        <p>
          AI-safe-beauty is a web application that leverages artificial intelligence to analyze cosmetic products and assess their safety based on ingredient composition. The app provides instant risk assessments by categorizing ingredients into high, medium, and low-risk categories, along with an overall safety score and detailed explanations.
        </p>
        
        <div className="mt-4">
          <p className="font-bold">🚀 Features</p>
          <p style={{ color: '#fbbf24' }} className="mb-4">
            Discover how AI helps you make safer cosmetic choices.
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-cyan-400">🔍 Multi-Input Analysis</p>
              <span>
                • Text Analysis: Paste ingredient lists directly for instant safety evaluation<br />
                • Image Recognition: Upload product photos to automatically extract and analyze ingredients using AI-powered OCR<br />
                • URL Scanning: Provide product page URLs for comprehensive web scraping and analysis
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🧪 Intelligent Risk Assessment</p>
              <span>
                • Three-Tier Risk Classification: High, Medium, and Low risk categories<br />
                • Overall Safety Score: Excellent, Fair, or Poor ratings<br />
                • Detailed Explanations: AI-generated insights for each ingredient's safety profile<br />
                • Expert Analysis: Powered by advanced language models trained on cosmetic safety data
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🛠️ Special Technologies</p>
              <span>
                • Puppeteer - Headless browser automation<br />
                • Puppeteer Extra Stealth Plugin - Anti-detection measures for web scraping<br />
                • OpenRouter API with Grok Models and GPT-4o<br />
                • Next.js 14 with React 18
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    imgUrls: [
      "/images/projects/makeuprating/makeuphome.png",
      "/images/projects/makeuprating/makeuptextinput.png",
      "/images/projects/makeuprating/makeupgood.png",
      "/images/projects/makeuprating/makeuphighrisk.png",
    ],
    tag: ["All", "AI"],
    gitUrl: "https://github.com/yuqiao1205/AI-safe-beauty",
    previewUrl: "https://ai-safe-beauty.vercel.app/",
    worksUrl: "https://ai-safe-beauty.vercel.app/",
  },
  {
    id: 2,
    title: "Photo Gallery - Nodejs, Express, Javascript, MySQL, Handlebar, CSS, HTML.",
    description: "A full-featured photo sharing platform with user authentication, image posting, search functionality, and commenting system.",
    detailedDescription: (
      <div>
        <p>
          The Photo Gallery project implements a comprehensive photo sharing platform catering to both unregistered and registered users. It provides a seamless and engaging experience, allowing users to interact with the platform's content in a dynamic and user-friendly manner.
        </p>
        
        <div className="mt-4">
          <p className="font-bold">🚀 Features</p>
          <p style={{ color: '#fbbf24' }} className="mb-4">
            Explore the capabilities of this photo sharing platform.
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-cyan-400">👤 User Management</p>
              <span>
                • User registration with secure authentication<br />
                • Login/logout functionality<br />
                • Profile management
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">📸 Photo Features</p>
              <span>
                • Post and share images<br />
                • Browse photo gallery<br />
                • Search functionality for finding specific content<br />
                • View individual photo details
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">💬 Social Features</p>
              <span>
                • Comment on photos<br />
                • Interact with other users' content<br />
                • Public browsing for unregistered users
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🛠️ Tech Stack</p>
              <span>
                • Node.js & Express - Backend server<br />
                • MySQL - Database<br />
                • Handlebars - Templating engine<br />
                • HTML/CSS/JavaScript - Frontend
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    imgUrls: [
      "/images/projects/imagepost/imagepost-homepage.png",
      "/images/projects/imagepost/imagepost-loginpage.png",
      "/images/projects/imagepost/imagepost-signup.png",
      "/images/projects/imagepost/imagepost-addpost.png",
      "/images/projects/imagepost/imagepost-single.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/photo-site",
    previewUrl: "",
    worksUrl: "",
  },
  {
    id: 3,
    title: "Movie Review - Nextjs with IMDB API, responsive design and a dark mode switch.",
    description: "A comprehensive movie review platform with IMDB API integration, featuring top-rated movies, search functionality, and dark mode support.",
    detailedDescription: (
      <div>
        <p>
          The Movie Review project is a Next.js application that uses a 3rd party IMDB API to fetch movie data and enable searching, creating a seamless interface for movie enthusiasts. It includes sections for top-rated and trending movies, offering curated recommendations.
        </p>
        
        <div className="mt-4">
          <p className="font-bold">🚀 Features</p>
          <p style={{ color: '#fbbf24' }} className="mb-4">
            Discover movies with this feature-rich platform.
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-cyan-400">🎬 Movie Discovery</p>
              <span>
                • Browse top-rated movies<br />
                • View trending movies<br />
                • Search for specific movies<br />
                • Detailed movie information pages
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">📊 Movie Details</p>
              <span>
                • Ratings and reviews<br />
                • Cast and crew information<br />
                • Plot summaries<br />
                • Release dates and runtime
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🎨 User Experience</p>
              <span>
                • Responsive design for all devices<br />
                • Dark mode toggle for comfortable viewing<br />
                • Clean and intuitive interface<br />
                • Fast page loads with Next.js
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🛠️ Tech Stack</p>
              <span>
                • Next.js - React framework<br />
                • TMDB API - Movie data source<br />
                • CSS/Tailwind - Styling<br />
                • Vercel - Deployment
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    imgUrls: [
      "/images/projects/movieweb/moviehomepage.png",
      "/images/projects/movieweb/moviehomepage2.png",
      "/images/projects/movieweb/moviesinglepage.png",
      "/images/projects/movieweb/moviesearchresult.png",
   
      "/images/projects/movieweb/movieipad.png",
         "/images/projects/movieweb/movieabout.png",
      "/images/projects/movieweb/movielightmode.png",
      "/images/projects/movieweb/movielightsingle.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/movie-review",
    previewUrl: "https://movie-review-kappa-ten.vercel.app/",
    worksUrl: "https://movie-review-kappa-ten.vercel.app/",
  },
  {
    id: 9,
    title: "Images Identify Mobile App - React Native, Expo, Serverless, Clerk, AI Integration.",
    description: "A cutting-edge mobile app that uses AI to identify locations from photos, with map integration and emoji customization features.",
    detailedDescription: (
      <div>
        <p>
          NameThePlace is a cutting-edge mobile app built with React Native and Expo, integrating AI and serverless technologies. With Clerk for secure authentication, the app lets you effortlessly pick a photo from your phone to identify the location using advanced AI.
        </p>
        
        <div className="mt-4">
          <p className="font-bold">🚀 Features</p>
          <p style={{ color: '#fbbf24' }} className="mb-4">
            Discover places through your photos with AI.
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-cyan-400">🤖 AI-Powered Recognition</p>
              <span>
                • Upload photos from your device<br />
                • AI analyzes and identifies locations<br />
                • Get detailed information about places<br />
                • Accurate landmark recognition
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🗺️ Map Integration</p>
              <span>
                • View identified locations on map<br />
                • Easy navigation to places<br />
                • Location details and coordinates<br />
                • Interactive map features
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🎨 Personalization</p>
              <span>
                • Add fun emojis to photos<br />
                • Save and share customized images<br />
                • Personal photo collection<br />
                • Social sharing capabilities
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🛠️ Tech Stack</p>
              <span>
                • React Native & Expo - Mobile framework<br />
                • Clerk - Authentication<br />
                • Serverless - Backend architecture<br />
                • AI Integration - Location recognition
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    imgUrls: [
      "/images/projects/imagephone/imageapp1.png",
      "/images/projects/imagephone/imageapp2.png",
      "/images/projects/imagephone/imageapp3.png",
      "/images/projects/imagephone/imageapp4.png",
    ],
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/yuqiao1205/name-the-place-mobile-app-react-native",
    previewUrl: "https://expo.dev/preview/update?message=update%20to%20new%20expo%20verison%20run%20all&updateRuntimeVersion=1.0.0&createdAt=2024-11-29T19%3A31%3A05.291Z&slug=exp&projectId=79f57895-d818-411a-a5f2-b75174f07a66&group=aace4b11-c636-42c6-813a-ef0b465dc5e9",
    worksUrl: "",
  },
  {
    id: 10,
    title: "MovieMate Mobile App - React Native, Expo, TMDB.",
    description: "A mobile app for movie enthusiasts featuring current theater releases, upcoming movies, ratings, and trailers using TMDB API.",
    detailedDescription: (
      <div>
        <p>
          MovieMate is a mobile app built with React Native that keeps you updated with the latest movies using the TMDB API. Discover what's currently showing in theaters and get a sneak peek at upcoming releases with a clean, user-friendly interface.
        </p>
        
        <div className="mt-4">
          <p className="font-bold">🚀 Features</p>
          <p style={{ color: '#fbbf24' }} className="mb-4">
            Your go-to app for all things cinema.
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-cyan-400">🎬 Movie Discovery</p>
              <span>
                • Currently showing in theaters<br />
                • Upcoming movie releases<br />
                • Popular and trending movies<br />
                • Search functionality
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">📊 Movie Information</p>
              <span>
                • Detailed movie descriptions<br />
                • Ratings and reviews<br />
                • Movie trailers<br />
                • Cast and crew details
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">📱 User Experience</p>
              <span>
                • Clean, intuitive interface<br />
                • Smooth navigation<br />
                • Fast loading times<br />
                • Mobile-optimized design
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🛠️ Tech Stack</p>
              <span>
                • React Native - Mobile framework<br />
                • Expo - Development platform<br />
                • TMDB API - Movie database<br />
                • JavaScript - Programming language
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    imgUrls: [
      "/images/projects/movie_mobileapp/movie_review.png",
      "/images/projects/movie_mobileapp/moviemobile001.png",
    ],
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/yuqiao1205/movie-mobile-app",
    previewUrl: "https://expo.dev/preview/update?message=update%20movie%20app&updateRuntimeVersion=1.0.0&createdAt=2024-09-10T23%3A27%3A52.420Z&slug=exp&projectId=4644d62d-00b4-4aab-86f9-d6ca81345ff4&group=0be7175e-54b4-4e08-84f7-e68e7fb29c5a",
    worksUrl: "",
  },
  {
    id: 5,
    title: "Brick Game Application - Javascript, HTML, CSS",
    description: "A classic brick breaker game with progressive difficulty, point calculation, and keyboard/mouse controls for an engaging gaming experience.",
    detailedDescription: (
      <div>
        <p>
          The Brick Game project is a classic arcade-style game implementation featuring progressive difficulty levels, point calculation, and intuitive controls. The game challenges players with increasingly difficult levels while providing an enjoyable and immersive gaming experience.
        </p>
        
        <div className="mt-4">
          <p className="font-bold">🚀 Features</p>
          <p style={{ color: '#fbbf24' }} className="mb-4">
            Experience classic arcade gaming in your browser.
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-cyan-400">🎮 Gameplay</p>
              <span>
                • Classic brick breaker mechanics<br />
                • Progressive difficulty levels<br />
                • Point calculation system<br />
                • Level progression upon clearing blocks
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">⚡ Game Mechanics</p>
              <span>
                • Increasing ball speed per level<br />
                • Multiple brick types<br />
                • Power-ups and bonuses<br />
                • Score tracking
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🕹️ Controls</p>
              <span>
                • Keyboard controls support<br />
                • Mouse controls support<br />
                • Responsive paddle movement<br />
                • Intuitive user interaction
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🛠️ Tech Stack</p>
              <span>
                • JavaScript - Game logic<br />
                • HTML5 Canvas - Rendering<br />
                • CSS - Styling<br />
                • Vercel - Deployment
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    imgUrls: [
      "/images/projects/brickgame/brickgame1.png",
      "/images/projects/brickgame/brickgame2.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/brickgame",
    previewUrl: "https://mybrickgame.vercel.app/",
    worksUrl: "https://mybrickgame.vercel.app/",
  },
  {
    id: 6,
    title: "Calculator Application - Java, Java Swing GUI.",
    description: "An infix expression evaluator with Java Swing GUI, supporting complex mathematical expressions and essential mathematical functions.",
    detailedDescription: (
      <div>
        <p>
          The Calculator Application is a Java-based project implementing an infix expression evaluator with a focus on essential mathematical functions. It utilizes two stacks for expression parsing and features a Java Swing GUI for a user-friendly calculator interface.
        </p>
        
        <div className="mt-4">
          <p className="font-bold">🚀 Features</p>
          <p style={{ color: '#fbbf24' }} className="mb-4">
            A powerful calculator with advanced expression evaluation.
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-cyan-400">🔢 Mathematical Operations</p>
              <span>
                • Basic arithmetic operations (+, -, *, /)<br />
                • Advanced mathematical functions<br />
                • Parentheses support<br />
                • Operator precedence handling
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">⚙️ Expression Evaluation</p>
              <span>
                • Infix expression parsing<br />
                • Two-stack algorithm implementation<br />
                • Complex expression support<br />
                • Accurate calculation results
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🖥️ User Interface</p>
              <span>
                • Java Swing GUI<br />
                • Intuitive button layout<br />
                • Clear display output<br />
                • User-friendly design
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🛠️ Tech Stack</p>
              <span>
                • Java - Programming language<br />
                • Java Swing - GUI framework<br />
                • Stack data structure - Expression parsing<br />
                • OOP principles - Code organization
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    imgUrls: [
      "/images/projects/calculator/calexample01.png",
      "/images/projects/calculator/calexample02.png",
      "/images/projects/calculator/calculator.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/csc413-ex-1-calculator",
    previewUrl: "",
    worksUrl: "",
  },
  {
    id: 7,
    title: "User Management System - Spring Boot, MySQL, React.",
    description: "A full-stack user management application with CRUD operations, featuring Spring Boot backend and React frontend for efficient data management.",
    detailedDescription: (
      <div>
        <p>
          This User Management System is a Spring Boot application that manages users with complete CRUD operations. It utilizes a MySQL database for data persistence and a React frontend for a user-friendly interface, ensuring efficient user data management.
        </p>
        
        <div className="mt-4">
          <p className="font-bold">🚀 Features</p>
          <p style={{ color: '#fbbf24' }} className="mb-4">
            Complete user management solution.
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-cyan-400">👥 User Operations</p>
              <span>
                • Create new user accounts<br />
                • Read/view user information<br />
                • Update user details<br />
                • Delete user accounts
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🔧 Backend Features</p>
              <span>
                • RESTful API endpoints<br />
                • Data validation<br />
                • Error handling<br />
                • Database integration
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🎨 Frontend Features</p>
              <span>
                • Responsive React interface<br />
                • Form handling<br />
                • Data display tables<br />
                • User-friendly navigation
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🛠️ Tech Stack</p>
              <span>
                • Spring Boot - Backend framework<br />
                • MySQL - Database<br />
                • React - Frontend library<br />
                • REST API - Communication
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    imgUrls: [
      "/images/projects/rating/ratinghome001.png",
      "/images/projects/rating/ratingadd001.png",
      "/images/projects/rating/ratingupdate001.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "",
    worksUrl: "",
  },
  {
    id: 8,
    title: "Handwritten Digit Recognition - Deep Learning Model using Pytorch.",
    description: "A CNN-based deep learning model for classifying handwritten digits from the MNIST dataset with high accuracy.",
    detailedDescription: (
      <div>
        <p>
          This project involves developing and evaluating a Convolutional Neural Network (CNN) model for classifying handwritten digits from the well-known MNIST dataset. The CNN is trained to accurately recognize and classify digits 0-9, showcasing deep learning capabilities in image classification.
        </p>
        
        <div className="mt-4">
          <p className="font-bold">🚀 Features</p>
          <p style={{ color: '#fbbf24' }} className="mb-4">
            Deep learning for handwritten digit recognition.
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-cyan-400">🧠 Model Architecture</p>
              <span>
                • Convolutional Neural Network (CNN)<br />
                • Multiple convolutional layers<br />
                • Pooling layers for feature extraction<br />
                • Fully connected classification layers
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">📊 Training & Evaluation</p>
              <span>
                • MNIST dataset (60,000 training images)<br />
                • Model training with optimization<br />
                • Accuracy evaluation metrics<br />
                • Loss function monitoring
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🎯 Capabilities</p>
              <span>
                • Digit classification (0-9)<br />
                • High accuracy recognition<br />
                • Real-time prediction<br />
                • Image preprocessing
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🛠️ Tech Stack</p>
              <span>
                • PyTorch - Deep learning framework<br />
                • Python - Programming language<br />
                • MNIST - Training dataset<br />
                • NumPy - Numerical computing
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    imgUrls: ["/images/projects/handwritting1.png"],
    tag: ["All", "DL"],
    gitUrl: "https://github.com/yuqiao1205/handwriting-app",
    previewUrl: "",
    worksUrl: "",
  },
  {
    id: 4,
    title: "Banking System - Java Application for Banking System.",
    description: "A comprehensive banking system with checking/savings accounts, deposits, withdrawals, and a JavaFX graphical interface.",
    detailedDescription: (
      <div>
        <p>
          The Banking System project is a Java application implementing a complete banking system with checking and savings accounts, cash deposit functionality, and account management features. It leverages JavaFX to create a user-friendly graphical interface.
        </p>
        
        <div className="mt-4">
          <p className="font-bold">🚀 Features</p>
          <p style={{ color: '#fbbf24' }} className="mb-4">
            Complete banking system simulation.
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-cyan-400">🏦 Account Types</p>
              <span>
                • Checking accounts<br />
                • Savings accounts<br />
                • Account creation<br />
                • Multiple account support
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">💰 Transactions</p>
              <span>
                • Cash deposits<br />
                • Withdrawals<br />
                • Balance inquiries<br />
                • Transaction history
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">⚙️ Account Management</p>
              <span>
                • View account information<br />
                • Reset account details<br />
                • Account settings<br />
                • User profile management
              </span>
            </div>
            
            <div>
              <p className="font-semibold text-cyan-400">🛠️ Tech Stack</p>
              <span>
                • Java - Programming language<br />
                • JavaFX - GUI framework<br />
                • OOP principles - Architecture<br />
                • File I/O - Data persistence
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    imgUrls: ["/images/projects/bankaccount/banksystem.png"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/advancedjava/tree/main/assigment1/BankingSystem/src",
    previewUrl: "",
    worksUrl: "",
  },

];

export default projectsData;
