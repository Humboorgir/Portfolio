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
      className="flex h-[70px] w-screen items-center justify-between bg-gradient-to-br from-sky-600 to-sky-800 
    p-5 md:px-[7%]"
    >
      <h3 className="grow-1 mb-2 basis-0 text-3xl">Iliya</h3>

      <ul className="grow-4 hidden h-[70px] basis-0 items-center text-lg md:flex">
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

      <button className="grow-1 basis-0 rounded-md bg-sky-600 px-3 py-2 hover:cursor-pointer">
        Change Theme
      </button>
    </nav>
  );
};

export default Navbar;
