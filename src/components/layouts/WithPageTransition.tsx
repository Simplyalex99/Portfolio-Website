'use client';

import React from 'react';
import { LazyMotion, m, domAnimation } from 'framer-motion';
export const WithPageTransition = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};
export default WithPageTransition;
