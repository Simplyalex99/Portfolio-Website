'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from '@/styles/framer/HorizontalScroll.module.scss';
export const HorizontalScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-95%']);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.accordian}>
        <p className={styles.text}>Scroll</p>
        <motion.div className={styles.content} style={{ x }}>
          {children}
        </motion.div>
      </div>
    </div>
  );
};
export default HorizontalScroll;
