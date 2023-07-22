import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-start justify-between gap-8 border-t-2 border-t-neutral-700 p-8 px-4 
    md:flex-row md:items-center md:px-20"
    >
      <div className="flex items-center gap-3">
        <Logo />
        <div>
          <h3 className="text-2xl text-slate-200">Iliya</h3>
          <p className="text-sm text-slate-400">
            Copyright © 2023 Humboorgir-portfolio, All rights reserved.
          </p>
        </div>
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
