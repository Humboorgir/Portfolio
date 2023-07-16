import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="relative flex items-center gap-5 mt-20 before:content-[''] before:absolute before:left-[50%] before:top-[50%] before:translate-x-[-50%] 
      before:translate-y-[-50%] before:h-64 before:w-[600px] before:bg-gray-800 before:blur-[120px] before:-z-10 before:rounded-full">
      <div>
        <h3
          className="text-6xl font-bold text-white
      max-w-md mb-4">
          Turning ideas into <span>reality</span>
        </h3>
        <p className="text-base text-slate-300 max-w-sm">
          Every great project starts with an idea. Whether it's a startup, a small business, or a personal
          project and I'm here to help bring those ideas to life
        </p>
      </div>

      <Image
        className="rounded-full border-4 border-gray-600"
        src={"/logo.jpg"}
        alt="My logo"
        width={300}
        height={300}></Image>
    </div>
  );
};

export default Hero;
