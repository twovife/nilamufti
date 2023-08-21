import Image from "next/image";
import React, { useRef } from "react";
import icon1 from "../public/icon1.png";
import icon2 from "../public/icon2.png";
import icon3 from "../public/icon3.png";
import icon4 from "../public/icon4.png";
import icon5 from "../public/icon5.png";
import icon6 from "../public/icon6.png";
import { motion, useInView } from "framer-motion";

const MenuBar = () => {
  const handleClick = (params: string) => {
    const targetElement = document.getElementById(params);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const menuRef = useRef(null);
  const isMenuInView = useInView(menuRef);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.6,
      },
    },
  };

  const listItem = {
    hidden: { y: 10 },
    show: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  console.log(isMenuInView);

  return (
    <div
      ref={menuRef}
      className="fixed w-full p-3 bottom-0 left-1/2 -translate-x-1/2 z-[100] max-w-2xl"
      style={{
        transform: isMenuInView
          ? "translate(-50%, 0%)"
          : "translate(-50%,100%)",
        opacity: isMenuInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex justify-evenly bg-white/30 backdrop-blur p-3 rounded-lg items-center gap-3 shadow"
      >
        <motion.button
          variants={listItem}
          onClick={() => handleClick("home")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex-1"
        >
          <Image src={icon1} alt="icon 1" />
        </motion.button>
        <motion.button
          variants={listItem}
          onClick={() => handleClick("mempelai")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex-1"
        >
          <Image src={icon2} alt="icon 1" />
        </motion.button>
        <motion.button
          variants={listItem}
          onClick={() => handleClick("galery")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex-1"
        >
          <Image src={icon3} alt="icon 1" />
        </motion.button>
        <motion.button
          variants={listItem}
          onClick={() => handleClick("resepsi")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex-1"
        >
          <Image src={icon4} alt="icon 1" />
        </motion.button>
        <motion.button
          variants={listItem}
          onClick={() => handleClick("gift")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex-1"
        >
          <Image src={icon5} alt="icon 1" />
        </motion.button>
        <motion.button
          variants={listItem}
          onClick={() => handleClick("maps")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex-1"
        >
          <Image src={icon6} alt="icon 1" />
        </motion.button>
        <motion.button
          variants={listItem}
          onClick={() => handleClick("home")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex-1"
        >
          <Image src={icon1} alt="icon 1" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MenuBar;
