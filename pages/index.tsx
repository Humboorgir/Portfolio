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
import Head from "next/head";

import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
import projects from "@/projects.js";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Iliya ~ Full stack web developer</title>
        <meta
          name="description"
          content="My personal website, built to showcase my experience in both back end and front end development since early 2020"
        ></meta>
        <meta
          name="keywords"
          content="Iliya, HTML, CSS, JS, Next.js, React.js, Vue.js, Svelte, Express, SQL, MongoDB, Socket IO , Web developer, Full stack web developer, Web designer, Portfolio, Programmer"
        ></meta>
        <meta name="author" content="Iliya"></meta>
      </Head>

      {/* hero section  */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-between"
      >
        <Particles />
        <Navbar />
        <div className="flex items-center justify-center gap-0 py-8 md:py-12">
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
        <BsArrowDown className="mt-14 h-16 w-16 animate-bounce opacity-50 md:mb-8" />
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
      <section id="projects" className="mb-10 min-h-screen w-screen pt-12">
        {/* container  */}
        <div className="mx-auto flex max-w-5xl flex-col items-center lg:items-start">
          <ProjectsTitle />
          <Projects projects={projects} />
        </div>
      </section>

      <Footer />
    </>
  );
}
