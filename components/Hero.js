import Image from "next/image";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hola, mi nombre es Nicolás Regenhardt",
      "Me-gusta-la-infraestructura",
      "<Pero-Apasionado-Por-La-Programacion />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto grayscale object-cover"
        src={"/profile-1.jpeg"}
        alt="profile-picture"
        height={128}
        width={128}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-300 pb-1 tracking-[15px]">
          tech architect
        </h2>
        <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[15px]">
          APASIONADO DEL SOFTWARE
        </h2>
        <h1 className="text-3xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#00cec9" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">Sobre Mí</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experiencia</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Proyectos</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
