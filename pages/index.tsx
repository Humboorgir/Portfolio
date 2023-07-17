import Navbar from "@/components/global/navbar";
import Particles from "@/components/global/particles";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center ">
        <Particles />
        <Navbar />
        <Hero />
      </section>
    </>
  );
}
