"use client";
import React from "react";
import { BirthDate } from "./Components/BirthDate";
import { CopticDate } from "./Components/CopticDate";
import { Logo } from "./Components/Logo";
import { Cairo } from "next/font/google";
import { Nav } from "./Components/Nav";

const cairoFont = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const Header = () => {
  return (
    <header className="flex flex-col  items-center justify-center sticky right-0 top-0 z-50  bg-white w-screen max-w-screen  px-10 overflow-y-hidden max-h-fit">
      <div
        className={`w-full flex items-center justify-between ${cairoFont.className} text-[15px] font-bold`}
      >
        <BirthDate />
        <CopticDate />
      </div>
      <div className=" p-5 -mt-9">
        <Logo />
      </div>
      <Nav />
    </header>
  );
};
