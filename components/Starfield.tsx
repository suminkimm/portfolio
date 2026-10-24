import type { CSSProperties } from "react";

type Star = {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
};

const createRandom = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

const random = createRandom(20251022);

const stars: Star[] = Array.from({ length: 140 }, () => {
  return {
    left: random() * 100,
    top: random() * 100,
    size: 1 + Math.floor(random() * 4),
    duration: 2.8 + random() * 3.6,
    delay: -random() * 4,
  };
});

export default function Starfield() {
  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star, index) => (
        <span
          key={index}
          className="star"
          style={
            {
              left: `${star.left}%`,
              top: `${star.top}%`,
              "--star-size": `${star.size}px`,
              "--star-duration": `${star.duration}s`,
              "--star-delay": `${star.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
