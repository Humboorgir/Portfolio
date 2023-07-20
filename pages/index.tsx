import Navbar from "@/components/global/navbar";
import Particles from "@/components/global/particles";
import HeroTitle from "@/components/home/hero/title";
import HeroDescription from "@/components/home/hero/description";
import HeroAboutButton from "@/components/home/hero/aboutbutton";
import HeroContactButton from "@/components/home/hero/contactbutton";
import HeroProgrammerImage from "@/components/home/hero/programmerimage";
import AboutTitle from "@/components/home/about/title";
import AboutDescription from "@/components/home/about/description";
import AboutTechnologies from "@/components/home/about/technologies";
import AboutPersonalInfo from "@/components/home/about/personalinfo";
import ProjectsTitle from "@/components/home/projects/title";
import Projects from "@/components/home/projects/projects";
import Footer from "@/components/global/footer";

import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
import projects from "@/projects.js";

export default function Home() {
  return (
    <>
      {/* hero section  */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center"
      >
        <Particles />
        <Navbar />
        <div className="mt-[75px] flex items-center justify-center gap-0">
          <div
            className="relative flex flex-col items-center before:absolute before:left-[50%] before:top-[50%] before:-z-10
             before:h-64 before:w-[min(600px,98vw)] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full
             before:bg-gray-800 before:blur-[120px] before:content-[''] md:items-start"
          >
            <HeroTitle />
            <HeroDescription />
            <div className="flex flex-col items-center gap-3 md:flex-row">
              <HeroAboutButton />
              <HeroContactButton />
            </div>
          </div>

          <HeroProgrammerImage />
        </div>
        <BsArrowDown className="mt-20 h-16 w-16 animate-bounce opacity-50 md:mb-10 md:mt-auto" />
      </section>

      {/* about section  */}
      <section
        id="about"
        className="mb-20 grid min-h-screen place-items-center px-4 pt-16 md:mb-0"
      >
        {/* description and technologies */}
        <motion.div
          className="relative flex flex-col before:absolute before:left-[50%] before:top-[50%] before:-z-10
           before:h-[calc(100%+50px)] before:w-[calc(100%+50px)] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-3xl
            before:bg-gray-800 before:blur-[120px] before:content-[''] md:flex-row md:gap-12"
        >
          <div>
            <AboutTitle />
            <AboutDescription />
          </div>
          <AboutTechnologies />
        </motion.div>
        <AboutPersonalInfo />
      </section>

      {/* projects section  */}
      <section
        id="projects"
        className="mx-auto mb-10 flex min-h-screen flex-col items-center px-[min(80px,5vw)] pt-12"
      >
        <ProjectsTitle />
        <Projects projects={projects} />
      </section>

      <Footer />
    </>
  );
}
