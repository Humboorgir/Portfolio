import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-start justify-between gap-8 border-t border-t-neutral-700 p-8 px-4 
    md:flex-row md:items-center md:px-20"
    >
      {/* logo and copyright statement  */}
      <div className="flex items-center gap-3">
        <Logo />
        <div>
          <h3 className="text-2xl text-slate-200">Iliya</h3>
          <p className="text-sm text-zinc-300">
            Copyright © 2023 Humboorgir-portfolio,
            <br /> All rights reserved.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-1 text-sm">
        <h3 className="mb-0.5 text-xl text-slate-500">LINKS</h3>
        <span>Home</span>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </footer>
  );
};

function Logo() {
  return (
    <Image
      className="rounded-full"
      height={80}
      width={80}
      src="/pfp.png"
      alt="Iliya"
    />
  );
}

export default Footer;
