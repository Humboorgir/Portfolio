import { FaBars } from "react-icons/fa";
import Ripple from "@/components/global/ripple";

interface Link {
  text: string;
  url: string;
}

interface Props {
  open: boolean;
  toggleOpen: () => void;
  links: Link[];
}

const DropDown = ({ open, toggleOpen, links }: Props) => {
  return (
    <div className="relative col-start-10 col-end-12 flex items-center justify-end md:hidden">
      <div
        onClick={toggleOpen}
        className="relative -mr-1.5 cursor-pointer overflow-hidden p-1.5"
      >
        <FaBars className="cursor-pointer text-4xl" />
        <Ripple fast={true} />
      </div>

      {/* content of the drop down (hidden when open is not true) */}
      <ul
        className={`absolute right-0 top-[calc(100%+4px)] flex w-max origin-top-right
        scale-[0.85] flex-col items-center rounded-lg bg-gray-800 py-1
        opacity-0 duration-150 ease-out ${open && "!scale-100 !opacity-100"}`}
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

export default DropDown;
