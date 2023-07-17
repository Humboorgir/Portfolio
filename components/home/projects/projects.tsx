import Project from "@/components/home/projects/project";

interface Project {
  title: string;
  description: string;
  image: string;
}

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
};

export default Projects;
