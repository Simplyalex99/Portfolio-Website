import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import workStyles from '@/styles/components/Work.module.scss';
import yaml from '@/templates/home.yaml';
import { LinkIds } from '@/enums/index';
import { Button } from '../common/Button';
import { LeftQuoteSVG } from '../svg/others/LeftQuote';

export const WorkSection = (props: typeof yaml.workSection) => {
  const { content, blurDataUrls } = props;

  return (
    <section className={workStyles['work-section']}>
      <div className={workStyles['work-content-wrapper']} id={LinkIds.WORK_ID}>
        {content.map((data, index) => {
          const { imageUrl, linkUrl, description, text, title, accent } = data;
          return (
            <div key={title} className={workStyles['work-content']}>
              <div className={workStyles['work-img-wrapper']}>
                <h2 className={workStyles['work-heading']}>
                  {accent}
                  <span className={workStyles['work-accent']}>{text}</span>
                </h2>
                <div className={workStyles['img-zoom']}>
                  <Image
                    alt="project image"
                    src={imageUrl}
                    height={300}
                    width={800}
                    className={workStyles['work-img']}
                    sizes="(min-width: 920px) 800px, calc(94vw - 46px)"
                    placeholder="blur"
                    blurDataURL={blurDataUrls[index]}
                  />
                </div>
              </div>
              <div className={workStyles['work-text-content']}>
                <p className={workStyles['work-title']}>{title}</p>
                <p className={workStyles['work-description']}>{description}</p>
              </div>
              <div className={workStyles['work-link-btn-wrapper']}>
                <Link href={linkUrl} className={workStyles['work-link-btn']}>
                  <Button type="button" width="md">
                    See it
                  </Button>
                </Link>
              </div>
              <div className={workStyles['testimonial-wrapper']}>
                {data?.testimonial && (
                  <div className={workStyles.flex}>
                    <span className={workStyles['left-quote']}>
                      {data.testimonial && <LeftQuoteSVG />}
                    </span>
                    <span className={workStyles.testimonial}>
                      {data.testimonial}
                    </span>
                  </div>
                )}
                {data?.author && (
                  <p className={workStyles.author}>
                    - {data.author}{' '}
                    <span className={workStyles['job-type']}>
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
