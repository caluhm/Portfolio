import SectionContainer from "./SectionContainer";
import ProjectCard from "./projects/ProjectCard";
import { projects } from "./projects/Projects";

export default function ProjectSection() {
  return (
    <SectionContainer id="projects" customJustify={"justify-center"}>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h3 className="section-header">My Projects</h3>
        <div className="grid grid-cols-1 content-center gap-6 px-3 py-16 sm:px-5 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              Title={project.title}
              LiveLink={project.livelink}
              GitHubLink={project.gitlink}
              Image={project.image}
              TechStack={project.techstack}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
