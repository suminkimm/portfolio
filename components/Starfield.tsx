import type { CSSProperties } from "react";

type Star = {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
};

type ShootingStar = {
  left: number;
  top: number;
  angle: number;
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

const shootingStars: ShootingStar[] = Array.from({ length: 7 }, () => ({
  left: random() * 96 + 2,
  top: random() * 82 + 4,
  angle: random() * 55 + 15,
  duration: 12 + random() * 12,
  delay: random() * 24,
}));

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
      {shootingStars.map((star, index) => (
        <span
          key={`shooting-${index}`}
          className="shooting-star"
          style={
            {
              left: `${star.left}%`,
              top: `${star.top}%`,
              "--shooting-angle": `${star.angle}deg`,
              "--shooting-duration": `${star.duration}s`,
              "--shooting-delay": `${star.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
