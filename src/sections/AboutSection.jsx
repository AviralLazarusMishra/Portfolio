import { Binary, ShieldCheck, Workflow } from "lucide-react";
import SectionLayout from "../components/SectionLayout.jsx";
import { portfolioContent } from "../data/portfolio.js";

const interestIcons = [Workflow, ShieldCheck, Binary];

function AboutSection() {
  const { profile } = portfolioContent;

  return (
    <SectionLayout
      id="about"
      index="01 / PROFILE"
      label="About"
      title="Software, security, and locally hosted AI."
      description="Practical experience across software development, VAPT, network security analysis, and locally hosted AI systems."
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="text-base leading-8 text-copy/85 sm:text-lg">
            {profile.current.about}
          </p>
        </div>
        <div>
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
            Areas of interest
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {profile.current.areasOfInterest.map((interest, index) => {
              const Icon = interestIcons[index];

              return (
                <li
                  className="flex min-h-14 items-center gap-3 rounded-xl border border-line/80 bg-white/[0.02] px-4 text-xs text-copy/85"
                  key={interest}
                >
                  <Icon
                    aria-hidden="true"
                    className="shrink-0 text-accent/80"
                    size={15}
                  />
                  {interest}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
}

export default AboutSection;
