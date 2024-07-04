import { Arbutus, Lalezar } from "next/font/google";
import Image from "next/image";
import React from "react";

const lalezarFont = Lalezar({
  subsets: ["arabic"],
  weight: ["400"],
  display: "swap",
});

const arbutus = Arbutus({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      <div>
        <Image
          src="/image/logo.png"
          alt="church logo image"
          width={134}
          height={127}
          className="drop-shadow-lg w-[124px] h-[117px]"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-0">
        <div className={`${lalezarFont.className} text-[30px]`}>
          كنيسة الشهيد ابادير واخته الشهيده ايريني بأسيوط
        </div>
        <div className={`${arbutus.className} text-[20px]`}>
          Martyr Abader And Eriny. Asyut
        </div>
      </div>
    </div>
  );
};
