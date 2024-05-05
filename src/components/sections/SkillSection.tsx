'use client';
import { useRef } from 'react';
import styles from '@/styles/components/Skill.module.scss';
import yaml from '@/templates/home.yaml';
import Image from 'next/image';
import { useTransform, useScroll, LazyMotion, m } from 'framer-motion';
import { loadFeatures } from '@/helpers';
import { LineSVG } from '../svg/others/Line';
export const SkillSection = () => {
  const { subheading, description, imageUrl, alt, blurDataUrl } =
    yaml.skillSection;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  return (
    <section className={styles.section}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.container}>
          <div className={styles.box1}>
            <div className={styles['scroll-container']}>
              <p className={styles.scroll}>Scroll</p>
              <LineSVG />
            </div>
            <h2 className={styles.subheading}>{subheading}</h2>
          </div>
          <div className={styles.box2}>
            <p className={styles.description}>{description}</p>
            <div className={styles['parallax-container']}>
              <div className={styles.spacer} />
              <div className={styles['scroll-content']} ref={ref}>
                <LazyMotion features={loadFeatures}>
                  <m.div style={{ y }} className={styles['img-wrapper']}>
                    <Image
                      alt={alt}
                      src={imageUrl}
                      fill
                      placeholder="blur"
                      blurDataURL={blurDataUrl}
                    />
                  </m.div>
                </LazyMotion>
              </div>
              <div className={styles.spacer} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillSection;
