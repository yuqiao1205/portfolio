import Accordion from '../components/Accordion';
import AccordionGroup from '../components/AccordionGroup';

const projectsData = [
  {
    id: 1,
    title: "TravelWise - React, Nodejs, Express, MySQL, Azure.",
    description: (
      <div>
        <p>
          This application revolutionizes travel blogging by seamlessly
          integrating advanced features tailored for modern travelers, including
          an AI-powered chatbot for personalized recommendations, destination
          vision feature, and real-time weather updates, enhancing trip planning.
          Complemented by essential project components such as the{" "}
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
        
        <div className="mt-4">
          <p className="font-bold">🚀 Features</p>
          <p style={{ color: '#fbbf24' }} className="mb-4">Click on each feature title below to expand and view details.</p>
          
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
             	•	Users can upload a photo of any place or landmark.<br />
	•	The AI analyzes the image and identifies the location.<br />
	•	The system returns details such as place name, country, and notable information.
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
      </div>
    ),
    imgUrls: [
      "/images/projects/blog/blog-home5.png",
      "/images/projects/blog/blog-home6.png",
      "/images/projects/blog/blog-add2.png",
      "/images/projects/blog/blog-single01.png",
      "/images/projects/blog/blog-singlecomment.png",
      "/images/projects/blog/blog-userprofile1.png",
      "/images/projects/blog/blog-updateaccount.png",
      "/images/projects/blog/blog-weather.png",
      "/images/projects/blog/blog-yelpsearch.png",
      "/images/projects/blog/blog-destation.png",
      "/images/projects/blog/blog-chat.png",
      "/images/projects/blog/blog-login.png",
      "/images/projects/blog/blog-theme.png",
      "/images/projects/blog/blog-favorite.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/travelwise",
    previewUrl: "",
    worksUrl: "",
  },
  {
    id: 11,
    title: "EventHub - SpringBoot, Mybatis, React, Material UI, MySQL.",
    description:
      "EventHub is a web application built using SpringBoot, MyBatis, React, Material UI, and MySQL. It provides full CRUD functionality for managing events, categories, and articles. Users can also update personal settings such as profile pictures, passwords, and other user information. The application is fully responsive, ensuring a seamless experience across different devices.",
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
    description: (
      <span>

        An AI-powered web application that allows users to summarize YouTube videos and ask questions about their content using advanced language models
        <br /><br />
        🚀 <strong>Features</strong><br />

        • Video Summarization: Generate concise summaries of YouTube videos in English or Chinese<br />
        • Filter YouTube Videos by Transcript Availability: Search YouTube Videos with Transcripts<br />
        • Q&A Functionality: Ask questions about video content and receive AI-generated answers<br />
        • Language Support: Choose between English and Chinese for summaries and responses<br />
        • User-Friendly Interface: Clean, responsive design with intuitive controls<br />
        • Download & copy Summaries: Easily download or copy generated summaries for offline reference<br />
        • Model Selection: Choose from multiple AI LLMs to enhance summarization and Q&A capabilities<br />
        <br /><br />
        🧪 <strong>Tech Stack</strong><br />
        • Next.js 16 - React framework for production<br />
        • React 19 - UI library with modern hooks<br />
        • TypeScript - Type-safe JavaScript<br />
        • Tailwind CSS 4 - Utility-first CSS framework<br />
        • OpenRouter API - Multi-model AI platform<br />
        <br /><br />

    
      </span>
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
    description: (
      <span>
  
        AI-safe-beauty is a web application that leverages artificial intelligence to analyze cosmetic products and assess their safety based on ingredient composition. The app provides instant risk assessments by categorizing ingredients into high, medium, and low-risk categories, along with an overall safety score and detailed explanations.
        <br /><br />
        <strong>Features</strong><br />
        🔍 <strong>Multi-Input Analysis</strong><br />
        • Text Analysis: Paste ingredient lists directly for instant safety evaluation<br />
        • Image Recognition: Upload product photos to automatically extract and analyze ingredients using AI-powered OCR<br />
        • URL Scanning: Provide product page URLs for comprehensive web scraping and analysis<br />
        <br />
        🧪 <strong>Intelligent Risk Assessment</strong><br />
        • Three-Tier Risk Classification: High, Medium, and Low risk categories<br />
        • Overall Safety Score: Excellent, Fair, or Poor ratings<br />
        • Detailed Explanations: AI-generated insights for each ingredient's safety profile<br />
        • Expert Analysis: Powered by advanced language models trained on cosmetic safety data<br />
        <br />
  
        <strong>Tech Stack</strong><br />
        Next.js 14 - React framework for production<br />
        React 18 - UI library with modern hooks<br />
        CSS Modules - Component-scoped styling<br />
        Node.js - Server-side JavaScript runtime<br />
        Next.js API Routes - Serverless API endpoints<br />
        <br />
        <strong>AI & Machine Learning</strong><br />
        OpenRouter API - Multi-model AI platform<br />
        Grok Models - xAI's advanced language models for ingredient analysis<br />
        GPT-4o - OpenAI's vision model for image text extraction<br />
        <br />
        <strong>Web Scraping & Automation</strong><br />
        Puppeteer - Headless browser automation<br />
        Puppeteer Extra Stealth Plugin - Anti-detection measures for web scraping
      </span>
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
    title:
      "Photo Gallery - Nodejs, Express, Javascript, MySQL, Handlebar, CSS, HTML.",
    description:
      "The project implements a range of features catering to both unregistered and registered users, including login, register, post images, search, and make comments functionalities. Unregistered users can browse and search for content, while registered users gain additional capabilities such as posting images and making comments. The system offers a seamless and engaging experience, allowing users to interact with the platform's content in a dynamic and user-friendly manner.",
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
    title:
      "Movie Review - Nextjs with IMDB API, responsive design and a dark mode switch.",
    description:
      "The Next.js project uses a 3rd party IMDB API to fetch movie data and enable searching, creating a seamless interface. It includes a section for top-rated and trending movies, offering curated recommendations. The app's responsive design provides a comprehensive movie review platform, allowing users to explore detailed information, ratings, and reviews. Additionally, the app features a dark mode option for enhanced viewing comfort in low-light environments.",
    imgUrls: [
      "/images/projects/movieweb/movieweb-darkhome.png",
      "/images/projects/movieweb/movieweb-lighthome.png",
      "/images/projects/movieweb/movieweb-darksingle.png",
      "/images/projects/movieweb/movieweb-lightsingle.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/movie-review",
    previewUrl: "https://movie-review-kappa-ten.vercel.app/",
    worksUrl: "https://movie-review-kappa-ten.vercel.app/",
  },
  {
    id: 9,
    title:
      "Images Identify Mobile App - React Native, Expo, Serverless, Clerk, AI Intergation.",
    description:
      "NameThePlace is a cutting-edge mobile app built with React Native and Expo, integrating AI and serverless technologies. With Clerk for secure authentication, the app lets you effortlessly pick a photo from your phone to identify the location. Using advanced AI, it provides detailed information about the place, complete with a map view for easy navigation. Personalize your experience by adding fun emojis to your photos before saving or sharing. PhotoPlace seamlessly combines technology and simplicity, offering a smart way to discover places through your photos",
    imgUrls: [
      "/images/projects/imagephone/imageapp1.png",
      "/images/projects/imagephone/imageapp2.png",
      "/images/projects/imagephone/imageapp3.png",
      "/images/projects/imagephone/imageapp4.png",
    ],
    tag: ["All", "Mobile"],
    gitUrl:
      "https://github.com/yuqiao1205/name-the-place-mobile-app-react-native",
    previewUrl:
      "https://expo.dev/preview/update?message=update%20to%20new%20expo%20verison%20run%20all&updateRuntimeVersion=1.0.0&createdAt=2024-11-29T19%3A31%3A05.291Z&slug=exp&projectId=79f57895-d818-411a-a5f2-b75174f07a66&group=aace4b11-c636-42c6-813a-ef0b465dc5e9",
    worksUrl: "",
  },
  {
    id: 10,
    title: "MovieMate Mobile App - React Native, Expo, TMDB.",
    description:
      "MovieMate is a mobile app built with React Native that keeps you updated with the latest movies using the TMDB API. Discover what's currently showing in theaters and get a sneak peek at upcoming releases. With a clean, user-friendly interface, MovieMate provides movie details, ratings, and trailers, making it your go-to app for all things cinema.",
    imgUrls: [
      "/images/projects/movie_mobileapp/movie_review.png",
      "/images/projects/movie_mobileapp/moviemobile001.png",
    ],
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/yuqiao1205/movie-mobile-app",
    previewUrl:
      "https://expo.dev/preview/update?message=update%20movie%20app&updateRuntimeVersion=1.0.0&createdAt=2024-09-10T23%3A27%3A52.420Z&slug=exp&projectId=4644d62d-00b4-4aab-86f9-d6ca81345ff4&group=0be7175e-54b4-4e08-84f7-e68e7fb29c5a",
    worksUrl: "",
  },
  {
    id: 5,
    title: "Brick Game Application - Javascript, HTML, CSS",
    description:
      "The project encompasses the implementation of a brick game with features such as point calculation, increasing ball speeds for each level, and progressing to the next level upon eliminating all blocks. Keyboard and mouse controls are integrated into the game, enhancing user interaction and gameplay experience. The game's design focuses on providing engaging gameplay while challenging players with progressively difficult levels, ensuring an enjoyable and immersive gaming experience. ",
    imgUrls: [
      "/images/projects/brickgame/brickgame-home.png",
      "/images/projects/brickgame/brickgame-login.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuqiao1205/brickgame",
    previewUrl: "https://brickgame-two.vercel.app/",
    worksUrl: "https://brickgame-two.vercel.app/",
  },
  {
    id: 6,
    title: "Calculator Application - Java, Java Swing GUI.",
    description:
      "The project involves implementing an infix expression evaluator using Java, with a focus on essential mathematical functions and utilizing two stacks. Additionally, a Java Swing GUI is created to provide a user-friendly interface for calculator input. This approach allows users to input complex mathematical expressions in infix notation, which are then evaluated accurately. The project enhances user experience by providing a visually appealing and intuitive way to perform calculations. ",
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
    description:
      "This Spring Boot application manages users with CRUD operations, utilizing a MySQL database and a React frontend. It enables creating, reading, updating, and deleting user accounts, ensuring efficient user data management. The React frontend provides a user-friendly interface for seamless interaction with the system.",
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
    description:
      "The project involves developing and evaluating a Convolutional Neural Network (CNN) model for classifying handwritten digits from the well-known MNIST dataset. The CNN is trained to accurately recognize and classify the digits, showcasing its ability to effectively handle image classification tasks.",
    imgUrls: ["/images/projects/handwritting1.png"],
    tag: ["All", "DL"],
    gitUrl: "https://github.com/yuqiao1205/handwriting-app",
    previewUrl: "",
    worksUrl: "",
  },
  {
    id: 4,
    title: "Banking System - Java Application for Banking System.",
    description:
      "The project encompasses the implementation of a banking system featuring checking and savings accounts, as well as cash deposit functionality. It allows users to create various types of accounts, reset account details, view account information, and perform withdrawals. The project leverages JavaFX to create a user-friendly graphical interface for input, enhancing the overall user experience ",
    imgUrls: ["/images/projects/bankaccount/banksystem.png"],
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/yuqiao1205/advancedjava/tree/main/assigment1/BankingSystem/src",
    previewUrl: "",
    worksUrl: "",
  },

];

export default projectsData;
