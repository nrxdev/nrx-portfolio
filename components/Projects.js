import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Adquisición de un sistema de procesamiento de datos HCI con HA",
      description:
        "Modernización de Datacenter introduciendo una solución hiperconvergente basada en vSAN, logrando de esta manera Agilidad, Simpleza y Escalibilidad todo al mismo tiempo, obteniendo así características de Nubes Públicas pero on Premise.",
      logo: "/logos-marcas/iapser.jpg",
    },
    {
      title: "Proyecto Wireless en Nodo Tecnológico y Forum",
      description:
        "Proveer una solución de conectividad inalámbrica de alta performance y densidad, para brindar servicio de conectividad inalámbrico para 25.000 asistentes en total, esperando un pico de 16.000 conexiones en simultaneo entre ambos sitios.",
      logo: "/logos-marcas/santiago.jpg",
    },
    {
      title: "Solución de Hiperconvergencia",
      description:
        "Las soluciones HCI (Hyper-Converge Infrastructure) de VMware están posicionadas para aliviar el stress económico y escasos recursos que sufre el Datacenter hoy en día. VMware vSAN es el market-leader de software HCI, posee el mayor número de clientes y unidades entregadas comparado con todos los HCI vendors del mercado.",
      logo: "/logos-marcas/motta.jfif",
    },
    {
      title: "Solución de almacenamiento",
      description:
        "Incorporación de Infraestructura de Almacenamiento compuesta por 2 PowerStore 500T con el objetivo de obtener una capacidad de 25TB cada uno.",
      logo: "/logos-marcas/bica.png",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-10 xl:top-12 uppercase tracking-[20px] text-gray-300 text-2xl">
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
                y: -100,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={project.logo}
              alt=""
              className="h-40 w-40 xl:h-50 xl:w-50 flex-shrink-0 rounded-full object-cover"
            />
            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#00cec9]/50">
                  Proyecto:
                </span>{" "}
                {project.title}
              </h4>
              <p className="text-md md:text-lg text-center md:text-left">
                {project.description}
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
