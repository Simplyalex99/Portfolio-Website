import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import yaml from '@/templates/home.yaml';
import styles from '@/styles/components/CardAccent.module.scss';
type Props = {
  activeIndex: number;
  data: typeof yaml.projectSection;
  offset?: number;
  translateY?: number;
};

const rotateLeft = 'left';
const rotateFactory = (variant: 'left' | 'right'): number => {
  switch (variant) {
    case rotateLeft:
      return -11;
    default:
      return 11;
  }
};
export const CardAccentDrop = ({
  data,
  activeIndex,
  offset = 20,
  translateY = 60,
}: Props) => {
  return (
    <div className={styles.container}>
      {data.content.map((content, index) => {
        const { variant, backgroundColor, imageUrl } = content;

        let style = {
          top: index * offset + '%',
          transform: `translateY(${translateY}%)`,
        };

        const rotation = rotateFactory(variant);

        return (
          <AnimatePresence key={index}>
            {index === activeIndex && (
              <div
                className={styles.cards}
                style={variant === 'right' ? { ...style, right: 0 } : style}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  key={imageUrl + backgroundColor}
                  className={styles['background-wrapper']}
                >
                  <div
                    className={styles.background}
                    style={{ backgroundColor: backgroundColor }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  animate={{ opacity: 1, y: 0, rotate: rotation }}
                  exit={{ opacity: 0, y: 30, rotate: 0 }}
                  key={imageUrl}
                  className={styles['img-wrapper']}
                >
                  <Image
                    alt="project"
                    src={imageUrl}
                    width={337}
                    height={240}
                    className={styles.img}
                  />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        );
      })}
    </div>
  );
};
export default CardAccentDrop;
