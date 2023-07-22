import { FaGithub, FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="relative mt-52 flex flex-col items-center justify-center p-8 px-4 
      text-center before:absolute before:left-[50%] before:top-[50%] before:-z-10 before:h-full 
      before:w-full before:translate-x-[-50%] before:translate-y-[-50%]
       before:rounded-3xl before:bg-gray-800 before:blur-[160px]
       before:content-[''] after:absolute after:left-[50%] after:top-0
       after:h-1 after:w-[min(500px,80vw)] after:translate-x-[-50%] after:rounded-full after:bg-gradient-to-r
        after:from-zinc-600 after:to-zinc-400 md:px-[20%]"
    >
      {/* logo and copyright statement  */}{" "}
      <p className="mt-3 h-[42px] text-4xl font-bold tracking-wider text-slate-200">
        Iliya
      </p>
      {/* social media links  */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center justify-center gap-2 text-3xl">
          <FaGithub />
          <FaDiscord />
          <FaYoutube />
          <FaInstagram />
        </div>
        <h3 className="font-bold text-slate-300">Helpful links</h3>
      </div>
      <p className="mt-4 text-sm text-zinc-400">
        Copyright &copy; 2023 - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
