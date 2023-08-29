import React, { useEffect, useState } from "react";
import ButtonCopy from "@/components/ButtonCopy";
import { motion } from "framer-motion";
import bca from "../public/bca.png";
import Image from "next/image";
import { useRouter } from "next/router";

interface GiftModalProps {
  isShow: boolean;
  setIsShow: any;
}

const GiftModal: React.FC<GiftModalProps> = ({ isShow, setIsShow }) => {
  const router = useRouter();
  const { own } = router.query;
  const numbers = own ? parseInt(own as string, 10) : 1;

  const [isVisible, setIsVisible] = useState(isShow);

  useEffect(() => {
    setIsVisible(isShow);
  }, [isShow]);

  const onClosedModal = () => {
    setIsShow(false);
  };

  const show = {
    opacity: 1,
    display: "flex",
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  };

  return (
    <motion.div
      animate={isVisible ? show : hide}
      onClick={onClosedModal}
      className="fixed top-0 left-0 bg-gray-900/20 w-full h-screen z-[100] justify-center items-center p-6"
    >
      <div
        className="bg-white max-w-2xl p-6 rounded-lg shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          Rasa terima kasih kami tulus untuk hadiah dan doa kalian. Momen ini
          menjadi lebih berarti berkat kehadiran dan cinta yang kalian bagikan.
        </div>
        {numbers === 2 ? (
          <div className="text-center">
            <Image alt="logo bca" src={bca} width={100} className="mx-auto" />
            <p>8240425549</p>
            <p>a/n MUGIK SANTOSO</p>
            <ButtonCopy dataValue="8240425549" />
          </div>
        ) : (
          <div className="text-center">
            <Image alt="logo bca" src={bca} width={100} className="mx-auto" />
            <p>0332556337</p>
            <p>a/n Sidhi Mufti Alarif Santoso</p>
            <ButtonCopy dataValue="0332556337" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default GiftModal;
