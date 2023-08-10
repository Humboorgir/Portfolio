import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: "100px" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="text-center text-5xl font-bold leading-snug md:text-left"
    >
      About me
    </motion.h2>
  );
};

export default Title;
