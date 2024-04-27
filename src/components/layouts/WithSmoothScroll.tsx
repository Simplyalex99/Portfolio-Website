'use client';

import { useEffect } from 'react';

export const WithSmoothScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const smoothScrollHandler = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
    smoothScrollHandler();
  }, []);

  return <>{children}</>;
};
export default WithSmoothScroll;
