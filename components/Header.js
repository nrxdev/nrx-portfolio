import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-start justify-between p-5 sticky top-0 max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/nicolasregenhardt/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url=" https://github.com/nrxdev"
          fgColor="gray"
          bgColor="transparent"
          network="github"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://www.facebook.com/nicolas.regenhardt"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://www.instagram.com/nicolasregenhardt/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          rel="noopener noreferrer"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            url="#contact"
            fgColor="gray"
            bgColor="transparent"
            network="email"
          />
          <p className="uppercase hidden md:inline-flex">contactame</p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
