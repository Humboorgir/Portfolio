import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "C++",
  "C#",
  "Python",
  "React",
  "Vue",
  "Svelte",
  "Next.js",
  "Bootstrap",
  "Tailwindcss",
  "Material UI",
  "Daisy UI",
  "Socket IO",
  "Node.js",
  "Express",
  "SQL",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Github",
  "npm",
  "Figma",
  "VS Code",
];

const Technologies = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100px" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      className="mt-16"
    >
      <h2 className="mb-3 text-xl font-bold leading-snug">Technologies:</h2>
      <div className="flex max-w-sm flex-wrap items-center gap-2 text-sky-500">
        {skills.map((skill: string, i) => {
          return <span>{skill}</span>;
        })}
      </div>
    </motion.div>
  );
};

export default Technologies;
