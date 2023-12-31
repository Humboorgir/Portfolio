import Image from "next/image";

const ProgrammerImage = () => {
  return (
    <Image
      className="-ml-4 mb-8 hidden scale-x-[-1] lg:inline"
      src={"/programmer.svg"}
      alt="programmer"
      width={450}
      height={450}
    />
  );
};

export default ProgrammerImage;
