'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, m, useTransform } from 'framer-motion';
import { loadFeatures } from '@/helpers/loadFeatures';
import workStyles from '@/styles/components/Work.module.scss';
import yaml from '@/templates/home.yaml';
import { useScroll } from 'framer-motion';
import { LeftQuoteSVG } from '../svg/others/LeftQuote';
import { Button } from '../common/Button';
export const Project = ({
  data,
  blurDataUrl,
}: {
  data: (typeof yaml.workSection.content)[0];
  blurDataUrl: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 0.7], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const { imageUrl, linkUrl, description, text, title, accent } = data;
  return (
    <LazyMotion features={loadFeatures}>
      <m.div style={{ scale: scaleProgress, opacity: opacityProgress }}>
        <div key={title} className={workStyles.content} ref={ref}>
          <div className={workStyles['img-wrapper']}>
            <h2 className={workStyles.heading}>
              {accent}
              <span className={workStyles.accent}>{text}</span>
            </h2>
            <div className={workStyles['img-zoom']}>
              <Image
                alt="project image"
                src={imageUrl}
                height={300}
                width={800}
                className={workStyles.img}
                sizes="(min-width: 920px) 800px, calc(94vw - 46px)"
                placeholder="blur"
                blurDataURL={blurDataUrl}
              />
            </div>
          </div>
          <div className={workStyles.grid}>
            <div className={workStyles['text-content']}>
              <p className={workStyles.title}>{title}</p>
              <p className={workStyles.description}>{description}</p>
            </div>
            <div className={workStyles['link-btn-wrapper']}>
              <Link href={linkUrl} className={workStyles['link-btn']}>
                <Button type="button" width="md" className={workStyles.btn}>
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
        </div>
      </m.div>
    </LazyMotion>
  );
};
export default Project;
