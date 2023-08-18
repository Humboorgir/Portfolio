import React from "react";

interface Props {
  type?: "text" | "password" | "email";
  className?: string;
  placeholder?: string;
  textarea?: boolean;
}
const input = ({
  type = "text",
  className,
  placeholder = "",
  textarea = false,
}: Props) => {
  if (textarea)
    return (
      <textarea
        className={`flex items-start rounded-md border border-neutral-800 bg-[#0f0f0f] px-3 py-2
        focus:outline-double focus:outline-2 focus:outline-neutral-700
      ${className}`}
        placeholder={placeholder}
      />
    );
  return (
    <input
      className={`flex items-start rounded-md border border-neutral-800 bg-[#0f0f0f] px-3 py-2
       focus:outline-double focus:outline-2 focus:outline-neutral-700
  ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default input;
