import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="w-full h-screen relative overflow-y-hidden">
      <div className="w-full h-full absolute top-0 right-0">
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
    </div>
  );
};
