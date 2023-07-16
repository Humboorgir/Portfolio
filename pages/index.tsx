import Navbar from "@/components/global/navbar";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <>
      <section className="min-h-screen">
        <Navbar />
        <Hero />
      </section>
    </>
  );
}
