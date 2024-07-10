"use client";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

export const SaintOfChurchSection = () => {
  const saintSectionRef = useRef(null);
  const isInView = useInView(saintSectionRef, {
    amount: 0,
  });
  return (
    <div
      ref={saintSectionRef}
      className="w-full flex flex-col items-center justify-center pt-[28px] px-5 gap-[21px] pb-5 text-white bg-[#185BB7]"
    >
      <motion.h1
        className="almarai lg:text-[51px] text-[38px]  font-extrabold "
        initial={{ opacity: 0, x: 500 }}
        animate={
          isInView
            ? { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }
            : { opacity: 0, x: 500 }
        }
      >
        شفيع الكنيسة
      </motion.h1>
      <div className="w-full flex lg:flex-row flex-col items-center justify-center lg:gap-[85px] gap-[75px]">
        <motion.img
          src="/image/saintImage.png"
          alt="saint image"
          className="drop-shadow-2xl w-[300px] h-[285px] lg:w-[472px] lg:h-[447px]"
          initial={{ opacity: 0, x: 200 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, delay: 0.4 },
                }
              : { opacity: 0, x: 200 }
          }
        />
        <div className="lg:w-[717px] w-full flex flex-col items-center justify-center gap-5">
          <motion.h1
            className="kufam text-[18px] lg:text-[34px]   font-black "
            initial={{ opacity: 0, x: 200 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 0.5 },
                  }
                : { opacity: 0, x: 200 }
            }
          >
            الشهيد ابادير واخته الشهيده ايريني
          </motion.h1>
          <motion.p
            className="cairo text-[20px] lg:text-[28px]   font-normal lg:text-justify  text-center"
            initial={{ opacity: 0, x: 200 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 0.7 },
                  }
                : { opacity: 0, x: 200 }
            }
          >
            نشأتهما هما ابنا أخت باسيليوس الوزير الأنطاكي؛ تعين
            أبادير إسفهسلارًا &quot;قائدًا عظيمًا&quot; في جيش دقلديانوس. ظهر
            له السيد المسيح في رؤيا بالليل، وطلب منه أن يذهب مع أخته إيرائي إلى
            مصر لينالا إكليل الاستشهاد، وقد تمتعت أخته بذات الرؤيا، فعرفا أنها
            من الله وانطلقا بفرح ليتمتعا بما وهُب لهما.
          </motion.p>
          <motion.button
            className="px-[79px] py-[10px] bg-white text-[#1E60BC] lalezar-regular text-[40px] rounded-3xl "
            initial={{ opacity: 0, x: 200, scale: 0.9 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 0.9 },
                  }
                : { opacity: 0, x: 200 }
            }
            whileHover={{
              color: "white",
              scale: 1,
              background: "transparent",
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "white",
            }}
            transition={{ type: "spring", duration: 1.5 }}
          >
            قراءة المزيد
          </motion.button>
        </div>
      </div>
    </div>
  );
};
