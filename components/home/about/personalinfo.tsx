import { motion } from "framer-motion";

const PersonalInfo = () => {
  return (
    <div
      className="mt-20 grid w-full max-w-md grid-cols-2 place-items-start gap-8 overflow-hidden 
      md:max-w-4xl md:grid-cols-4 md:place-items-center lg:mt-0"
    >
      <motion.div
        initial={{ opacity: 0, x: "100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col items-start"
      >
        <span className="text-slate-300">Name:</span>
        <span className="text-lg">Iliya</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <span className="text-slate-300">Date of birth:</span>
        <span className="text-lg">2008/5/9</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <span className="text-slate-300">Experience:</span>
        <span className="text-lg">+3 years</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "100px" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <span className="text-slate-300">Location:</span>
        <span className="text-lg">Iran</span>
      </motion.div>
    </div>
  );
};

export default PersonalInfo;
