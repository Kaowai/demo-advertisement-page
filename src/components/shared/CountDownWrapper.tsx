"use client";
import React, { useEffect, useState } from "react";
import TimeBox from "../shared/TimeBox";

interface IProps {
  timeTakeplace: Date;
}

const CountDownWrapper = ({ timeTakeplace }: IProps) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const timeLeft = timeTakeplace.getTime() - now.getTime();

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center gap-3">
      <TimeBox value={timeLeft.days} label="days" />
      <TimeBox value={timeLeft.hours} label="hours" />
      <TimeBox value={timeLeft.minutes} label="min" />
    </div>
  );
};

export default CountDownWrapper;
