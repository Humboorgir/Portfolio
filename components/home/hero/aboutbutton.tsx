import Button from "@/components/global/button";

const AboutButton = () => {
  return (
    <Button
      variant="blue"
      href="#about"
      className="!w-full border-2 border-sky-600 bg-none text-sky-400 lg:!w-[auto]"
    >
      Get to know me better
    </Button>
  );
};

export default AboutButton;
