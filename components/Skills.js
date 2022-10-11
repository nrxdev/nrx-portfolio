import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex relative flex-col text-center max-w-7xl px-2 md:text-left xl:flex-row xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-widest sm:tracking-[3px] text-gray-300 text-sm">
        Pase el cursor sobre una skill para ver mi competencia actual
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-10 pt-20">
        <Skill logo="dell.png" percent="90%" />
        <Skill logo="vmware.png" percent="90%" />
        <Skill logo="veeam.png" percent="85%" />
        <Skill logo="trendmicro.jpg" percent="80%" />
        <Skill logo="mysql.png" percent="80%" />
        <Skill logo="sqlserver.png" percent="80%" />
        <Skill logo="react.webp" percent="80%" />
        <Skill logo="next.png" percent="80%" />
        <Skill logo="csharp.png" percent="75%" />
        <Skill logo="fortinet.jpg" percent="65%" />
        <Skill logo="mongodb.png" percent="55%" />
        <Skill logo="node.png" percent="50%" />
      </div>
    </motion.div>
  );
};

export default Skills;
