import Image from "next/image";
import React, { useState } from "react";
import ornament3 from "../../public/ornament3.png";
import bawah from "../../public/bawahop.png";
import atas from "../../public/atasop.png";
import ornament5 from "../../public/ornament5.png";
import { SlCalender } from "react-icons/sl";
import { SiGooglemaps } from "react-icons/si";
import { motion } from "framer-motion";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  BsCreditCard2Back,
  BsMap,
  BsMapFill,
  BsWhatsapp,
} from "react-icons/bs";

import { Abril_Fatface, Questrial } from "next/font/google";
import GiftModal from "@/components/GiftModal";
import CutdownTimer from "@/components/CutdownTimer";
import { useRouter } from "next/router";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
});

const abrils = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
});

const cerminStyle = {
  transform: "scaleX(-1)",
  filter: "FlipH",
  rotate: "180deg",
};
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.6,
    },
  },
};

const singleAnimation = {
  hide: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
      stiffness: 100,
      damping: 25,
    },
  },
};

const router = useRouter();
const { own } = router.query;
const numbers = own ? parseInt(own as string, 10) : 1;

const Resepsi = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className={`p-8 relative min-h-screen pb-24`}
      >
        <div className="absolute z-30 bg-white/30 w-full h-full top-0 left-0"></div>
        <Image
          className="absolute top-0 left-0 z-20"
          alt="topimage"
          src={atas}
        />
        <Image
          className="absolute bottom-0 left-0 z-20"
          alt="topimage"
          src={bawah}
        />

        <div className="absolute z-20 left-0 top-1/2 -translate-y-1/2">
          <Image alt="topimage" src={bawah} className="translate-y-10" />
          <Image alt="topimage" src={bawah} style={cerminStyle} />
        </div>

        <div className="relative z-50">
          <motion.div
            variants={singleAnimation}
            initial="hide"
            whileInView="show"
            className="text-center mb-12"
          >
            <h1
              className={`${abrils.className} text-4xl whitespace-nowrap lg:text-5xl mb-12`}
            >
              You're
              <br />
              invited
            </h1>
          </motion.div>
          <motion.div
            variants={singleAnimation}
            initial="hide"
            whileInView="show"
            className="mb-12"
          >
            <Image
              src={ornament3}
              alt="ornament"
              width={150}
              className="mx-auto"
            />
          </motion.div>
          <div id="resepsi" className="mb-12">
            <CutdownTimer targetTime={new Date("Sep 03, 2023 09:00:00")} />
          </div>
          <motion.div
            variants={singleAnimation}
            initial="hide"
            whileInView="show"
            className="text-center mx-auto mb-12"
          >
            <h1
              className={`${abrils.className} text-4xl whitespace-nowrap lg:text-5xl mb-3`}
            >
              Akad Nikah
            </h1>
            <p className="lg:text-xl">Pukul 08:00 - Selesai</p>
          </motion.div>
          <motion.div
            variants={singleAnimation}
            initial="hide"
            whileInView="show"
            className="mb-12"
          >
            <Image
              src={ornament5}
              alt="ornament"
              width={150}
              className="mx-auto"
            />
          </motion.div>
          <motion.div
            variants={singleAnimation}
            initial="hide"
            whileInView="show"
            className="text-center mx-auto mb-12"
          >
            <h1
              className={`${abrils.className} text-4xl whitespace-nowrap lg:text-5xl mb-3`}
            >
              Resepsi
            </h1>
            {numbers == 2 ? (
              <p className="lg:text-xl">Pukul 12:00 - 15:00</p>
            ) : (
              <p className="lg:text-xl">Pukul 15:00 - Selesai</p>
            )}
          </motion.div>
          <motion.div
            variants={singleAnimation}
            initial="hide"
            whileInView="show"
            className="text-center px-8 lg:px-16 mb-12"
          >
            <p className={`font-semibold text-xl lg:text-2xl`}>Lokasi</p>
            <p className={`font-semibold lg:text-xl tracking-widest`}>
              Perum Gilang Ria Indah Blok A8 Kec. Gampengrejo Kab. Kediri
            </p>
          </motion.div>
          <motion.div
            variants={singleAnimation}
            initial="hide"
            whileInView="show"
            id="gift"
            className="bg-white/60 shadow rounded-lg px-12 py-24 grid grid-cols-2 mb-12 gap-24"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="p-3 text-white bg-main rounded-full mb-3">
                <SlCalender className="w-10 lg:w-16 h-10 lg:h-16" />
              </div>
              <div className="text-center">
                <p>Minggu</p>
                <p className="whitespace-nowrap">03 | 09 | 2023</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="p-3 text-white bg-main rounded-full mb-3">
                <AiOutlineClockCircle className="w-10 lg:w-16 h-10 lg:h-16" />
              </div>
              <div className="text-center">
                {numbers == 2 ? (
                  <>
                    <p>12:00 WIB</p>
                    <p className="whitespace-nowrap">s/d 15:00</p>
                  </>
                ) : (
                  <>
                    <p>15:00 WIB</p>
                    <p className="whitespace-nowrap">s/d Selesai</p>
                  </>
                )}
              </div>
            </div>
            <div className="col-span-2 flex flex-col justify-center items-center">
              <div className="p-3 text-white bg-main rounded-full mb-3">
                <BsCreditCard2Back className="w-10 lg:w-16 h-10 lg:h-16" />
              </div>
              <div className="text-center">
                <button
                  onClick={() => setIsVisible(true)}
                  className="px-2 py-1 rounded-md border-emerald-900 border bg-main text-white"
                >
                  Kirim Hadiah
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={singleAnimation}
            initial="hide"
            whileInView="show"
            id="maps"
            className="text-center w-full mb-12"
          >
            <button
              onClick={() =>
                window.open("https://goo.gl/maps/3UGEEWpV8CtUj3mJ6", "_blank")
              }
              className="mb-12 px-3 mx-auto py-1.5 rounded-md bg-main flex items-center justify-center ring ring-emerald-600 hover:bg-emerald-600 text-white font-semibold"
            >
              <SiGooglemaps className="lg:text-2xl mr-3" />
              <span className="lg:text-2xl">Open Maps</span>
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/6287848727818?text=Halo%20Besti%2C%20Selamat%20ya%2C%20aku%20pasti%20datang%20diacaramu",
                  "_blank"
                )
              }
              className="px-3 mx-auto py-1.5 rounded-md bg-main flex items-center justify-center ring ring-emerald-600 hover:bg-emerald-600 text-white font-semibold"
            >
              <BsWhatsapp className="lg:text-2xl mr-3" />
              <span className="lg:text-2xl">Send Me Message</span>
            </button>
          </motion.div>
        </div>
        <GiftModal isShow={isVisible} setIsShow={setIsVisible} />
      </motion.div>
    </>
  );
};

export default Resepsi;
