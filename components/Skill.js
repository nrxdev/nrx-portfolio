import { motion } from "framer-motion";

const Skill = ({ logo, percent }) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        src={`/logos-marcas/${logo}`}
        className="rounded-full border border-gray-600 bg-white object-contain h-24 w-24 md:h-28 md:w-28 xl:h-28 xl:w-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{percent}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
