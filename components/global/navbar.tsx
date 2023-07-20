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

import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="fixed z-20 grid h-[70px] w-screen grid-cols-11 place-items-center bg-gradient-to-br from-sky-600 to-sky-800 
    px-5 md:px-[7%]"
    >
      <h3 className="col-start-1 col-end-3 mb-2 text-3xl">Iliya</h3>

      <ul className=" col-start-3 col-end-10 hidden h-[65px] items-center text-lg md:flex">
        {links.map((link) => {
          return (
            <li className="h-full">
              <a
                className="grid h-full w-24 cursor-pointer place-items-center transition-colors hover:bg-sky-600"
                href={link.url}
              >
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <button className="col-start-10 col-end-12 flex items-center gap-2 rounded-full  bg-gray-900 px-4 py-3 hover:cursor-pointer">
        Theme <FaMoon className="mt-0.5 scale-x-[-1] text-white" />
      </button>
    </nav>
  );
};

export default Navbar;
