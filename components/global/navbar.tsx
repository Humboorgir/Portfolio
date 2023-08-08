import Ripple from "@/components/global/ripple";

import Image from "next/image";
import { FaMoon } from "react-icons/fa";

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
  return (
    <nav
      className="z-20 grid h-[70px] w-screen grid-cols-11 place-items-center
    px-[10%] py-5 pb-8 md:px-[7%] md:py-3"
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

      <ul className=" col-start-3 col-end-10 hidden h-[65px] items-center text-base md:flex">
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

      <button
        className="relative col-start-10 col-end-12 flex items-center gap-2 overflow-hidden rounded-full 
        border-2 border-sky-600 px-4 py-3 text-sky-400 hover:cursor-pointer"
      >
        Theme <FaMoon className="mt-0.5 scale-x-[-1] text-white" />
        <Ripple />
      </button>
    </nav>
  );
};

export default Navbar;
