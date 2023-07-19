import type { ReactNode } from "react";

import Ripple from "@/components/global/ripple";
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
    <Link
      className={`relative flex w-fit cursor-pointer items-center justify-between gap-2 overflow-hidden rounded-lg px-4 py-3 ${bgStyle} ${className}
        hover:`}
      href={href}
    >
      {children}
      <Ripple />
    </Link>
  );
};

export default Button;
