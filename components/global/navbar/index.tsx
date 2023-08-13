import Drawer from "@/components/global/navbar/drawer";
import Ripple from "@/components/global/ripple";
import { FaDiscord } from "react-icons/fa";
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
      className="z-20 grid h-[70px] w-full grid-cols-11 place-items-center
    px-[10%] py-5 pb-8 md:py-3"
    >
      {/* logo and brand name (using a template for now since i dont have an actual logo) */}
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

      {/* links  */}
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

      {/* discord link */}
      <a
        href="https://discord.gg/26ENr5ReWB"
        className="relative col-start-10 col-end-12 hidden items-center 
        overflow-hidden rounded-lg border-2 border-sky-600 px-3 py-2 text-sky-400 
        md:flex"
        target="_blank"
      >
        <FaDiscord className="mr-2 text-xl" /> Discord
        <Ripple />
      </a>

      {/* hidden on large screens  */}
      <Drawer links={links} toggleOpen={toggleOpen} open={open} />
    </nav>
  );
};

export default Navbar;
