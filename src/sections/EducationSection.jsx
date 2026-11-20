import { CalendarDays, GraduationCap } from "lucide-react";
import SectionLayout from "../components/SectionLayout.jsx";
import { portfolioContent } from "../data/portfolio.js";

function EducationSection() {
  const education = portfolioContent.education;

  return (
    <SectionLayout
      id="education"
      index="07 / EDUCATION"
      label="Education"
      title="Academic qualifications."
      description="Education and completion years."
    >
      {education.length > 0 ? (
        <ul className="grid gap-3">
          {education.map((item) => (
            <li
              className="flex flex-col gap-5 rounded-2xl border border-line bg-panel/55 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
              key={`${item.institution}-${item.qualification}`}
            >
              <div className="flex items-start gap-4">
                <GraduationCap
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-accent/80"
                  size={20}
                />
                <div>
                  <h3 className="font-medium leading-6 text-white">
                    {item.qualification}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.institution}</p>
                </div>
              </div>
              <p className="inline-flex items-center gap-2 self-start rounded-full border border-line px-3 py-2 text-[11px] text-muted sm:self-center">
                <CalendarDays aria-hidden="true" size={13} />
                {item.dates}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
    </SectionLayout>
  );
}

export default EducationSection;
