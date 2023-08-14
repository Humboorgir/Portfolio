import { AiOutlineClose } from "react-icons/ai";
import { FaDiscord, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <div className="col-start-10 col-end-12 flex items-center justify-end overflow-hidden md:hidden">
      <FaBars onClick={toggleOpen} className="cursor-pointer text-4xl" />

      {/* content of the drawer (hidden when open is not true) */}
      <ul
        className={`absolute right-[9%] top-[13%] flex w-max origin-top-right
        scale-0 flex-col items-center rounded-lg bg-gray-800 py-1
        opacity-0 duration-[250ms] ease-out ${
          open && "!scale-100 !opacity-100"
        }`}
      >
        {/* links  */}
        {links.map((link) => {
          return (
            <li className="w-full rounded-lg py-3 hover:bg-gray-700">
              <a
                className="h-full w-full cursor-pointer px-8 py-3 text-center"
                onClick={toggleOpen}
                href={link.url}
              >
                {link.text}
              </a>
            </li>
          );
        })}

        {/* discord  */}
        <li className="w-full rounded-lg px-8 py-3 hover:bg-gray-700">
          <a
            className="h-full w-full"
            target="_blank"
            href="https://discord.gg/26ENr5ReWB"
          >
            Discord
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
