const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between p-5 md:px-[7%]">
      <h3 className="text-2xl">
        <span className="text-violet-400">{"<"}</span>
        <span className="text-sky-400">{"Iliya"}</span>
        <span className="text-violet-400">{"/>"}</span>
      </h3>

      <ul className="flex items-center gap-8">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>

      <button className="rounded-md bg-sky-600 px-3 py-2 hover:cursor-pointer">
        Change Theme
      </button>
    </nav>
  );
};

export default Navbar;
