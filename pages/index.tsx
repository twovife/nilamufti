import MainUndangan from "@/templates/main/MainUndangan";
import { NextPage } from "next";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import flower1 from "../public/flower1.png";
import flower2 from "../public/flower2.png";
import bggalery from "../public/bggalery.jpg";
import Image from "next/image";
import { Parisienne } from "next/font/google";
import { BsEnvelope } from "react-icons/bs";
import { useRouter } from "next/router";

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
});

const Index: NextPage = (props: any) => {
  const [isCoverVisible, setIsCoverVisible] = useState(true);
  const [shouldAnimateCover, setShouldAnimateCover] = useState(false);

  const handleCoverClick = () => {
    setShouldAnimateCover(true);
    setIsCoverVisible(false);
  };

  const router = useRouter();
  const toParam = router.query?.to;
  const own = router.query?.own ?? "1";

  return (
    <>
      {/* <Head></Head> */}
      <div className="relative">
        <AnimatePresence>
          {isCoverVisible && (
            <motion.div
              id="cover"
              className="bg-black absolute w-screen h-screen top-0 z-[101]"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 25,
              }}
            >
              <div className="max-w-2xl mx-auto relative w-full h-screen overflow-hidden flex justify-center items-center">
                <div className="relative z-50 text-center flex flex-col justify-evenly items-center h-full">
                  <div>
                    <h1
                      className={`${parisienne.className} text-3xl lg:text-4xl text-white mb-3`}
                    >
                      The Wedding Of
                    </h1>
                    <h1
                      className={`${parisienne.className} text-5xl lg:text-7xl text-white`}
                    >
                      Nila & Mufti
                    </h1>
                  </div>
                  <div className="py-3 px-6 text-center bg-black/30 rounded-lg">
                    <p className="font-semibold text-white text-xl">
                      Special Invite To
                    </p>

                    <p className="font-light text-white text-2xl">
                      {toParam ?? "My Best Friend"}
                    </p>
                    <button
                      onClick={handleCoverClick}
                      className="mt-6 bg-main p-3 rounded-md mx-auto flex flex-col items-center justify-center text-white font-semibold"
                    >
                      <BsEnvelope className="text-2xl" />
                      <span>Open Invitation</span>
                    </button>
                  </div>
                </div>
                <Image
                  alt="flower"
                  src={bggalery}
                  loading="eager"
                  className="absolute z-0 w-full h-full object-cover"
                />
                <Image
                  alt="flower"
                  src={flower1}
                  className="w-2/3 absolute -right-5 -top-5 z-10"
                />
                <motion.div className="absolute -right-5 -top-5 z-20 w-1/4">
                  <Image alt="flower" src={flower2} className="w-full" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!isCoverVisible && (
            <motion.div
              id="content"
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, display: "none" }}
              animate={{ opacity: 1, display: "block" }}
              exit={{ opacity: 0, display: "none" }}
              transition={{ duration: 1, damping: 25 }}
            >
              <MainUndangan own={own} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Index;
