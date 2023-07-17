import Project from "@/components/home/projects/project";

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      {projects.map((project, i) => {
        return <Project key={i} project={project} />;
      })}
    </div>
  );
};

export default Projects;
