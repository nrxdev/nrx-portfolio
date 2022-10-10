import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center max-w-7xl md:text-left xl:flex-row xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-300 text-sm">
        Pase el cursor sobre una skill para ver mi competencia actual
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 pt-20">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
        <Skill directionLeft />
      </div>
    </motion.div>
  );
};

export default Skills;
