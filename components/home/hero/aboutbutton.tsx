import Link from "@/components/global/button";

const AboutButton = () => {
  return (
    <Link
      variant="blue"
      href="#about"
      className="!w-[280px] border-2 border-sky-600 bg-none text-sky-400 sm:!w-[350px] md:!w-[auto]"
    >
      Get to know me better
    </Link>
  );
};

export default AboutButton;
