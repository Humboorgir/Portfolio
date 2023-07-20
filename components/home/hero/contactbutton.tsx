import Link from "@/components/global/link";

const ContactButton = () => {
  return (
    <Link
      variant="blue"
      href="#contact"
      className="!w-[280px] sm:!w-[350px] md:!w-[auto]"
    >
      Contact me
    </Link>
  );
};

export default ContactButton;
