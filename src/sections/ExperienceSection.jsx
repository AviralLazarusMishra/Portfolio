import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import SectionLayout from "../components/SectionLayout.jsx";
import { portfolioContent } from "../data/portfolio.js";

function ExperienceSection() {
  return (
    <SectionLayout
      id="experience"
      index="02 / EXPERIENCE"
      label="Experience"
      title="Experience across security, research, and events."
      description="Professional roles and their responsibilities."
    >
      <div className="relative space-y-4 before:absolute before:bottom-8 before:left-[1.4rem] before:top-8 before:w-px before:bg-gradient-to-b before:from-accent/45 before:via-line before:to-transparent">
        {portfolioContent.experience.map((experience, index) => (
          <article
            className="relative grid gap-5 rounded-2xl border border-line bg-panel/65 p-5 sm:p-7 md:grid-cols-[minmax(12rem,0.75fr)_minmax(0,1.25fr)] md:gap-8"
            key={`${experience.organization}-${experience.role}`}
          >
            <div className="flex gap-4">
              <span className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-ink text-accent">
                <BriefcaseBusiness aria-hidden="true" size={17} />
              </span>
              <div>
                <p className="text-xs font-medium text-accent">
                  {experience.organization}
                </p>
                <h3 className="mt-1 text-base font-medium text-white sm:text-lg">
                  {experience.role}
                </h3>
                <p className="mt-3 inline-flex items-center gap-2 text-[11px] text-muted">
                  <CalendarDays aria-hidden="true" size={13} />
                  {experience.dates}
                </p>
              </div>
            </div>
            <ul className="space-y-2 border-t border-line/70 pt-4 text-sm leading-6 text-muted md:border-l md:border-t-0 md:pl-7 md:pt-0">
              {experience.responsibilities.map((responsibility) => (
                <li className="flex gap-3" key={responsibility}>
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/80"
                  />
                  {responsibility}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionLayout>
  );
}

export default ExperienceSection;
