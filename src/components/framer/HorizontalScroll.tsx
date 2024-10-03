'use client';
import { useRef } from 'react';
import { useScroll, useTransform, m, LazyMotion } from 'framer-motion';
import styles from '@/styles/framer/HorizontalScroll.module.scss';
import { loadFeatures } from '@/helpers';
import RightArrowSVG from '../svg/arrows/RightArrow';
export const HorizontalScroll = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-95%']);

  return (
    <div className={`${styles.container} ${className}`} ref={ref}>
      <div className={styles.accordian}>
        <div className={styles['text-container']}>
          <p className={styles.text}>Scroll</p>
          <RightArrowSVG className="arrow" />
        </div>
        <LazyMotion features={loadFeatures}>
          <m.div className={styles.content} style={{ x }}>
            {children}
          </m.div>
        </LazyMotion>
      </div>
    </div>
  );
};
export default HorizontalScroll;
