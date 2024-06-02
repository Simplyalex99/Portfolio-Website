'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/framer/SmoothLoading.module.scss';
import { motion } from 'framer-motion';
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
    },
  },
};
export const Loader = ({
  setLoading,
  milliseconds = 2000,
}: {
  milliseconds?: number;
  setLoading: (isLoading: boolean) => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, milliseconds);
  }, [setLoading, milliseconds]);
  return (
    <motion.div className={styles.loader}>
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <motion.div variants={itemMain} className={styles['transition-image']}>
          <motion.img
            src="/images/skateboard-gray.webp"
            layoutId="main-image-1"
            className={styles.img}
          ></motion.img>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
