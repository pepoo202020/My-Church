"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Cairo } from "next/font/google";

const cairoFont = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const Nav = () => {
  const pathName = usePathname();
  console.log(pathName);
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
    <nav className="flex gap-5 items-center mb-2">
      {navItmes.map((item, i) => (
        <Link
          key={i}
          href={item.path}
          className={`${
            cairoFont.className
          } text-[20px] transition-all duration-100 hover:text-[#1E60BC] hover:border-b-2 hover:border-b-[#1E60BC] hover:font-bold   ${
            pathName === item.path
              ? "font-bold text-[#1E60BC] border-b-2 border-b-[#1E60BC] cursor-text"
              : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
