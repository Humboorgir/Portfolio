import Button from "@/components/global/button";

const ContactButton = () => {
  return (
    <Button
      variant="blue"
      href="#contact"
      className="!w-full min-w-[260px] lg:!w-[auto] lg:min-w-[auto]"
    >
      Contact me
    </Button>
  );
};

export default ContactButton;
