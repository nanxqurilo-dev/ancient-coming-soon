"use client";
import React from "react";
import Countdown from "react-countdown";

const Timer = () => {
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    const items = [
      { label: "DAYS", value: days },
      { label: "HOURS", value: hours },
      { label: "MINUTES", value: minutes },
      { label: "SECONDS", value: seconds },
    ];
    return (
      <div className="flex justify-center gap-6 mt-4">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-serif text-white tracking-wider">{String(item.value).padStart(2, '0')}</span>
            <span className="text-[10px] tracking-widest text-gold-light mt-1 uppercase">{item.label}</span>
          </div>
        ))}
      </div>
    );
  };

  // Set target date to 28 days from now
  const targetDate = Date.now() + 28 * 24 * 60 * 60 * 1000;

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default Timer;