import Image from "next/image";
import Link from "@/components/global/button";
import { motion } from "framer-motion";

interface Props {
  project: Project;
  delay: number;
}

const Project = ({ project, delay }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100px" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: delay }}
      className="flex w-80 flex-col items-center gap-2 rounded-lg border-2
     border-neutral-800 bg-neutral-900 p-5"
    >
      <Image
        className="h-[140px] rounded-md border border-neutral-800"
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
    </motion.div>
  );
};

export default Project;
