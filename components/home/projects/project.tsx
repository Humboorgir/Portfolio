import Image from "next/image";

interface Props {
  project: Project;
}

const Project = ({ project }: Props) => {
  return (
    <div className="relative flex max-w-xs flex-col items-center gap-2 rounded-lg bg-neutral-900 p-5">
      <Image
        className="rounded-md border border-neutral-800"
        src={project.image}
        alt={project.title}
        height={200}
        width={400}
      ></Image>
      <h2 className="text-xl">{project.title}</h2>
      <p className="text-sm text-slate-300">{project.description}</p>
    </div>
  );
};

export default Project;
