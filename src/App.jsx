import { portfolioContent } from "./data/portfolio.js";
import SiteHeader from "./components/SiteHeader.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import AchievementsSection from "./sections/AchievementsSection.jsx";
import CertificationsSection from "./sections/CertificationsSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import EducationSection from "./sections/EducationSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import { ArrowUp } from "lucide-react";

function App() {
  const { profile } = portfolioContent;

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-copy" id="top">
      <a
        className="sr-only z-[60] rounded-full bg-accent px-4 py-2 font-medium text-ink focus:fixed focus:left-4 focus:top-4 focus:not-sr-only"
        href="#main-content"
      >
        Skip to content
      </a>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-64 left-[15%] h-[34rem] w-[48rem] rounded-full bg-accent/[0.07] blur-[140px]" />
        <div className="absolute right-[-16rem] top-[50rem] h-[34rem] w-[34rem] rounded-full bg-sky-500/[0.035] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      <div className="relative z-10">
        <SiteHeader />
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <AchievementsSection />
          <EducationSection />
          <ContactSection />
        </main>

        <footer className="border-t border-line/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">
            <div>
              <p className="text-sm font-medium text-white">
                {profile.name}
                <span className="text-accent">.</span>
              </p>
              <p className="mt-1 text-xs text-muted">
                © {new Date().getFullYear()} {profile.name}
              </p>
            </div>
            <SocialLinks />
            <a
              className="inline-flex min-h-10 items-center gap-2 self-start rounded-full border border-line px-4 text-xs text-muted transition hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:self-auto"
              href="#top"
            >
              Back to top
              <ArrowUp aria-hidden="true" size={14} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
