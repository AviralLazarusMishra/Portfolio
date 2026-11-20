import { ArrowUpRight, Milestone, UsersRound } from "lucide-react";
import SectionLayout from "../components/SectionLayout.jsx";
import { portfolioContent } from "../data/portfolio.js";

function AchievementsSection() {
  const { achievements, projects } = portfolioContent;

  return (
    <SectionLayout
      id="achievements"
      index="06 / CONTRIBUTIONS"
      label="Leadership & milestones"
      title="Contributions beyond professional roles."
      description="Student leadership is presented separately from employment experience."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {achievements.leadership.map((role) => (
          <article
            className="rounded-2xl border border-line bg-panel/65 p-6 sm:p-7"
            key={`${role.role}-${role.organization}`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.07] text-accent">
              <UsersRound aria-hidden="true" size={18} />
            </span>
            <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.16em] text-accent/80">
              Leadership
            </p>
            <h3 className="mt-2 text-lg font-medium text-white">
              {role.role}
            </h3>
            <p className="mt-1 text-sm text-muted">{role.organization}</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
              {role.responsibilities.map((responsibility) => (
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

        {achievements.milestones.map((milestone) => {
          const project = projects.find(
            (item) => item.name === milestone.title,
          );
          const projectLink = project?.links[0];

          return (
            <article
              className="rounded-2xl border border-accent/20 bg-accent/[0.035] p-6 sm:p-7"
              key={milestone.title}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.07] text-accent">
                <Milestone aria-hidden="true" size={18} />
              </span>
              <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.16em] text-accent/80">
                Project milestone · {milestone.status}
              </p>
              <h3 className="mt-2 text-lg font-medium leading-6 text-white">
                {milestone.title}
              </h3>
              <p className="mt-3 text-xs leading-6 text-muted">
                The MVP is marked complete; this does not imply the broader
                project is finished.
              </p>
              {projectLink && (
                <a
                  className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-accent transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  href={projectLink.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {projectLink.label}
                  <ArrowUpRight aria-hidden="true" size={13} />
                </a>
              )}
            </article>
          );
        })}
      </div>
      {achievements.awards.length === 0 && (
        <p className="mt-5 text-xs text-muted">No awards were listed.</p>
      )}
    </SectionLayout>
  );
}

export default AchievementsSection;
