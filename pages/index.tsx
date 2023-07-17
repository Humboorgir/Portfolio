import Navbar from "@/components/global/navbar";
import Particles from "@/components/global/particles";
import Hero from "@/components/home/hero";

import { BsArrowDown } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center">
        <Particles />
        <Navbar />
        <Hero />
        <BsArrowDown className="mb-10 mt-auto h-16 w-16 animate-bounce opacity-50" />
      </section>
      <section className="flex min-h-screen flex-col items-center"></section>
    </>
  );
}
