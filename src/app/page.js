import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
// import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="pt-16"> {/* Add top padding to account for fixed navbar */}
        <HeroSection />
        <div className="container mx-auto px-4 xl:px-16">
          {/* <AchievementsSection /> */}
          <AboutSection />
          <ProjectSection />
          <EmailSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
