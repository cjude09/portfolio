import type { Project } from "@/data/projects";

/** The case-study hero: the project's real technology list drawn as components hanging off one system bus. */
export function StackPlate({ project }: { project: Project }) {
  return (
    <figure className="stack-plate" aria-label={`${project.title} technology stack`}>
      <figcaption className="stack-plate-head">
        <span>{project.projectType}</span>
        <span>{project.technologies.length} components</span>
      </figcaption>
      <ul className="stack-bus">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
    </figure>
  );
}
