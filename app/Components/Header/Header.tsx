"use client";
import React from "react";
import { BirthDate } from "./Components/BirthDate";
import { CopticDate } from "./Components/CopticDate";
import { Logo } from "./Components/Logo";
import { Cairo } from "next/font/google";

const cairoFont = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const Header = () => {
  return (
    <header className="flex flex-col w-full items-center justify-center sticky top-0 z-50 py-2">
      <div
        className={`w-full flex items-center justify-between ${cairoFont.className} text-[20px] font-bold`}
      >
        <BirthDate />
        <CopticDate />
      </div>
      <div className=" p-5 -mt-6">
        <Logo />
      </div>
      <div>nav</div>
    </header>
  );
};
