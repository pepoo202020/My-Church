"use client";
import React, { useState } from "react";
import { BirthDate } from "./Components/BirthDate";
import { CopticDate } from "./Components/CopticDate";
import { Logo } from "./Components/Logo";
import { Nav } from "./Components/Nav";
import { MenuToggle } from "./Components/MenuToggle";
import { useCycle, motion } from "framer-motion";
import { SideBar } from "./Components/SideBar";

export const Header = () => {
  const [isOpen, toggleOpen] = useState(false);
  const tapsClickHandler = () => {
    toggleOpen((pre) => !pre);
  };

  return (
    <>
      <header className="flex flex-col  items-center justify-center sticky right-0 top-0 z-50  bg-white w-screen max-w-screen  px-10 overflow-y-hidden max-h-fit">
        <div
          className={`w-full hidden lg:flex items-center justify-between cairo text-[15px] font-bold`}
        >
          <BirthDate />
          <CopticDate />
        </div>
        <div className=" p-1 lg:p-5 lg:-mt-9">
          <Logo />
        </div>
        <Nav />
      </header>
      <motion.div
        className="fixed lg:hidden block z-[999] top-0 left-5"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <MenuToggle toggle={() => tapsClickHandler()} />
      </motion.div>
      {isOpen && <SideBar tapOpen={() => toggleOpen(false)} />}
    </>
  );
};
