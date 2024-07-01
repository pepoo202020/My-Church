"use client";
import React, { useState } from "react";
import { BirthDate } from "./Components/BirthDate";
import { CopticDate } from "./Components/CopticDate";

export const Header = () => {
  return (
    <header className="flex flex-col w-full items-center justify-center sticky top-0 z-50 py-2">
      <div className=" w-full flex items-center justify-between">
        <BirthDate />
        <CopticDate />
      </div>
      <div className=" p-5 -mt-5">Logo</div>
      <div>nav</div>
    </header>
  );
};
