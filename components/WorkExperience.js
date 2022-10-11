import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-evenly ">
      <h3 className="pt-24 mb-4 uppercase tracking-[16px] sm:tracking-[20px] text-gray-300 text-2xl">
        Experiencia
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex h-full overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center"
      >
        <div className="w-full h-full flex space-x-5 overflow-x-scroll px-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00cec9]/80 pb-4">
          <article className="flex flex-col rounded-lg items-center space-y-3 md:space-y-5 flex-shrink-0 snap-center w-[350px] md:w-[600px] xl:w-[800px] bg-[#444f52]/90 p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
              className="w-32 h-32 rounded-full bg-white object-contain object-center"
              src="/logos-marcas/excelcom.png"
            />
            <div className="px-0 md:px-10">
              <h4 className="text-xl sm:text-3xl font-light">Tech Lead</h4>
              <p className="font-bold text-lg sm:text-xl mt-1">Excelcom S.A.</p>
              <p className="uppercase py-2 text-gray-300">
                01-11-2020 - Al presente
              </p>
              <ul className="list-disc ml-5 text-md sm:text-lg">
                <li>
                  Diseño, desarrollo e implementación de infraestructura
                  física/virtual.
                </li>
                <li>Networking - Servers - Storages - HCI</li>
                <li>Responsable del área técnica (5 personas a cargo)</li>
              </ul>
            </div>
          </article>
          <article className="flex flex-col rounded-lg items-center space-y-3 md:space-y-5 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[800px] snap-center bg-[#444f52]/90 p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
              className="w-32 h-32 rounded-full bg-white object-contain object-center"
              src="/logos-marcas/nation.jfif"
            />
            <div className="px-0 md:px-10">
              <h4 className="text-xl sm:text-3xl font-light">IT Manager</h4>
              <p className="font-bold text-lg sm:text-xl mt-1">Nation S.A.</p>
              <p className="uppercase py-2 text-gray-300">
                01-11-2010 - 01-02-2019
              </p>
              <ul className="list-disc ml-5 text-md sm:text-lg">
                <li>Responsable del Área de Sistemas</li>
                <li>Mantenimiento de la estructura de redes</li>
                <li>Soporte técnico L 2/3</li>
                <li>
                  Mantenimiento y Optimización de base de datos SQL Server
                </li>
              </ul>
            </div>
          </article>
          <article className="flex flex-col rounded-lg items-center space-y-3 md:space-y-5 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[800px] snap-center bg-[#444f52]/90 p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
              className="w-32 h-32 rounded-full bg-white object-contain object-center"
              src="/logos-marcas/proresa.png"
            />
            <div className="px-0 md:px-10">
              <h4 className="text-xl sm:text-3xl font-light">
                Asistente Educativo
              </h4>
              <p className="font-bold text-lg sm:text-xl mt-1">
                Proyecto Regional Santafesino S.R.L.
              </p>
              <p className="uppercase py-2 text-gray-300">
                01-12-2006 - 01-07-2010
              </p>
              <ul className="list-disc ml-5 text-md sm:text-lg">
                <li>Asesoramiento sobre las diferentes capacitaciones</li>
                <li>Capacitación de Personal</li>
                <li>Desarrollo de los Recursos Humanos</li>
              </ul>
            </div>
          </article>
          <article className="flex flex-col rounded-lg items-center space-y-3 md:space-y-5 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[800px] snap-center bg-[#444f52]/90 p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
              className="w-32 h-32 rounded-full bg-white object-contain object-center"
              src="/logos-marcas/onedor.png"
            />
            <div className="px-0 md:px-10">
              <h4 className="text-xl sm:text-3xl font-light">
                Técnico Reparador
              </h4>
              <p className="font-bold text-lg sm:text-xl mt-1">One Dor</p>
              <p className="uppercase py-2 text-gray-300">
                01-01-2005 - 01-12-2005
              </p>
              <ul className="list-disc ml-5 text-md sm:text-lg">
                <li>Instalación y Reparación de PC's</li>
                <li>Cableado Estructurado de Redes</li>
                <li>Cableado e Instalación de Cabinas Telefónicas</li>
                <li>Configuración de Software de cabinas telefónicas</li>
              </ul>
            </div>
          </article>
          <article className="flex flex-col rounded-lg items-center space-y-3 md:space-y-5 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[800px] snap-center bg-[#444f52]/90 p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
              className="w-32 h-32 rounded-full bg-white object-contain object-center"
              src="/logos-marcas/arnet.jpeg"
            />
            <div className="px-0 md:px-10">
              <h4 className="text-xl sm:text-3xl font-light">
                Técnico Instalador
              </h4>
              <p className="font-bold text-lg sm:text-xl mt-1">Arnet Highway</p>
              <p className="uppercase py-2 text-gray-300">
                01-02-2003 - 01-12-2004
              </p>
              <ul className="list-disc ml-5 text-md sm:text-lg">
                <li>
                  Instalación y configuracion de Modems y servicios de ADSL
                  (Banda Ancha)
                </li>
              </ul>
            </div>
          </article>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkExperience;
