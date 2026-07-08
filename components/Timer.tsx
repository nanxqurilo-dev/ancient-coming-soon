"use client";
import React from "react";
import Countdown, { type CountdownRenderProps } from "react-countdown";

const LAUNCH_DATE_MS = new Date("2026-08-05T00:00:00+05:30").getTime();

const Timer = () => {
  const renderer = ({ days, hours, minutes, seconds }: CountdownRenderProps) => {
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

  return <Countdown date={LAUNCH_DATE_MS} renderer={renderer} />;
};

export default Timer;
