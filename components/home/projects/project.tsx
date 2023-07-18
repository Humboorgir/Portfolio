import Image from "next/image";
import Link from "@/components/global/link";

interface Props {
  project: Project;
}

const Project = ({ project }: Props) => {
  return (
    <div className="relative flex max-w-xs flex-col items-center gap-2 rounded-lg border-2 border-neutral-800 bg-neutral-900 p-5">
      <Image
        className="rounded-md border border-neutral-800"
        src={project.image}
        alt={project.title}
        height={200}
        width={400}
      ></Image>
      <h2 className="text-xl">{project.title}</h2>
      <p className="mb-2 text-center text-sm text-slate-300">
        {project.description}
      </p>
      <Link
        variant="blue"
        href="/somewebsite.com"
        className="!flex !w-full !justify-center !rounded-full !py-2"
      >
        Repository
      </Link>
    </div>
  );
};

export default Project;
