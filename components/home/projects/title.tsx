import { motion } from "framer-motion";

const Title = () => {
  return (
    <div
      className="relative before:absolute before:left-[50%]
      before:top-[50%] before:-z-10 before:-mt-4 before:h-full before:w-[calc(100%+50px)]
       before:max-w-[100vw] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-3xl before:bg-gray-700/80
       before:blur-2xl before:content-[''] md:before:ml-2 md:before:bg-gray-700"
    >
      <div className="max-w-[100vw] overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, x: "50px" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative mb-8 ml-2 w-fit max-w-[100vw] text-center text-3xl font-bold md:text-left"
        >
          Projects I've made previously
        </motion.h2>
      </div>
    </div>
  );
};

export default Title;
