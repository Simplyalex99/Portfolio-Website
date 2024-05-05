'use client';
import React, { useRef, useState, ComponentType } from 'react';
import { motion } from 'framer-motion';

export const MagneticWave = ({ children }: { children: React.ReactNode }) => {
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
    <motion.div
      ref={ref}
      initial={{ rotate: 0 }}
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveHandler}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      whileHover={{
        scale: 1.1,
        rotate: [15, -15],
        transition: {
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'reverse',
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWave;
