import { ArrowUpRight, Check, ExternalLink } from "lucide-react";

function statusStyle(status) {
  if (status === "MVP Complete") {
    return "border-accent/30 bg-accent/[0.08] text-accent";
  }
  if (status?.includes("Research")) {
    return "border-violet-300/20 bg-violet-300/[0.06] text-violet-200";
  }
  return "border-amber-200/20 bg-amber-200/[0.05] text-amber-100";
}

function ProjectCard({ project, index }) {
  const olderDetails = project.legacy;
  const technologies =
    project.technologies ??
    project.technologiesMentioned ??
    olderDetails?.technologies;
  const technologyLabel =
    project.technologyLabel ?? olderDetails?.technologyLabel;
  const features = project.features ?? olderDetails?.features;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-line bg-panel/75 p-6 transition duration-300 hover:-translate-y-1 hover:border-line/90 hover:bg-panel sm:p-8 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-accent/[0.035] blur-3xl transition group-hover:bg-accent/[0.07]"
      />
      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[11px] tracking-[0.16em] text-muted/80">
            PROJECT / {String(index + 1).padStart(2, "0")}
          </p>
          {project.status && (
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium ${statusStyle(project.status)}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {project.status}
            </span>
          )}
        </div>

        <h3 className="mt-6 text-xl font-medium tracking-tight text-white sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
          {project.description}
        </p>

        {features?.length > 0 && (
          <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                className="flex items-start gap-2.5 text-xs leading-5 text-copy/80"
                key={feature}
              >
                <Check
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-accent/80"
                  size={14}
                />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {technologies?.length > 0 && (
          <div className="mt-7">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
              {technologyLabel}
            </p>
            <ul aria-label={technologyLabel} className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <li
                  className="rounded-full border border-line bg-white/[0.025] px-3 py-1.5 text-[11px] text-copy/75"
                  key={technology}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        )}

        {olderDetails?.description && (
          <details className="mt-6 border-t border-line/70 pt-4">
            <summary className="cursor-pointer text-xs text-muted transition hover:text-copy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              Read the earlier portfolio description
            </summary>
            {olderDetails.fullName && (
              <p className="mt-3 text-xs font-medium text-copy/80">
                {olderDetails.fullName}
              </p>
            )}
            <p className="mt-3 text-xs leading-6 text-muted">
              {olderDetails.description}
            </p>
            {olderDetails.impact && (
              <p className="mt-3 text-xs leading-6 text-muted">
                <span className="text-copy/80">Impact stated previously: </span>
                {olderDetails.impact}
              </p>
            )}
            {olderDetails.goal && (
              <p className="mt-3 text-xs leading-6 text-muted">
                <span className="text-copy/80">Goal stated previously: </span>
                {olderDetails.goal}
              </p>
            )}
          </details>
        )}

        <div className="mt-7 flex flex-wrap gap-3">
          {project.links?.map((link) => (
            <a
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line px-4 text-xs font-medium text-copy transition hover:border-accent/50 hover:bg-accent/[0.06] hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.label}
              {link.href.includes("github.com") ? (
                <ArrowUpRight aria-hidden="true" size={13} />
              ) : (
                <ExternalLink aria-hidden="true" size={13} />
              )}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
