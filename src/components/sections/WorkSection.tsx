import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import homeStyles from '@/styles/components/Work.module.scss';
import yaml from '@/templates/home.yaml';
import { LinkIds } from '@/enums/index';
import { Button } from '../common/Button';
import { LeftQuoteSVG } from '../svg/others/LeftQuote';

export const WorkSection = (props: typeof yaml.workSection) => {
  const { content, blurDataUrls } = props;

  return (
    <section className={homeStyles['work-section']}>
      <div className={homeStyles['work-content-wrapper']} id={LinkIds.WORK_ID}>
        {content.map((data, index) => {
          const { imageUrl, linkUrl, description, text, title, accent } = data;
          return (
            <div key={title} className={homeStyles['work-content']}>
              <div className={homeStyles['work-img-wrapper']}>
                <h2 className={homeStyles['work-heading']}>
                  {accent}
                  <span className={homeStyles['work-accent']}>{text}</span>
                </h2>
                <div className={homeStyles['img-zoom']}>
                  <Image
                    alt="project image"
                    src={imageUrl}
                    fill
                    className={homeStyles['work-img']}
                    sizes="(max-width: 768px) 5vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={blurDataUrls[index]}
                  />
                </div>
              </div>
              <div className={homeStyles['work-text-content']}>
                <p className={homeStyles['work-title']}>{title}</p>
                <p className={homeStyles['work-description']}>{description}</p>
              </div>
              <div className={homeStyles['work-link-btn-wrapper']}>
                <Link href={linkUrl} className={homeStyles['work-link-btn']}>
                  <Button type="button" width="md">
                    See it
                  </Button>
                </Link>
              </div>
              <div className={homeStyles['testimonial-wrapper']}>
                {data?.testimonial && (
                  <div className={homeStyles.flex}>
                    <span className={homeStyles['left-quote']}>
                      {data.testimonial && <LeftQuoteSVG />}
                    </span>
                    <span className={homeStyles.testimonial}>
                      {data.testimonial}
                    </span>
                  </div>
                )}
                {data?.author && (
                  <p className={homeStyles.author}>
                    - {data.author}{' '}
                    <span className={homeStyles['job-type']}>
                      , {data?.jobType}
                    </span>
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default WorkSection;
