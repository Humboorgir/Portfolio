interface Props {
  project: Project;
}

const Project = ({ project }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
