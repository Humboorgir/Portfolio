import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: "50px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
      viewport={{ once: true }}
      className="mb-8 ml-3 text-base text-neutral-400 md:text-lg"
    >
      Let's talk! Send me an email to discuss further
    </motion.p>
  );
};

export default Description;
