import { motion } from "framer-motion";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        Proyectos
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#00cec9]/80 scrollbar-thin">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="http://2.bp.blogspot.com/-lFPhIYizHOo/Vdxq9lFVRqI/AAAAAAABFk0/q6p_i1pZg9U/s1600/LOGO%2BDE%2BGESTION-SINTESIS-762075.png"
              alt=""
              className="max-h-60"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#00cec9]/50">
                  Case study:
                </span>{" "}
                Implementacion de datacenter
              </h4>
              <p className="text-lg text-center md:text-left">
                asdlkjas ldkja slkdjasdlkjasdskjd lkasdjals. kdjaslj dasdjas
                ldjasldkjas lkdjalsk. djaslkd jasdasdl kajsdlkasjdlasjd. jlasd
                sdlk jasdlkasdjlak sjdals djalsjd
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#00cec9]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
