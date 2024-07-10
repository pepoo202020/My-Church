import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="w-full h-screen relative overflow-y-hidden">
      <div className="w-full h-full ">
        <Image
          src={"/image/bg.jpg"}
          alt="hero bg"
          width={1506}
          height={871}
          className="bg-cover w-full hidden lg:block"
        />
        <Image
          src={"/image/bgMobile.png"}
          alt="hero bg"
          width={430}
          height={869}
          className="bg-cover w-full block lg:hidden"
        />
      </div>
      <div className="absolute lg:top-12 top-8 lg:right-[114px] right-0 z-10 text-white lg:w-[870px] w-full px-2 lg:mx-0   flex flex-col items-center lg:gap-[65px] gap-4">
        <h1 className="almarai lg:text-[99px] text-[53px] lg:font-extrabold font-bold">
          مرحباً بكم
        </h1>
        <h1 className="lg:changa lemonada lg:text-[53px] text-[18px] font-bold text-center ">
          الموقع <span className="text-[#FAFF00]">الرسمي</span> لكنيسة الشهيد
          ابادير واخته الشهيده ايريني
        </h1>
      </div>
    </div>
  );
};
