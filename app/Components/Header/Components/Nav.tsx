"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const Nav = () => {
  const pathName = usePathname();
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
    <nav className="hidden lg:flex gap-5 items-center mb-2">
      {navItmes.map((item, i) => (
        <Link
          key={i}
          href={item.path}
          className={`cairo text-[20px]    ${
            pathName === item.path
              ? "font-bold text-[#1E60BC] border-b-2 border-b-[#1E60BC] cursor-text"
              : ""
          }`}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{
              scale: 1.2,
              opacity: 0.8,
              color: "#1E60BC",
            }}
            transition={{ duration: 0.7, delay: 0.1 * i }}
          >
            {item.name}
          </motion.span>
        </Link>
      ))}
    </nav>
  );
};
