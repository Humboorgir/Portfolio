import type { ReactNode } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
interface Props {
  variant: "blue" | "violet";
  href: string;
  children: ReactNode;
  //   for custom styles:
  className?: string;
}

const Button = ({ variant, href, children, className }: Props) => {
  const bgStyle =
    variant === "blue"
      ? "bg-gradient-to-br from-primary to-sky-800"
      : "bg-gradient-to-br from-violet-600 to-violet-700";
  return (
    <motion.div
      className={`flex w-fit cursor-pointer items-center justify-between gap-2 rounded-lg px-4 py-3 ${bgStyle} ${className}`}
    >
      <Link href={href}>{children}</Link>
    </motion.div>
  );
};

export default Button;
