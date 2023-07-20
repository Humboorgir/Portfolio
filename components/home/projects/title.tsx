import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: "50px" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative mb-8 w-fit text-3xl font-bold before:absolute before:left-[50%] before:top-[50%] before:-z-10
    before:h-full before:w-[calc(100%+50px)] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-3xl
     before:bg-gray-700 before:blur-2xl before:content-['']"
    >
      Projects I've made previously
    </motion.h2>
  );
};

export default Title;
