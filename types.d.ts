interface Project {
  title: string;
  description: string;
  image: string;
}

declare module "@/projects.json" {
  const projects: Project[];

  export = projects;
}
