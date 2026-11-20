import {
  BrainCircuit,
  Braces,
  Code2,
  Globe,
  Shield,
  Server,
  Wrench,
} from "lucide-react";
import SectionLayout from "../components/SectionLayout.jsx";
import { portfolioContent } from "../data/portfolio.js";

const categoryIcons = [
  Code2,
  Braces,
  Shield,
  Wrench,
  BrainCircuit,
  Server,
  Globe,
];

function SkillsSection() {
  const groups = portfolioContent.skills.displayGroups;

  return (
    <SectionLayout
      id="skills"
      index="04 / TOOLKIT"
      label="Skills"
      title="Technical skills across software, security, and AI."
      description="Programming, development, security tools, AI, systems, and spoken languages."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {groups.map((group, index) => {
          const Icon = categoryIcons[index];

          return (
            <article
              className={`rounded-2xl border border-line bg-panel/55 p-5 sm:p-6 ${
                index === groups.length - 1 ? "md:col-span-2" : ""
              }`}
              key={group.category}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-accent/90">
                  <Icon aria-hidden="true" size={16} />
                </span>
                <h3 className="text-sm font-medium text-white">
                  {group.category}
                </h3>
              </div>
              <ul
                aria-label={group.category}
                className="mt-5 flex flex-wrap gap-2"
              >
                {group.items.map((skill) => (
                  <li
                    className="rounded-full border border-line/80 px-3 py-1.5 text-[11px] text-muted"
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </SectionLayout>
  );
}

export default SkillsSection;
