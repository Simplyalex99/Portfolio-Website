import styles from '@/styles/components/Testimonial.module.scss';
import Link from 'next/link';

import yaml from '@/templates/home.yaml';
import { TextReveal } from '../framer/TextReveal';

export const TestimonialSection = () => {
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
                  <TextReveal text={description} />

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
