import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks.jsx";
import { portfolioContent } from "../data/portfolio.js";

function HeroSection() {
  const { contact, profile } = portfolioContent;

  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-6xl items-center gap-14 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[minmax(0,1.3fr)_minmax(17rem,0.7fr)] lg:gap-16 lg:px-12 lg:py-28"
      id="hero"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-7 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          <span className="h-px w-8 bg-accent" />
          {profile.current.headline}
        </p>
        <h1
          className="text-5xl font-semibold tracking-[-0.065em] text-white sm:text-7xl lg:text-[5.5rem] lg:leading-[0.98]"
          id="hero-title"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-2xl font-medium leading-tight tracking-[-0.035em] text-copy sm:text-3xl">
          Software development, AI <span className="text-muted">&</span>{" "}
          cybersecurity.
        </p>
        <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
          {profile.current.introduction}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-ink transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="#projects"
          >
            Explore projects
            <ArrowDownRight aria-hidden="true" size={16} />
          </a>
          <a
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium text-copy transition hover:border-accent/50 hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href={contact.resume}
            rel="noreferrer"
            target="_blank"
          >
            View résumé
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>

        <SocialLinks ariaLabel="Professional profile links" className="mt-8" />
      </motion.div>

      <motion.aside
        aria-label="Areas of interest"
        className="relative overflow-hidden rounded-2xl border border-line/90 bg-panel/65 p-6 backdrop-blur-sm sm:p-8"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
      >
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent/[0.08] blur-3xl"
        />
        <div className="relative">
          <div className="flex items-center justify-between border-b border-line/80 pb-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
              Areas of interest
            </p>
            <span className="font-mono text-[10px] text-accent/80">
              01 — 04
            </span>
          </div>
          <ul className="divide-y divide-line/70">
            {profile.current.areasOfInterest.map((interest, index) => (
              <li
                className="flex items-center gap-4 py-5 text-sm text-copy/90"
                key={interest}
              >
                <span className="font-mono text-[10px] text-muted/70">
                  0{index + 1}
                </span>
                <span>{interest}</span>
                <span
                  aria-hidden="true"
                  className="ml-auto h-1.5 w-1.5 rounded-full bg-accent/70"
                />
              </li>
            ))}
          </ul>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.13em] text-muted/70">
            Practical systems · Logic-first design
          </p>
        </div>
      </motion.aside>
    </section>
  );
}

export default HeroSection;
