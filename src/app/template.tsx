'use client';
import React from 'react';
import { WithPageTransition } from '@/components';
export const Template = ({ children }: { children: React.ReactNode }) => {
  return <WithPageTransition>{children}</WithPageTransition>;
};
export default Template;
