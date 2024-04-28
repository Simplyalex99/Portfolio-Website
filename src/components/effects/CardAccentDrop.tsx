import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import yaml from '@/templates/home.yaml';
import styles from '@/styles/components/CardAccent.module.scss';
type Props = {
  activeIndex: number;
  data: typeof yaml.projectSection;
  options?: {
    offsetLarge?: number;
    translateYLarge?: number;
    offsetSmall?: number;
    translateYSmall?: number;
  };
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
type CardOptions = {
  offsetLarge: number;
  offsetSmall: number;
  translateYLarge: number;
  translateYSmall: number;
};
const defaultOptions = {
  offsetLarge: 20,
  translateYLarge: 60,
  offsetSmall: 17,
  translateYSmall: 80,
};
const cardOptionsFactory = (options: Props['options']): CardOptions => {
  if (options == undefined) {
    return defaultOptions;
  }

  const cardOptions = {
    offsetLarge: options.offsetLarge ?? defaultOptions.offsetLarge,
    offsetSmall: options.offsetSmall ?? defaultOptions.offsetSmall,
    translateYLarge: options.translateYLarge ?? defaultOptions.translateYLarge,
    translateYSmall: options.translateYSmall ?? defaultOptions.translateYSmall,
  };

  return cardOptions;
};
export const CardAccentDrop = ({ data, activeIndex, options }: Props) => {
  const { blurCardDataUrls } = data;

  const { offsetLarge, translateYLarge, offsetSmall, translateYSmall } =
    cardOptionsFactory(options);
  return (
    <div className={styles.container}>
      {data.content.map((content, index) => {
        const { variant, backgroundColor, imageUrl } = content;

        let style = {
          top: index * offsetLarge + '%',
          transform: `translateY(${translateYLarge}%)`,
        };

        const rotation = rotateFactory(variant);

        return (
          <>
            <AnimatePresence key={index}>
              {index === activeIndex && (
                <>
                  <div
                    className={styles['container-lg']}
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
                        placeholder="blur"
                        blurDataURL={blurCardDataUrls[index]}
                      />
                    </motion.div>
                  </div>

                  <div
                    className={styles['container-sm']}
                    style={{
                      top: index * offsetSmall + '%',
                      transform: `translateY(${translateYSmall}%)`,
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0.5, y: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      animate={{ opacity: 0.5, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      key={imageUrl + backgroundColor}
                      className={styles['background-wrapper']}
                    >
                      <div
                        className={styles.background}
                        style={{ backgroundColor: backgroundColor }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0.5, y: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      animate={{ opacity: 0.5, y: 0, rotate: 11 }}
                      exit={{ opacity: 0, y: 0, rotate: 0 }}
                      key={imageUrl}
                      className={styles['img-wrapper']}
                    >
                      <Image
                        alt="project"
                        src={imageUrl}
                        width={337}
                        height={240}
                        className={styles.img}
                        placeholder="blur"
                        blurDataURL={blurCardDataUrls[index]}
                      />
                    </motion.div>
                  </div>
                </>
              )}
            </AnimatePresence>
          </>
        );
      })}
    </div>
  );
};
export default CardAccentDrop;
