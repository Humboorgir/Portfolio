import Navbar from "@/components/global/navbar";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center min-h-screen">
        <Navbar />
        <Hero />
      </section>
    </>
  );
}
