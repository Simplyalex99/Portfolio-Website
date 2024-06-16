'use client';
import { useRef } from 'react';
import styles from '@/styles/framer/TextReveal.module.scss';
import { useScroll, motion, useTransform, MotionValue } from 'framer-motion';

export const TextReveal = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,

    offset: ['start 0.9', 'start 0.25'],
  });
  const words = text.split(' ');
  return (
    <motion.p ref={ref} className={styles.paragraph}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={`${word}-${i}`}
            range={[start, end]}
            progress={scrollYProgress}
          >
            {word}
          </Word>
        );
      })}
    </motion.p>
  );
};
const Word = ({
  children,
  range,
  progress,
}: {
  children: React.ReactNode;
  range: Array<number>;
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
