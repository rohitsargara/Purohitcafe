import React, { useEffect, useRef, useState } from 'react';
import { STATS_DATA } from '../data/cafeData';

export const FactCounter: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts(
        STATS_DATA.map((item) => Math.floor(ease * item.target))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(STATS_DATA.map((item) => item.target));
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="fact-counter pt-16 pb-12 my-12 border-t border-b border-white/10"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS_DATA.map((stat, idx) => (
          <div key={idx} className="group p-4">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#606e53] font-normal mb-2 flex items-center justify-center space-x-1">
              <span className="tabular-nums">{counts[idx]}</span>
              <i className="not-italic text-white/90 text-3xl sm:text-4xl">{stat.suffix}</i>
            </div>
            <div className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/70 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
