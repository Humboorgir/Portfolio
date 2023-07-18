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
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        className={`flex w-fit scale-100 items-center justify-between gap-2 rounded-lg px-4 py-3
       transition-transform hover:scale-105 active:scale-95 ${bgStyle} ${className}`}
        href={href}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Button;
