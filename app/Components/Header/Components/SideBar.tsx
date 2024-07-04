"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarVariants = {
  open: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
  closed: {
    x: "100%",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.05,
      staggerDirection: -1,
      bounce: 0,
    },
  },
};
// Variants for mobile tabs
const mobileTabVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const mobileTabStyling =
  " h-[25px] w-full text-center text-[30px] cairo py-5 rounded-sm  hover:cursor-pointer z-100 pl-2";

// Render menu tabs
const renderMenuTabs = (pathname: string, clickHandler: () => void) => {
  const navItmes = [
    { name: "الرئيسية", path: "/" },
    { name: "عن الكنيسة", path: "/about" },
    { name: "الخدمات", path: "/services" },
    { name: "اخبار الكنيسة", path: "/news" },
    { name: "المكتبه", path: "/library" },
    { name: "علوم الكنيسة", path: "/science" },
    { name: "تواصل معنا", path: "/contact" },
  ];
  return (
    <>
      {navItmes.map((link, i) => (
        <Link
          href={link.path}
          className={`cairo text-[20px]    ${
            pathname === link.path
              ? "font-bold text-[#1E60BC]  cursor-text"
              : "text-white"
          }`}
          onClick={clickHandler}
          key={i}
        >
          <motion.div
            whileHover={{ scale: 1.2, opacity: 0.8 }}
            whileTap={{ scale: 0.8, opacity: 0.8 }}
            transition={{ duration: 0.15 }}
            className={mobileTabStyling}
            variants={mobileTabVariants}
          >
            <motion.span
              initial={i / 2 === 0 ? { x: -100 } : { x: 100 }}
              animate={
                i / 2 === 0 ? { x: [-100, 100, 0] } : { x: [100, -100, 0] }
              }
              transition={{ duration: 0.7, delay: 0.1 * i }}
            >
              {link.name}
            </motion.span>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export const SideBar = ({ tapOpen }: { tapOpen: () => void }) => {
  const pathName = usePathname();
  const [itemClicked, setItemClicked] = useState(false);
  const itemClickedHandler = () => {
    tapOpen();
    setItemClicked(true);
  };
  return (
    <motion.div
      variants={sidebarVariants}
      className="absolute w-screen h-screen z-50 bg-black/50 flex flex-col items-center justify-center gap-5"
    >
      {renderMenuTabs(pathName, itemClickedHandler)}
    </motion.div>
  );
};
