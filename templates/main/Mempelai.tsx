import React from "react";
import atas from "../../public/atasop.png";
import bawah from "../../public/bawahop.png";
import mempelaif from "../../public/mempelaif.png";
import mempelaim from "../../public/mempelaim.png";
import ornament2 from "../../public/ornament2.png";
import ornament3 from "../../public/ornament3.png";
import ornametgaris from "../../public/ornametgaris.png";
import Image from "next/image";
import { Questrial, Abril_Fatface } from "next/font/google";
import { motion, useInView } from "framer-motion";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
});
const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
});

const cerminStyle = {
  transform: "scaleX(-1)",
  filter: "FlipH",
  rotate: "180deg",
};

const container = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const childAnimated = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      stiffness: 100,
      damping: 25,
    },
  },
};

const singleView = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      stiffness: 100,
      damping: 25,
    },
  },
};

const Mempelai = () => {
  return (
    <motion.div
      id="mempelai"
      className={`${questrial.className} relative min-h-screen h-full px-10 py-24`}
    >
      <div className="absolute z-30 bg-white/30 w-full h-full top-0 left-0"></div>
      <Image
        className="absolute top-0 -translate-y-1/2 left-0 z-30 rotate-180"
        alt="topimage"
        src={ornament2}
      />
      <Image className="absolute top-0 left-0 z-20" alt="topimage" src={atas} />
      <Image
        className="absolute bottom-0 left-0 z-20"
        alt="topimage"
        src={bawah}
      />

      <div className="absolute z-20 left-0 top-1/2 -translate-y-1/2">
        <Image alt="topimage" src={bawah} className="translate-y-10" />
        <Image alt="topimage" src={bawah} style={cerminStyle} />
      </div>

      <motion.div
        className="relative z-50 mb-16"
        variants={container}
        initial="offscreen"
        whileInView="onscreen"
      >
        <motion.p
          variants={childAnimated}
          className={`lg:text-2xl mb-3 text-center lg:mt-16 leading-relaxed`}
        >
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang.”
        </motion.p>
        <motion.p
          variants={childAnimated}
          className={`lg:text-2xl text-center`}
        >
          Ar Rum Ayat 21
        </motion.p>
      </motion.div>

      <motion.div
        className="mb-16 relative z-50"
        variants={singleView}
        initial="offscreen"
        whileInView="onscreen"
      >
        <Image src={ornament3} alt="ornament" width={150} className="mx-auto" />
      </motion.div>

      <motion.div
        variants={singleView}
        initial="offscreen"
        whileInView="onscreen"
        className="relative z-50 text-center mb-16"
      >
        <h1
          className={`${abril.className} text-4xl whitespace-nowrap lg:text-5xl mb-12`}
        >
          Nila Dwi Cahyani
        </h1>
        <div className="text-xl lg:text-2xl mb-6">
          <p className="mb-3">Putri Pertama dari</p>
          <p className="text-2xl lg:text-3xl">Bapak Parji & Ibu Sumini</p>
        </div>
        <Image
          src={ornametgaris}
          alt="ornament"
          className="w-4/6 mx-auto mb-16"
        />
        <Image alt="mempelaif" src={mempelaif} className="w-5/6 mx-auto" />
      </motion.div>

      <motion.div
        variants={singleView}
        initial="offscreen"
        whileInView="onscreen"
        className="relative z-50 p-10 text-center"
      >
        <h1
          className={`${abril.className} text-4xl whitespace-nowrap lg:text-5xl mb-12`}
        >
          Sidhi Mufti
          <br /> Alarif Santoso
        </h1>
        <div className="text-xl lg:text-2xl mb-6">
          <p className="mb-3">Putra Pertama dari</p>
          <p className="text-2xl lg:text-3xl">
            Bapak Mugik Santoso & Ibu Ami Lestari (Almh)
          </p>
        </div>
        <Image
          src={ornametgaris}
          alt="ornament"
          className="w-4/6 mx-auto mb-16"
        />
        <Image alt="mempelaim" src={mempelaim} className="w-5/6 mx-auto" />
      </motion.div>
    </motion.div>
  );
};

export default Mempelai;
