'use client';
import { useRef } from 'react';
import styles from '@/styles/framer/TextReveal.module.scss';
import {
  useScroll,
  useTransform,
  MotionValue,
  m,
  LazyMotion,
} from 'framer-motion';
import { loadFeatures } from '@/helpers';
export const TextReveal = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,

    offset: ['start 0.9', 'start 0.25'],
  });
  const words = text.split(' ');
  return (
    <LazyMotion features={loadFeatures}>
      <m.p ref={ref} className={styles.paragraph}>
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
      </m.p>
    </LazyMotion>
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

      <m.span style={{ opacity }}>{children}</m.span>
    </span>
  );
};
