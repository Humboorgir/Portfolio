import { BsArrowDown } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-16 flex items-center justify-center">
      <div
        className="relative before:absolute before:left-[50%] before:top-[50%] before:-z-10 before:h-64 
      before:w-[600px] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:bg-gray-800 before:blur-[120px] before:content-['']"
      >
        <h3
          className="mb-4 max-w-md text-6xl
      font-bold text-white"
        >
          Turning ideas into <span>reality</span>
        </h3>
        <p className="mb-5 max-w-sm text-base text-slate-300">
          Every great project starts with an idea. Whether it's a startup, a
          small business, or a personal project and I'm here to help bring those
          ideas to life
        </p>
        <div className="flex items-center gap-3">
          <Link
            className="flex w-fit items-center gap-2 rounded-lg bg-gradient-to-br from-primary to-sky-800 px-4 py-3"
            href="/github"
          >
            Get to know me better
            <BsArrowDown className="text-lg" />
          </Link>
          <Link
            className="flex w-fit items-center gap-2 rounded-lg bg-gradient-to-br from-violet-600 to-violet-700 px-4 py-3"
            href="/github"
          >
            Contact me
          </Link>
        </div>
      </div>

      <Image
        className="-ml-12 mb-8 hidden scale-x-[-1] md:inline"
        src={"/programmer.svg"}
        alt="My logo"
        width={450}
        height={450}
      ></Image>
    </div>
  );
};

export default Hero;
