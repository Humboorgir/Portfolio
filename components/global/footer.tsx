import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-8 border-t border-t-neutral-700 p-8 px-4 
    md:flex-row md:px-20"
    >
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
