'use client';
import { useRef, useEffect } from 'react';
import styles from '@/styles/components/Hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import yaml from '@/templates/home.yaml';
import { useInView, useAnimation, m, LazyMotion } from 'framer-motion';
import Button from '../common/Button';
import { loadFeatures } from '@/helpers';
import { Links } from '@/enums';
const variants = {
  initial: {
    y: '30vh',
    transition: {
      duration: 0.5,
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.09,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};
const imageVariant = {
  initial: {
    opacity: 0,
    y: 0,
  },
  open: {
    opacity: 1,
    y: 10,
    transition: {
      ease: 'linear',
      delay: 0.2,
    },
  },
};
export const HeroSection = () => {
  const { imageUrl } = yaml.heroSection;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('open');
    }
  }, [isInView]);
  return (
    <section className={`wrapper ${styles.section}`} id="section-a">
      <>
        <LazyMotion features={loadFeatures}>
          <m.div variants={containerVariants} initial="initial" animate="open">
            <div className={styles.container}>
              <div className={styles.hidden}>
                <m.p variants={variants} className={` ${styles.subheading1}`}>
                  crafting
                </m.p>
              </div>

              <div className={styles.hidden}>
                <m.h1 variants={variants} className={`${styles.heading}`}>
                  aesthetic
                </m.h1>
              </div>
              <div className={styles.hidden}>
                <m.p variants={variants} className={`${styles.subheading2}`}>
                  designs
                </m.p>
              </div>
              <div className={styles.hidden}>
                <m.div variants={variants}>
                  <Link href={Links.CONTACT_PATH}>
                    <Button type="button" width="md" className={styles.btn}>
                      Contact me
                    </Button>
                  </Link>
                </m.div>
              </div>
            </div>

            <div className={styles.content}>
              <m.div
                variants={variants}
                className={`${styles['img-wrapper']} `}
              >
                <m.div
                  variants={imageVariant}
                  initial="initial"
                  animate={mainControls}
                  ref={ref}
                  className={styles.capsul}
                >
                  <Image
                    src={imageUrl}
                    alt="my hobby"
                    fill
                    priority
                    className={styles['img-small']}
                    sizes="(min-width: 1740px) 534px, (min-width: 1100px) 29.03vw, (min-width: 600px) 500px, calc(94.29vw - 47px)"
                  />
                </m.div>
              </m.div>

              <div className={styles.subcontent}>
                <div className={styles.careers}>
                  <p className={styles.addons}>SEO, UI/UX, AI</p>
                  <p className={styles.job}>FRONTEND DEVELOPER</p>
                </div>
                <div className={styles.graduation}>
                  <p className={styles['degree-short-form']}>BCS 2022-2023</p>
                  <p className={styles.year}>2022-2023</p>
                  <p className={styles.degree}>Bachelor&apos;s C.S degree</p>
                </div>
              </div>
            </div>
          </m.div>
        </LazyMotion>
      </>
    </section>
  );
};

export default HeroSection;
