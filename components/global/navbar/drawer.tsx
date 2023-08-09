import { AiOutlineClose } from "react-icons/ai";
import { FaDiscord, FaBars } from "react-icons/fa";

interface Link {
  text: string;
  url: string;
}

interface Props {
  open: boolean;
  toggleOpen: () => void;
  links: Link[];
}

const Drawer = ({ open, toggleOpen, links }: Props) => {
  return (
    <div className="col-start-10 col-end-12 flex items-center justify-end md:hidden">
      <FaBars onClick={toggleOpen} className="cursor-pointer text-4xl" />

      {/* content of the drawer (hidden when open is not true) */}
      <ul
        className={`absolute right-0 top-0 flex h-screen w-[50vw] translate-x-[50vw] flex-col
     items-center bg-sky-900/40 py-5 backdrop-blur-lg transition-all duration-300 
     ease-in-out ${open && "!translate-x-0"}`}
      >
        {/* close button  */}
        <li className="w-full">
          <AiOutlineClose
            className="ml-auto mr-[7%] cursor-pointer text-3xl"
            onClick={toggleOpen}
          />
        </li>

        {/* links  */}
        {links.map((link) => {
          return (
            <li className="mb-6">
              <a
                className="cursor-pointer text-center"
                onClick={toggleOpen}
                href={link.url}
              >
                {link.text}
              </a>
            </li>
          );
        })}

        {/* discord  */}
        <li>
          <a target="_blank" href="https://discord.gg/26ENr5ReWB">
            Discord
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
