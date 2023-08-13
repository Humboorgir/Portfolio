import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="mx-auto w-[80%]">{children}</div>;
};

export default Container;
