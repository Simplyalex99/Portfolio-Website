'use client';
import React, { useRef } from 'react';
import { m, LazyMotion, useTransform, useScroll } from 'framer-motion';
import { loadFeatures } from '@/helpers';

export const ImageParallax = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <div ref={ref} className={containerClassName}>
      <LazyMotion features={loadFeatures}>
        <m.div style={{ y }} className={className}>
          {children}
        </m.div>
      </LazyMotion>
    </div>
  );
};
export default ImageParallax;
