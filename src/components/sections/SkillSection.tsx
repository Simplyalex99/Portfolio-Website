'use client';
import styles from '@/styles/components/Skill.module.scss';
import yaml from '@/templates/home.yaml';
import Image from 'next/image';
import { LinkIds } from '@/enums';
import ImageParallax from '../framer/ImageParallax';
export const SkillSection = () => {
  const {
    subheading,
    description,
    imageUrl,
    alt,
    blurDataUrl,
    briefSubheading,
  } = yaml.skillSection;

  return (
    <section className={styles.section} id={LinkIds.SKILLS_ID}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.container}>
          <div className={styles.box1}>
            <h2 className={styles.subheading}>{subheading}</h2>
            <h2 className={styles['brief-subheading']}>{briefSubheading}</h2>
          </div>
          <div className={styles.box2}>
            <p className={styles.description}>{description}</p>
            <div className={styles['parallax-container']}>
              <ImageParallax
                className={styles['img-wrapper']}
                containerClassName={styles['scroll-content']}
              >
                <Image
                  alt={alt}
                  src={imageUrl}
                  fill
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  className={styles.img}
                />
              </ImageParallax>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillSection;
