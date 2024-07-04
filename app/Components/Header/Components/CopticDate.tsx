"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      className="cairo"
      initial={{ scale: 0, opacity: 0, x: -100 }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0, 0.7, 1],
        x: [-100, 100, 0],
      }}
      transition={{ duration: 1.5, type: "spring" }}
    >
      {currentDate.split("ERA1")[0]}
    </motion.div>
  );
};
