'use client';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '@/styles/components/Hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import yaml from '@/templates/home.yaml';
import { Loader } from '../framer/SmoothLoading';
import { TextFloatUp } from '../framer/TextFloatUp';
import Button from '../common/Button';
import { Links } from '@/enums';
export const HeroSection = () => {
  const { imageUrl } = yaml.heroSection;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.getElementById('section-a')?.classList.add(styles.loading);
      document.getElementById('spacer')?.classList.add(styles.spacer);
    } else {
      document.getElementById('section-a')?.classList.remove(styles.loading);
      document.getElementById('spacer')?.classList.remove(styles.spacer);
    }
  }, [loading]);
  return (
    <section className={`wrapper ${styles.section}`} id="section-a">
      <LayoutGroup>
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />{' '}
            </motion.div>
          ) : (
            <>
              <div className={styles.container}>
                <p className={` ${styles.subheading1}`}>
                  <TextFloatUp>crafting</TextFloatUp>
                </p>
                <h1 className={`${styles.heading}`}>
                  {' '}
                  <TextFloatUp>aesthic</TextFloatUp>
                </h1>
                <p className={`${styles.subheading2}`}>
                  <TextFloatUp>designs</TextFloatUp>
                </p>
                <TextFloatUp className={styles['btn-container']}>
                  <Link href={Links.CONTACT_PATH}>
                    <Button type="button" width="md" className={styles.btn}>
                      Contact me
                    </Button>
                  </Link>
                </TextFloatUp>
              </div>
              <div className={styles.content}>
                <motion.div
                  className={`${styles['img-wrapper']} ${styles['transition-image']} `}
                  transition={{ ease: [0.6, 0.01, 0.05, 0.9], duration: 1.6 }}
                  layoutId="main-image-1"
                >
                  <Image
                    src={imageUrl}
                    alt="my hobby"
                    fill
                    priority
                    className={styles['img-small']}
                    sizes="(min-width: 1740px) 534px, (min-width: 1100px) 29.03vw, (min-width: 600px) 500px, calc(94.29vw - 47px)"
                  />
                </motion.div>

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
            </>
          )}
        </AnimatePresence>
      </LayoutGroup>
      <div className={styles.spacer} id="spacer"></div>
    </section>
  );
};

export default HeroSection;
