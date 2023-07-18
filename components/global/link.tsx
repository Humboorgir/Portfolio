import type { ReactNode } from "react";

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
      className={`flex w-fit items-center justify-between gap-2 rounded-lg px-4 py-3 ${bgStyle} ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Button;
