"use client";
import React, { useEffect, useState } from "react";

export const CopticDate = () => {
  const [currentDate, setCurrentDate] = useState<string>("");
  useEffect(() => {
    const date = new Date();
    const formatedCopticDate = date.toLocaleDateString("ar-EG", {
      calendar: "coptic",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formatedCopticDate);
  }, [setCurrentDate]);
  return <div className="cairo">{currentDate.split("ERA1")[0]}</div>;
};
