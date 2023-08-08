import Project from "@/components/home/projects/project";

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <div className="mx-auto flex flex-wrap items-center justify-center gap-6">
      {projects.map((project, i) => {
        return <Project key={i} delay={i / 8} project={project} />;
      })}
      <div className="hidden w-80 md:flex" style={{ visibility: "hidden" }} />
      <div className="hidden w-80 md:flex" style={{ visibility: "hidden" }} />
    </div>
  );
};

export default Projects;
