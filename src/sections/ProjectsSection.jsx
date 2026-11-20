import ProjectCard from "../components/ProjectCard.jsx";
import SectionLayout from "../components/SectionLayout.jsx";
import { portfolioContent } from "../data/portfolio.js";

function ProjectsSection() {
  const projects = portfolioContent.projects.filter(
    (project) => project.displayed,
  );

  return (
    <SectionLayout
      id="projects"
      index="03 / SELECTED WORK"
      label="Projects"
      title="Systems in progress, ideas made tangible."
      description="A selection of AI and security projects. Status labels reflect the wording in the portfolio materials; ongoing work is not presented as complete."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard index={index} key={project.name} project={project} />
        ))}
      </div>
    </SectionLayout>
  );
}

export default ProjectsSection;
