import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: "50px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="ml-3 text-xl md:text-3xl"
    >
      Interested in working together?
    </motion.h2>
  );
};

export default Title;
