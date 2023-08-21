"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CutdownProps {
  targetTime: Date;
}

const CutdownTimer: React.FC<CutdownProps> = ({ targetTime }) => {
  const [duration, setDuration] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      updateDate();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function updateDate() {
    const now = new Date().getTime();
    const timeleft = targetTime.getTime() - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    setDuration({
      days,
      hours,
      minutes,
      seconds,
    });
  }

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

  const listItem = {
    hidden: { opacity: 0, y: "100%" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex justify-center gap-3 max-w-md mx-auto mb-3 text-brand-biru"
      >
        <motion.div
          variants={listItem}
          className="flex flex-col text-center bg-main text-white p-3 sm:p-5 lg:p-8 rounded-lg"
        >
          <p className="text-2xl lg:text-4xl font-semibold">{`${
            duration.days < 0 ? 0 : duration.days
          }`}</p>
          <p>Hari</p>
        </motion.div>

        <motion.div
          variants={listItem}
          className="flex flex-col text-center bg-main text-white p-3 sm:p-5 lg:p-8 rounded-lg"
        >
          <p className="text-2xl lg:text-4xl font-semibold">{`${
            duration.hours < 0 ? 0 : duration.hours
          }`}</p>
          <p>Jam</p>
        </motion.div>

        <motion.div
          variants={listItem}
          className="flex flex-col text-center bg-main text-white p-3 sm:p-5 lg:p-8 rounded-lg"
        >
          <p className="text-2xl lg:text-4xl font-semibold">{`${
            duration.minutes < 0 ? 0 : duration.minutes
          }`}</p>
          <p>Menit</p>
        </motion.div>

        <motion.div
          variants={listItem}
          className="flex flex-col text-center bg-white text-main p-3 sm:p-5 lg:p-8 lg:border-main border-2 rounded-lg"
        >
          <p className="text-2xl lg:text-4xl font-medium">{`${
            duration.seconds < 0 ? 0 : duration.seconds
          }`}</p>
          <p>Detik</p>
        </motion.div>

        {/* Similar blocks for hours, minutes, and seconds */}
      </motion.div>

      <div>
        <button
          onClick={() =>
            window.open(
              "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230903T010000Z%2F20230903T164500Z&details=%22Kami%20sangat%20mengharapkan%20kehadiran%20Anda%20di%20acara%20kami.%20Kedatangan%20Anda%20selalu%20dinanti%20dengan%20penuh%20sukacita.%22&location=7%C2%B045%2722.1%22S%20112%C2%B002%2724.3%22E&text=Nila%20%26%20Mufti%20Wedding",
              "_blank"
            )
          }
          className="px-3 mx-auto py-1.5 rounded-md bg-main flex items-center justify-center ring ring-emerald-600 hover:bg-emerald-600 text-white font-semibold"
        >
          Save The Date
        </button>
      </div>
    </>
  );
};

export default CutdownTimer;
