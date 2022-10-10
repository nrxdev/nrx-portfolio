import { motion } from "framer-motion";
import Image from "next/image";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 md:space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#444f52]/90 p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="http://2.bp.blogspot.com/-lFPhIYizHOo/Vdxq9lFVRqI/AAAAAAABFk0/q6p_i1pZg9U/s1600/LOGO%2BDE%2BGESTION-SINTESIS-762075.png"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl sm:text-3xl font-light">Tech Lead</h4>
        <p className="font-bold text-lg sm:text-xl mt-1">Excelcom S.A.</p>
        <div className="flex space-x-2 my-1 sm:my-2">
          <img
            src="/logos-marcas/vmware.png"
            className="h-10 w-10 rounded-full object-contain bg-white"
          />
          <img
            src="/logos-marcas/dell.png"
            className="h-10 w-10 rounded-full object-contain bg-white"
          />
          <img
            src="/logos-marcas/fortinet.png"
            className="h-10 w-10 rounded-full object-contain bg-gray-300"
          />
          <img
            src="/logos-marcas/veeam.png"
            className="h-10 w-10 rounded-full object-contain bg-gray-300"
          />
        </div>
        <p className="uppercase py-2 text-gray-300">01-11-2020 - Al presente</p>
        <ul className="list-disc md:space-y-2 ml-5 text-md sm:text-lg">
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
