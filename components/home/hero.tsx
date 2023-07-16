const Hero = () => {
  return (
    <div
      className="relative mt-24 before:content-[''] before:absolute before:left-[50%] before:top-[50%] before:translate-x-[-50%] 
      before:translate-y-[-50%] before:h-64 before:w-[600px] before:bg-sky-950 before:blur-[120px] before:-z-10 before:rounded-full">
      <h3
        className="text-5xl leading-snug font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-violet-400
      max-w-md">
        Transforming <span>ideas</span> into <span className="">reality</span> with cutting-edge technology
      </h3>
    </div>
  );
};

export default Hero;
