'use client';
import { useRef } from 'react';
import styles from '@/styles/components/Mission.module.scss';
import yaml from '@/templates/home.yaml';
import Image from 'next/image';
import { useScroll, useTransform, LazyMotion, m } from 'framer-motion';
import { loadFeatures } from '@/helpers';
export const MissionSection = (props: typeof yaml.missionSection) => {
  const { heading, content1, content2, content3, blurDataUrls } = props;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const lg = useTransform(scrollYProgress, [0, 1], [0, -900]);

  return (
    <>
      <section className={`wrapper ${styles.section}`} ref={container}>
        <div className={styles.container}>
          <h2 className={styles.heading}>{heading}</h2>
          <LazyMotion features={loadFeatures}>
            <m.div
              className={`${styles.card} ${styles.card1}`}
              style={{ y: sm }}
            >
              <div className={styles.content}>
                <div className={styles['img-wrapper']}>
                  <Image
                    src={content1.imageUrl}
                    fill
                    alt={content1.alt}
                    className={styles.img}
                    blurDataURL={blurDataUrls[0]}
                    placeholder="blur"
                  />
                </div>
                <p className={styles.description}>{content1.description}</p>
              </div>
            </m.div>
          </LazyMotion>
          <LazyMotion features={loadFeatures}>
            <m.div
              className={`${styles.card} ${styles.card2}`}
              style={{ y: lg }}
            >
              <div className={styles.content}>
                <div className={styles['img-wrapper']}>
                  <Image
                    src={content2.imageUrl}
                    fill
                    alt={content2.alt}
                    className={styles.img}
                    blurDataURL={blurDataUrls[1]}
                    placeholder="blur"
                  />
                </div>
                <p className={styles.description}>{content2.description}</p>
              </div>
            </m.div>
          </LazyMotion>

          <LazyMotion features={loadFeatures}>
            <m.div
              className={`${styles.card} ${styles.card3}`}
              style={{ y: md }}
            >
              <div className={styles.content}>
                <div className={styles['img-wrapper']}>
                  <Image
                    src={content3.imageUrl}
                    fill
                    alt={content3.alt}
                    className={styles.img}
                    blurDataURL={blurDataUrls[2]}
                    placeholder="blur"
                  />
                </div>
                <p className={styles.description}>{content3.description}</p>
              </div>
            </m.div>
          </LazyMotion>
        </div>
      </section>
    </>
  );
};
