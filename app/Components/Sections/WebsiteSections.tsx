"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

export const WebsiteSections = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionsRef = useRef(null);
  const isInView = useInView(sectionsRef, {
    amount: 0,
  });

  const sections = [
    {
      title: "عن الكنيسة",
      subtitle: "عن تاريخ الكنيسة وعن شهيد الكنيسة",
      imageUrl: "/image/icons/churchIcon.png",
      link: "/about",
    },
    {
      title: "خدمات الكنيسة",
      subtitle: "جميع خدمات الكنيسة مع مواقعها ومواعيدها",
      imageUrl: "/image/icons/servicesIcon.png",
      link: "/",
    },
    {
      title: "اخبار الكنيسة",
      subtitle: "جميع اخبار الكنيسة وتتبيهاتها",
      imageUrl: "/image/icons/newsIcon.png",
      link: "/",
    },
    {
      title: "مكتبة الكنيسة",
      subtitle: "يوحد بها كتب الخدمات وكل ما يخص الميديا",
      imageUrl: "/image/icons/booksIcon.png",
      link: "/",
    },
    {
      title: "علوم الكنيسة",
      subtitle: "طقس و قبطي و تاريخ الكنيسة",
      imageUrl: "/image/icons/scienceIcon.png",
      link: "/",
    },
    {
      title: "تواصل معنا",
      subtitle: "للتواصل مع الكنيسة ومع خدام الخدمات المختلفة",
      imageUrl: "/image/icons/phoneIcon.png",
      link: "/",
    },
  ];
  return (
    <div
      className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5"
      ref={sectionsRef}
    >
      <motion.h1
        className="almarai lg:text-[51px] text-[38px] text-[#1E60BC] font-extrabold"
        initial={{ opacity: 0, x: 500 }}
        animate={
          isInView
            ? { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }
            : { opacity: 0, x: 500 }
        }
      >
        اقسام الموقع
      </motion.h1>
      <div className="px-[94px]  w-full flex items-center justify-center gap-[75px] flex-wrap">
        {sections.map((section, index) => (
          <Link
            key={index}
            href={section.link}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative group block p-2 h-full"
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full bg-[#1E60BC]/20 block rounded-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.7, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <motion.div
              key={index}
              className="w-[280px] h-[280px] bg-transparent group-hover:bg-[#1E60BC] border-4 border-[#1E60BCAF] text-[#70A7DF] group-hover:text-white  drop-shadow-xl shadow-xl rounded-3xl transition-all duration-700 flex flex-col items-center justify-center gap-1 p-1"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.7, delay: 0.2 * index },
                    }
                  : {
                      opacity: 0,
                      scale: 0,
                    }
              }
            >
              <Image
                src={section.imageUrl}
                alt={section.title}
                width={100}
                height={100}
              />
              <h1 className="blaka font-normal text-[50px]">{section.title}</h1>
              <p className="cairo font-light text-[25px] text-center">
                {section.subtitle}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};
