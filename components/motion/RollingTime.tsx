"use client";

import { useEffect, useRef, useState } from "react";

// Two full sets of digits so a wrap-around (e.g. 9 → 0) can keep rolling upward
const DIGIT_STRIP = Array.from({ length: 20 }, (_, index) => index % 10);
const DIGIT_HEIGHT_EM = 1.25;

/** A single digit that rolls upward like an odometer when its value changes. */
function RollingDigit({ value }: { value: number }) {
  const [slot, setSlot] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);
  const previousValue = useRef(value);

  useEffect(() => {
    if (value === previousValue.current) return;
    const target = value < previousValue.current ? value + 10 : value;
    previousValue.current = value;
    setIsAnimating(true);
    setSlot(target);
  }, [value]);

  // After rolling into the second set of digits, jump back to the first set without animating
  const handleTransitionEnd = () => {
    if (slot < 10) return;
    setIsAnimating(false);
    setSlot(slot - 10);
  };

  return (
    <span className="block h-[1.25em] overflow-hidden">
      <span
        className={`flex flex-col ${isAnimating ? "transition-transform duration-(--duration-base) ease-out-expo" : ""}`}
        style={{ transform: `translateY(${-slot * DIGIT_HEIGHT_EM}em)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {DIGIT_STRIP.map((digit, index) => (
          <span key={index}>{digit}</span>
        ))}
      </span>
    </span>
  );
}

/** Renders a time string whose digits roll when they change. Screen readers get the plain text. */
export default function RollingTime({ time }: { time: string }) {
  const characters = Array.from(time);

  return (
    <>
      <span className="sr-only">{time}</span>
      <span aria-hidden="true" className="flex tabular-nums">
        {characters.map((character, index) => {
          // Keyed from the end so minute digits keep their identity when the hour gains a digit
          const key = characters.length - index;
          return /\d/.test(character) ? (
            <RollingDigit key={key} value={Number(character)} />
          ) : (
            <span key={key} className="whitespace-pre">
              {character}
            </span>
          );
        })}
      </span>
    </>
  );
}
