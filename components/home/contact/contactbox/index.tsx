import { motion } from "framer-motion";

import Title from "@/components/home/contact/contactbox/title";
import Input from "@/components/global/input";
import Button from "@/components/global/button";

import { AiOutlineMail as MailIcon } from "react-icons/ai";
const ContactBox = () => {
  return (
    <motion.form
      initial={{ opacity: 0, y: "50px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="flex w-[800px] max-w-[90vw] flex-col items-start justify-center 
      rounded-md border-2 border-neutral-800 bg-neutral-900 p-3 px-[1.5%]"
    >
      <Title />
      <Input
        className="mb-3 w-full"
        type="email"
        name="email"
        placeholder="Email address"
        required
      />
      <Input
        className="mb-3 h-[200px] w-full overflow-y-scroll"
        name="message"
        placeholder="Your message"
        textarea={true}
        required
      />
      <Button type="submit" variant="blue" className="!px-12 !py-2">
        Submit <MailIcon />
      </Button>
    </motion.form>
  );
};

async function handleSubmit(e: any) {
  e.preventDefault();
  let data = new FormData(e.target);
  let response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(data)),
  });
  console.log(response.status);
}

export default ContactBox;
