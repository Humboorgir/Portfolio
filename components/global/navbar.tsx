const Navbar = () => {
  return (
    <nav
      className="flex h-[70px] w-screen items-center justify-between bg-gradient-to-br from-sky-600 to-sky-800 
    p-5 md:px-[7%]"
    >
      <h3 className="grow-1 mb-2 basis-0 text-3xl">Iliya</h3>

      <ul className="grow-4 hidden basis-0 items-center gap-8 md:flex">
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

      <button className="grow-1 basis-0 rounded-md bg-sky-600 px-3 py-2 hover:cursor-pointer">
        Change Theme
      </button>
    </nav>
  );
};

export default Navbar;
