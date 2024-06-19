'use client';
import React, { useRef, useState } from 'react';
import { m, LazyMotion } from 'framer-motion';
import { loadFeatures } from '@/helpers';
export const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mouseMoveHandler = (e: React.MouseEvent<Element, MouseEvent>) => {
    const { clientX, clientY } = e;
    const rect = ref.current?.getBoundingClientRect();
    if (rect === undefined) {
      return;
    }
    const { width, height, left, top } = rect;
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };
  const mouseLeaveHandler = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;
  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        ref={ref}
        onMouseMove={mouseMoveHandler}
        onMouseLeave={mouseLeaveHandler}
        animate={{ x, y }}
        transition={{ type: 'spring', stiffness: 50, damping: 15, mass: 0.1 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default Magnetic;
