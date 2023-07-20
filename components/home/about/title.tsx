import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: "50px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="text-5xl font-bold leading-snug"
    >
      About me
    </motion.h2>
  );
};

export default Title;
