import Title from "@/components/home/hero/title";
import Description from "@/components/home/hero/description";
import AboutButton from "@/components/home/hero/aboutbutton";
import ContactButton from "@/components/home/hero/contactbutton";
import ProgrammerImage from "@/components/home/hero/programmerimage";

const Hero = () => {
  return (
    <div className="mt-16 flex items-center justify-center">
      <div
        className="relative before:absolute before:left-[50%] before:top-[50%] before:-z-10 before:h-64 
      before:w-[600px] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:bg-gray-800
       before:blur-[120px] before:content-['']"
      >
        <Title />
        <Description />
        <div className="flex items-center gap-3">
          <AboutButton />
          <ContactButton />
        </div>
      </div>

      <ProgrammerImage />
    </div>
  );
};

export default Hero;
