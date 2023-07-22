import { FaGithub, FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-6 border-t border-t-neutral-700 p-8 px-4 md:px-20">
      {/* logo and copyright statement  */}
      <div className="flex flex-col items-center text-center">
        <Logo />
        <p className="mt-3 text-lg text-slate-200">
          Iliya fazlollahi <br /> Programming since 2020
        </p>
        <p className="mt-2 text-sm text-zinc-400">
          Copyright &copy; 2023 - All right reserved
        </p>
      </div>

      {/* social media links  */}
      <div className="flex items-center justify-center gap-2 text-3xl">
        <FaGithub />
        <FaDiscord />
        <FaYoutube />
        <FaInstagram />
      </div>
    </footer>
  );
};

function Logo() {
  return (
    <Image
      className="rounded-full"
      height={120}
      width={120}
      src="/pfp.png"
      alt="Iliya"
    />
  );
}

export default Footer;
