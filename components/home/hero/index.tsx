import { BsArrowDown } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex items-center mt-20">
      <div
        className="relative before:content-[''] before:absolute before:left-[50%] before:top-[50%] before:translate-x-[-50%] 
      before:translate-y-[-50%] before:h-64 before:w-[600px] before:bg-gray-800 before:blur-[120px] before:-z-10 before:rounded-full">
        <h3
          className="text-6xl font-bold text-white
      max-w-md mb-4">
          Turning ideas into <span>reality</span>
        </h3>
        <p className="text-base text-slate-300 max-w-sm mb-5">
          Every great project starts with an idea. Whether it's a startup, a small business, or a personal
          project and I'm here to help bring those ideas to life
        </p>
        <div className="flex items-center gap-3">
          <Link
            className="flex items-center gap-2 w-fit p-3 bg-gradient-to-br from-sky-600 to-sky-700 rounded-lg"
            href="/github">
            Read more about me <BsArrowDown className="text-lg" />
          </Link>
        </div>
      </div>

      <Image src={"/programmer.svg"} alt="My logo" width={450} height={450}></Image>
    </div>
  );
};

export default Hero;
