import React from "react";
import { Abril_Fatface, Questrial } from "next/font/google";
import Image from "next/image";
import Photos from "./Photos";
import YouTube from "react-youtube";
import galeri1 from "../../public/galeri1.jpg";
import { motion } from "framer-motion";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
});

const abrils = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
});

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

const Galery = () => {
  return (
    <div id="galery" className={`p-8 relative`}>
      <div>
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt="bac"
          src={galeri1}
        />
      </div>
      <div className="relative z-10">
        <motion.div
          variants={singleAnimation}
          initial="hide"
          whileInView="show"
          className="text-center mb-24"
        >
          <p className={`${questrial.className} text-xl lg:text-2xl`}>
            Our story
          </p>
          <h1
            className={`${abrils.className} text-4xl whitespace-nowrap lg:text-5xl mb-12`}
          >
            Wacth our
            <br />
            best moments
          </h1>
        </motion.div>
        <motion.div
          className="mb-12"
          variants={singleAnimation}
          initial="hide"
          whileInView="show"
        >
          <Photos />
        </motion.div>
        <motion.div
          variants={singleAnimation}
          initial="hide"
          whileInView="show"
          className="flex justify-center items-center rounded-lg overflow-hidden"
        >
          <div
            className="w-full max-w-screen-lg"
            style={{ paddingBottom: "56.25%", position: "relative" }}
          >
            <YouTube
              videoId="gBf5Ne9_mdE"
              className="absolute top-0 left-0 w-full h-full bg-red-400"
              opts={{
                playerVars: {
                  mute: 1, // Auto mute the video
                },
                width: "100%",
                height: "100%",
              }}
              // onStateChange={onPlayerStateChange}
              // ref={playerRef}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Galery;
