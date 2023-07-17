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
import { BsArrowDown } from "react-icons/bs";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* hero section  */}
      <section className="relative flex min-h-screen flex-col items-center">
        <Particles />
        <Navbar />
        <div className="mt-16 flex items-center justify-center">
          <div
            className="relative before:absolute before:left-[50%] before:top-[50%] before:-z-10 before:h-64 
      before:w-[600px] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:bg-gray-800
       before:blur-[120px] before:content-['']"
          >
            <HeroTitle />
            <HeroDescription />
            <div className="flex items-center gap-3">
              <HeroAboutButton />
              <HeroContactButton />
            </div>
          </div>

          <HeroProgrammerImage />
        </div>
        <BsArrowDown className="mt-16 h-16 w-16 animate-bounce opacity-50 md:mb-10 md:mt-auto" />
      </section>

      {/* about section  */}
      <section className="flex min-h-screen flex-col items-center pt-16">
        <div
          className="relative flex flex-col before:absolute before:left-[50%] before:top-[50%] before:-z-10 before:h-[calc(100%+50px)] before:w-[calc(100%+50px)] before:translate-x-[-50%] 
      before:translate-y-[-50%] before:rounded-3xl before:bg-gray-800 before:blur-[120px] before:content-['']
       md:flex-row md:gap-12 "
        >
          <div>
            <AboutTitle />
            <AboutDescription />
          </div>
          <AboutTechnologies />
        </div>
      </section>
    </>
  );
}
