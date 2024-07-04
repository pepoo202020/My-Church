"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BirthDate = () => {
  const [currentDate, setCurrentDate] = useState<string>("");
  useEffect(() => {
    const date = new Date();
    const formatedDate = date.toLocaleDateString("ar-EG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formatedDate);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: 100 }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0, 0.7, 1],
        x: [100, -100, 0],
      }}
      transition={{ duration: 1.5, type: "spring" }}
    >
      {currentDate}
    </motion.div>
  );
};
