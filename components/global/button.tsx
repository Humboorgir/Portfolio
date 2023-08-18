import type { ReactNode } from "react";
import type { MouseEventHandler } from "react";

import Ripple from "@/components/global/ripple";

interface Props {
  type?: "submit" | "button" | "reset";
  variant: "blue" | "violet";
  href?: string;
  children: ReactNode;
  //   for custom styles:
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  variant,
  href,
  children,
  className,
  type,
  onClick,
}: Props) => {
  const bgStyle =
    variant === "blue"
      ? "bg-gradient-to-br from-primary to-sky-800"
      : "bg-gradient-to-br from-violet-600 to-violet-700";
  if (!href)
    return (
      <button
        type={type}
        className={`relative flex w-fit cursor-pointer items-center justify-center
         gap-2 overflow-hidden rounded-lg px-4 py-3 ${bgStyle} ${className}`}
        onClick={onClick}
      >
        {children}
        <Ripple />
      </button>
    );

  return (
    <a
      className={`relative flex w-fit cursor-pointer items-center justify-center gap-2
      overflow-hidden rounded-lg px-4 py-3 ${bgStyle} ${className}`}
      href={href}
    >
      {children}
      <Ripple />
    </a>
  );
};

export default Button;
