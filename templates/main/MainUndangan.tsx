import React from "react";
import ornament1 from "../../public/ornament1.png";
import ornament2 from "../../public/ornament2.png";

import main from "../../public/main.jpg";
import Image from "next/image";
import { Parisienne, Lobster } from "next/font/google";
import { motion } from "framer-motion";
import Mempelai from "./Mempelai";
import Galery from "./Galery";
import Resepsi from "./Resepsi";
import { Questrial, Abril_Fatface } from "next/font/google";
import MenuBar from "@/components/MenuBar";

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
});
const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

interface MainProps {
  own: any;
}

const MainUndangan: React.FC<MainProps> = ({ own }) => {
  return (
    <>
      <div id="home" className="h-screen bg-red-300 relative">
        <Image
          alt="couple picture"
          src={main}
          className="h-full object-cover object-top"
        />
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black/30 z-40 top-0 left-0"></div>
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center z-50">
          <div className="relative w-9/12">
            <motion.div
              animate={{
                rotate: [0, -5, 0],
                transition: {
                  ease: "easeInOut",
                  repeat: Infinity,
                  duration: 2,
                },
              }}
            >
              <Image
                alt="ornament"
                src={ornament1}
                className="object-contain w-full"
              />
            </motion.div>

            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center w-full text-white">
              <p className={`text-4xl ${parisienne.className}`}>
                The Wedding of
              </p>
              <p className={`${lobster.className} text-6xl tracking-wider`}>
                Nila & Mufti
              </p>
              <div className="text-xl">
                <p>Minggu</p>
                <p>03 | 09 | 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mempelai />
      <Galery />
      <Resepsi />
      <div className="py-6 px-16 lg:px-32 relative overflow-hidden">
        <Image
          alt="bottom ornament"
          src={ornament2}
          className="absolute w-full bottom-0 left-0 z-10 translate-y-1/2"
        />
        <div className="relative z-50">
          <div className="lg:text-2xl text-center">
            <p>
              Merupakan suatu kebahagiaan bila keluarga dan sahabatku tercinta
              bisa hadir dan merayakan hari bahagia ini bersama kami.
            </p>
            <p className="mt-6">
              Tak akan berkesan tanpa foto keluarga dan sahabatku tercinta.
              ditunggu kehadirannya yaa..
            </p>
          </div>
          <div
            className={`${parisienne.className} text-center text-5xl mt-12 whitespace-nowrap`}
          >
            Terima Kasih
          </div>
        </div>
      </div>
      <MenuBar />
    </>
  );
};

export default MainUndangan;
//
