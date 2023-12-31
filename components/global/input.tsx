import React from "react";

interface Props {
  type?: "text" | "password" | "email";
  className?: string;
  placeholder?: string;
  textarea?: boolean;
  required?: boolean;
  name?: string;
}
const input = ({
  type = "text",
  className,
  placeholder = "",
  textarea = false,
  required = false,
  name,
}: Props) => {
  if (textarea)
    return (
      <textarea
        className={`flex resize-none items-start rounded-md border border-neutral-800 bg-[#0f0f0f] px-3
        py-2 focus:outline-double focus:outline-2 focus:outline-neutral-700
      ${className}`}
        placeholder={placeholder}
        required={required}
        name={name}
      />
    );
  return (
    <input
      name={name}
      id={name}
      className={`flex items-start rounded-md border border-neutral-800 bg-[#0f0f0f] px-3 py-2
       focus:outline-double focus:outline-2 focus:outline-neutral-700
  ${className}`}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default input;
