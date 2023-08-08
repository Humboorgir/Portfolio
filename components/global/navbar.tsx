import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import Image from "next/image";

const links = [
  {
    text: "Home",
    url: "#home",
  },
  {
    text: "About",
    url: "#about",
  },
  {
    text: "Projects",
    url: "#projects",
  },
  {
    text: "Contact",
    url: "#contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <nav
      className="z-20 grid h-[70px] w-screen grid-cols-11 place-items-center
    px-[10%] py-5 pb-8 md:py-3"
    >
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full"
          height={40}
          width={40}
          src="/pfp.png"
          alt="hamburger"
        />{" "}
        <h3 className="mb-1 text-2xl">Iliya</h3>
      </div>

      <ul className="col-start-3 col-end-10 hidden h-[65px] items-center text-base md:flex">
        {links.map((link) => {
          return (
            <li className="h-full">
              <a
                className="relative grid h-full w-24 cursor-pointer place-items-center overflow-hidden
                after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0
                 after:-z-50 after:rounded-lg after:bg-gray-500 after:opacity-0
                after:duration-300 after:hover:opacity-30"
                href={link.url}
              >
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="col-start-10 col-end-12 flex items-center justify-end md:hidden">
        <FaBars onClick={toggleOpen} className="cursor-pointer text-4xl" />
        <ul
          className={`animate-sidebarReveal absolute right-0 top-0 flex h-screen w-[50vw] translate-x-[50vw] flex-col
           items-center gap-8 bg-sky-900/40 py-5 backdrop-blur-lg transition-all duration-300 
           ease-in-out ${open && "!translate-x-0"}`}
        >
          <li className="w-full">
            <AiOutlineClose
              className="ml-auto mr-[7%] cursor-pointer text-3xl"
              onClick={toggleOpen}
            />
          </li>
          {links.map((link) => {
            return (
              <li>
                <a className="cursor-pointer text-center" href={link.url}>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
