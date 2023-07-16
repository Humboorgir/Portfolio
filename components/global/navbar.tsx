const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-5 md:px-[7%]">
      <h3 className="text-2xl">
        <span className="text-violet-600">{"<"}</span>
        <span className="text-sky-500">{"Iliya"}</span>
        <span className="text-violet-600">{"/>"}</span>
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

      <button className="py-2 px-3 bg-sky-600 rounded-md hover:cursor-pointer">Change Theme</button>
    </nav>
  );
};

export default Navbar;
