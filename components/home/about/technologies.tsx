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
      initial={{ opacity: 0, y: "50px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-12 w-full lg:mt-16 lg:max-w-sm"
    >
      <h2 className="mx-auto mb-3 text-xl font-bold leading-snug">
        Technologies
      </h2>
      <div className="mx-auto flex flex-wrap items-center justify-start gap-2 text-sky-500">
        {skills.map((skill: string, i) => {
          return <span key={i}>{skill}</span>;
        })}
      </div>
    </motion.div>
  );
};

export default Technologies;
