import { ArrowUpRight, Award } from "lucide-react";
import SectionLayout from "../components/SectionLayout.jsx";
import { portfolioContent } from "../data/portfolio.js";

function CertificationsSection() {
  const { certifications } = portfolioContent;

  return (
    <SectionLayout
      id="certifications"
      index="05 / CREDENTIALS"
      label="Certifications"
      title="Learning across AI, security, and systems."
      description="Certifications and learning credentials."
    >
      <div className="grid gap-3 lg:grid-cols-3">
        {certifications.items.map((certification, index) => (
          <article
            className="flex min-h-44 flex-col rounded-2xl border border-line bg-panel/55 p-5 sm:p-6"
            key={`${certification.issuer}-${certification.name}`}
          >
            <div className="flex items-center justify-between">
              <Award aria-hidden="true" className="text-accent/80" size={18} />
              <span className="font-mono text-[10px] text-muted/70">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-8 text-sm font-medium leading-6 text-copy">
              {certification.name}
            </h3>
            <p className="mt-2 text-xs text-muted">{certification.issuer}</p>
          </article>
        ))}
      </div>
      <a
        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-xs font-medium text-copy transition hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        href={certifications.links.current}
        rel="noreferrer"
        target="_blank"
      >
        View certification collection
        <ArrowUpRight aria-hidden="true" size={14} />
      </a>
    </SectionLayout>
  );
}

export default CertificationsSection;
