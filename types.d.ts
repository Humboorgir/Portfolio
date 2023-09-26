interface Project {
  title: string;
  description: string;
  image: string;
  repo: string;
}

declare module "@/projects.js" {
  const projects: Project[];

  export = projects;
}
