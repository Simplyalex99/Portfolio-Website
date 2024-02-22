'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Playfair_Display_SC } from 'next/font/google';
import skillStyles from '@/styles/components/Skills.module.scss';
import {
  useScroll,
  useTransform,
  LazyMotion,
  m,
  domAnimation,
} from 'framer-motion';
import yaml from '@/templates/home.yaml';
import { iconFactory } from '../../helpers/iconFactory';
import { useParallax } from '@/hooks';
import { LinkIds } from '@/enums';

const playfairSC = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400'],
});

export const SkillSection = (props: typeof yaml.skillSection) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const { image, blurDataUrl, content } = props;

  useParallax();

  return (
    <section className={skillStyles['skill-section']} id={LinkIds.SKILLS_ID}>
      <h2 className={skillStyles.title}>THE SKILLS I BRING FOR YOU</h2>
      <div>
        <div className={skillStyles.spacer} />
        <div className={skillStyles['scroll-content']} ref={ref}>
          <LazyMotion features={domAnimation}>
            <m.div style={{ y }} className={skillStyles.page}>
              <div
                style={{ height: '100%', width: '100%', position: 'relative' }}
              >
                <Image
                  height={600}
                  width={800}
                  className={skillStyles.img}
                  src={image}
                  alt="mac computer coding screen"
                  sizes="(min-width: 1740px) 534px, (min-width: 1100px) 29.03vw, (min-width: 600px) 500px, calc(94.29vw - 47px)"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                />
              </div>
            </m.div>
          </LazyMotion>
        </div>
        <div className={skillStyles.spacer} />
      </div>
      {content.map((data) => {
        const types = data?.icons ?? [];
        const svgs: Array<React.JSX.Element> = [];

        types.forEach((type) => {
          const Svg = iconFactory(type);
          svgs.push(Svg);
        });

        const { description, subheading, number } = data;
        return (
          <div className={skillStyles.grid} key={number}>
            <h3 className={skillStyles.subheading}>{subheading}</h3>
            <div className={skillStyles['bullet-point']}>
              <div className={skillStyles.divider} />
              <p className={`${skillStyles.number} ${playfairSC.className}`}>
                {number}
              </p>
            </div>
            <div className={skillStyles.content}>
              <p className={skillStyles.description}>{description}</p>
              <div className={skillStyles.flex}>{svgs}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default SkillSection;
