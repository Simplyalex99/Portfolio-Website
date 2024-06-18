'use client';
import { useState, useRef } from 'react';
import styles from '@/styles/components/About.module.scss';
import { LazyMotion, m } from 'framer-motion';
import { loadFeatures } from '@/helpers';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType, { TargetElement } from 'split-type';
import CldVideo from '../others/CldVideo';

const variants = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  open: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};
export const AboutSection = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const ref = useRef<HTMLHeadingElement>(null);
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
  }
  useGSAP(() => {
    const texts = new SplitType(ref.current as TargetElement, {
      types: 'chars',
    });
    gsap.from(texts.chars, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 100%',
        end: 'top 25%',
        scrub: true,
        markers: false,
      },
      y: 100,
      opacity: 0,
      stagger: 0.1,
    });
  }, []);
  return (
    <>
      <section className={`wrapper ${styles.section}`}>
        <div className={styles.container}>
          <h2 className={styles.heading} ref={ref}>
            The creative pursuits that
            <br className={styles.br} /> inspire my work
          </h2>
          <div className={styles['content-sm']}>
            <div className={`${styles['grid-item']} ${styles['grid-item1']}`}>
              <p className={styles.number}>01</p>
              <p className={styles.hobby}>Skateboard</p>
            </div>
            <div className={`${styles['grid-item']} ${styles['grid-item1']}`}>
              <p className={styles.number}>02</p>
              <p className={styles.hobby}>Photography</p>
            </div>
            <div className={`${styles['grid-item']} ${styles['grid-item1']}`}>
              <p className={styles.number}>03</p>
              <p className={styles.hobby}>Art</p>
            </div>
          </div>
          <div className={styles['content-md']}>
            <div className={`${styles['grid-item']} ${styles['grid-item1']}`}>
              <p className={styles.number}>01</p>
              <p className={styles.hobby}>Skateboard</p>
            </div>
            <div className={styles['grid-item']}>
              <p className={styles.number}>02</p>
              <p className={styles.hobby}>Photography</p>
            </div>
            <div className={`${styles['grid-item']} ${styles.last}`}>
              <p className={styles.number}>03</p>
              <p className={styles.hobby}>Art</p>
            </div>
          </div>

          <div className={styles.grid}>
            <div
              className={`${styles['grid-item']} ${styles['grid-item1']}`}
              onMouseEnter={() => {
                setModal({ active: true, index: 0 });
              }}
              onMouseLeave={() => {
                setModal({ ...modal, active: false });
              }}
            >
              <p className={styles.number}>01</p>
              <p className={styles.hobby}>Skateboard</p>
            </div>
            <div
              className={styles['grid-item']}
              onMouseEnter={() => {
                setModal({ active: true, index: 1 });
              }}
              onMouseLeave={() => {
                setModal({ ...modal, active: false });
              }}
            >
              <p className={styles.number}>02</p>
              <p className={styles.hobby}>Photography</p>
            </div>
            <div
              className={styles['grid-item']}
              onMouseEnter={() => {
                setModal({ active: true, index: 2 });
              }}
              onMouseLeave={() => {
                setModal({ ...modal, active: false });
              }}
            >
              <p className={styles.number}>03</p>
              <p className={styles.hobby}>Art</p>
            </div>
            <div
              className={`${styles['grid-item']} ${styles['video-container']}`}
            >
              <LazyMotion features={loadFeatures}>
                <m.div
                  variants={variants}
                  initial={'initial'}
                  animate={
                    modal.active && modal.index === 0 ? 'open' : 'closed'
                  }
                  className={`${styles['video-subcontainer']} ${modal.active && modal.index === 0 ? styles.active : ''} `}
                >
                  <CldVideo
                    src={
                      process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_SKATEBOARD ?? ''
                    }
                    id={'video-skateboard'}
                    width={600}
                    height={400}
                    className={`${styles.video}  `}
                    autoPlay={modal.active && modal.index === 0}
                    controls={false}
                    fluid={true}
                    hideContextMenu
                    autoplay
                    muted
                    loop
                  />
                </m.div>
              </LazyMotion>
              <LazyMotion features={loadFeatures}>
                <m.div
                  variants={variants}
                  initial={'initial'}
                  animate={
                    modal.active && modal.index === 1 ? 'open' : 'closed'
                  }
                  className={`${styles['video-subcontainer']} ${modal.active && modal.index === 1 ? styles.active : ''} `}
                >
                  <CldVideo
                    src={
                      process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_PHOTOGRAPHY ?? ''
                    }
                    id={'video-photography'}
                    width={600}
                    height={400}
                    className={`${styles.video} `}
                    autoPlay={modal.active && modal.index === 1}
                    controls={false}
                    fluid={true}
                    hideContextMenu
                    autoplay
                    muted
                    loop
                  />
                </m.div>
              </LazyMotion>
              <LazyMotion features={loadFeatures}>
                <m.div
                  variants={variants}
                  initial={'initial'}
                  animate={
                    modal.active && modal.index === 2 ? 'open' : 'closed'
                  }
                  className={`${styles['video-subcontainer']} ${modal.active && modal.index === 2 ? styles.active : ''} `}
                >
                  <CldVideo
                    src={process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_ART ?? ''}
                    id={'video-art'}
                    width={600}
                    height={400}
                    className={`${styles.video}  `}
                    autoPlay={modal.active && modal.index === 2}
                    controls={false}
                    fluid={true}
                    hideContextMenu
                    autoplay
                    muted
                    loop
                  />
                </m.div>
              </LazyMotion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutSection;
