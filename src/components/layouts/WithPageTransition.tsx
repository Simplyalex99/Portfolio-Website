'use client';

import React from 'react';
import { LazyMotion, m } from 'framer-motion';
import { loadFeatures } from '@/helpers';
export const WithPageTransition = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <LazyMotion features={loadFeatures}>
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
