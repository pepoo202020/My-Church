"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      className="flex lg:flex-row flex-col items-center justify-center lg:gap-5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div>
        <Image
          src="/image/logo.png"
          alt="church logo image"
          width={134}
          height={127}
          className="drop-shadow-lg lg:w-[124px] lg:h-[117px] w-[84px] h-[77px]"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start justify-center gap-0">
        <div className={`lalezar-regular lg:text-[30px] text-[15px] `}>
          كنيسة الشهيد ابادير واخته الشهيده ايريني بأسيوط
        </div>
        <div className={`arbutus-regular text-[12px] lg:text-[20px]`}>
          Martyr Abader And Eriny. Asyut
        </div>
      </div>
    </motion.div>
  );
};
