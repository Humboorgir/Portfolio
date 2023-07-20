import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: "100px" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
      className="text-5xl font-bold leading-snug"
    >
      About me
    </motion.h2>
  );
};

export default Title;
