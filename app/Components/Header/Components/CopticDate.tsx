"use client";
import React, { useEffect, useState } from "react";

export const CopticDate = () => {
  const [currentDate, setCurrentDate] = useState<string>("");
  useEffect(() => {
    const date = new Date();
    const formatedCopticDate = getCopticDate(date);
    setCurrentDate(formatedCopticDate);
  }, [setCurrentDate]);
  return <div className="cairo">{currentDate}</div>;
};

function getCopticDate(copticDate: Date): string {
  const copticMonths = [
    "توت", // Tout
    "بابه", // Baba
    "هاتور", // Hatur
    "كيهك", // Kiahk
    "طوبه", // Tobe
    "أمشير", // Meshir
    "برمهات", // Paremhat
    "برمودة", // Paremoude
    "بشنس", // Pashons
    "بؤونة", // Paone
    "أبيب", // Epep
    "مسرى", // Mesori
    "نسي", // Nasi
  ];
  const copticYear = copticDate.getFullYear() - 284;
  const copticMonthIndex = (copticDate.getMonth() + 4) % 12;
  const copticDay = copticDate.getDate();

  const copticMonth = copticMonths[copticMonthIndex];
  return `${copticDay} ${copticMonth} ${copticYear}`;
}
