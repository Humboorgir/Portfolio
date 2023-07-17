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
    <div className="mt-16">
      <h2 className="mb-3 text-xl font-bold leading-snug">Technologies:</h2>
      <div className="flex max-w-sm flex-wrap items-center gap-2">
        {skills.map((skill: string) => {
          return <span className="text-sky-500">{skill}</span>;
        })}
      </div>
    </div>
  );
};

export default Technologies;
