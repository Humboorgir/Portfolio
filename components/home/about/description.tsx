import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: "50px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="text-lg leading-snug text-slate-300 lg:max-w-md"
    >
      Hey there! I'm Iliya, a 15 year old high school student and full stack web
      developer from Iran. I've been programming since early 2020 or in other
      words, since I had just turned 12! I've been using computers since the age
      of 5 and have always shown a huge passion for them. During all these years
      I've learned a lot and have made countless amounts of projects. In my
      early days of programming, I started off by back end development however,
      It's been 1.5 years since I've been primarily learning and working on
      front end development (alongside with back end development) and have
      managed to learn CSS and most major frontend frameworks to a very high
      degree and as mentioned earlier, I'm very passionate towards my work and
      always open to gain new skills.
    </motion.p>
  );
};

export default Description;
