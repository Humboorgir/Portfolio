import Link from "@/components/global/link";

import { BsArrowDown } from "react-icons/bs";

const AboutButton = () => {
  return (
    <Link variant="blue" href="#about">
      Get to know me better <BsArrowDown className="text-lg" />
    </Link>
  );
};

export default AboutButton;
