import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 sm:top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        Sobre mí
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="/imgAbout.jpg"
        className="-mb-20 mt-10 md:mb-0 flex-shrink-0 w-24 h-24 rounded-full object-cover lg:rounded-lg lg:w-[250px] lg:h-[400px] xl:w-[350px] xl:h-[500px]"
      />
      <div className="space-y-2 md:space-y-10 px-0 md:px-10">
        <h4 className="text-xl sm:text-4xl font-semibold">
          Aquí hay una{" "}
          <span className="underline decoration-[#00cec9]/50">pequeña</span>{" "}
          reseña
        </h4>
        <p className="text-sm md:text-base">
          Hola, soy Nicolás 👋🏽. Hace 20 años que me dedico a la rama de la
          infraestructura, tanto física como virtual. Tengo sólidos
          conocimientos de Networking, Servidores, Storages, Backup y Seguridad.
          Actualmente estoy llevando adelante varios proyectos a gran escala
          donde se involucran muchas tecnologías distintas y de diversas marcas
          como Dell, VMware, Fortinet, Veeam y Trend en pos de brindar una
          solución completa e integral de armado y puesta en funcionamiento de
          Datacenters completos para distintas empresas y dependencias
          gubernamentales.{"\n"}
          Además te cuento que desde hace más de 15 años soy un apasionado de la
          programación (una de las razones por la que hoy estás viendo mi
          portfolio 😁). Espero que esta pequeña reseña te ayude a conocerme un
          poquito mejor
        </p>
      </div>
    </motion.div>
  );
};

export default About;
