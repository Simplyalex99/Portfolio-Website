'use client';
import { useRef } from 'react';
import styles from '@/styles/components/Testimonial.module.scss';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType, { TargetElement } from 'split-type';
import yaml from '@/templates/home.yaml';

export const TestimonialSection = () => {
  const refs = useRef<Array<HTMLParagraphElement | null>>([]);
  useGSAP(() => {
    refs.current = refs.current.slice(0, refs.current.length);

    refs.current.map((ref) => {
      const texts = new SplitType(ref as TargetElement, {
        types: 'chars',
      });
      gsap.from(texts.chars, {
        scrollTrigger: {
          trigger: ref,
          start: 'top 100%',
          end: 'top 47%',
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  }, []);
  const { content } = yaml.testimonialSection;
  return (
    <section className={`${styles.section}`}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={`${styles.container}`}>
          {content.map((data, i) => {
            const { company, author, role, linkUrl, description } = data;

            return (
              <>
                <div className={styles.spacer}></div>
                <div className={styles['testimonial-wrapper']} key={company}>
                  <p
                    className={styles.testimonial}
                    ref={(e) => (refs.current[i] = e)}
                  >
                    {description}
                  </p>

                  <p className={styles.author}>{author}</p>
                  <p className={styles.from}>
                    {role} of{' '}
                    <Link href={linkUrl} className={styles.company}>
                      {company}
                    </Link>
                  </p>
                </div>
                <div className={styles.spacer}></div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
