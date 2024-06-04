import styles from '@/styles/components/Hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import yaml from '@/templates/home.yaml';

import Button from '../common/Button';
import { Links } from '@/enums';
export const HeroSection = () => {
  const { imageUrl } = yaml.heroSection;

  return (
    <section className={`wrapper ${styles.section}`} id="section-a">
      <>
        <div className={styles.container}>
          <p className={` ${styles.subheading1}`}>crafting</p>
          <h1 className={`${styles.heading}`}> aesthic</h1>
          <p className={`${styles.subheading2}`}>designs</p>

          <Link href={Links.CONTACT_PATH} className={styles['btn-container']}>
            <Button type="button" width="md" className={styles.btn}>
              Contact me
            </Button>
          </Link>
        </div>
        <div className={styles.content}>
          <div className={`${styles['img-wrapper']} `}>
            <Image
              src={imageUrl}
              alt="my hobby"
              fill
              priority
              className={styles['img-small']}
              sizes="(min-width: 1740px) 534px, (min-width: 1100px) 29.03vw, (min-width: 600px) 500px, calc(94.29vw - 47px)"
            />
          </div>
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
    </section>
  );
};

export default HeroSection;
