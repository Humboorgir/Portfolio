import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return <div className={`mx-auto w-[80%] ${className}`}>{children}</div>;
};

export default Container;
