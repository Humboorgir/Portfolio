import Title from "@/components/home/contact/contactbox/title";
import Input from "@/components/global/input";
import Button from "@/components/global/button";

import { AiOutlineMail as MailIcon } from "react-icons/ai";
const ContactBox = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault}
      className="flex w-[800px] max-w-[90vw] flex-col items-start justify-center 
      rounded-md border-2 border-neutral-800 bg-neutral-900 p-3 px-[1.5%]"
    >
      <Title />
      <Input
        className="mb-3 w-full"
        type="email"
        placeholder="Email address"
        required
      />
      <Input
        className="mb-3 h-[200px] w-full overflow-y-scroll"
        placeholder="Your message"
        textarea={true}
        required
      />
      <Button type="submit" variant="blue" className="!px-12 !py-2">
        Submit <MailIcon />
      </Button>
    </form>
  );
};

export default ContactBox;
