"use client";

import React, { useEffect, useState } from "react";

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

  return <div className="cairo">{currentDate}</div>;
};
