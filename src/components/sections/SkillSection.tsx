'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import skillStyles from '@/styles/components/Skills.module.scss';
import { useScroll, useTransform, motion } from 'framer-motion';
import yaml from '@/templates/home.yaml';
import { iconFactory } from '../../helpers/iconFactory';
import { useParallax } from '@/hooks';
import { LinkIds } from '@/enums';

export const SkillSection = (props: typeof yaml.skillSection) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end start', 'start end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const { image, blurDataUrl, content } = props;

  useParallax();

  return (
    <section className={skillStyles['skill-section']} id={LinkIds.SKILLS_ID}>
      <h2 className={skillStyles.title}>THE SKILLS I BRING FOR YOU</h2>
      <div>
        <div className={skillStyles.spacer} />
        <div className={skillStyles['scroll-content']} ref={ref}>
          <motion.div style={{ y }} className={skillStyles.page}>
            <div
              style={{ height: '100%', width: '100%', position: 'relative' }}
            >
              <Image
                height={300}
                width={300}
                className={skillStyles.img}
                src={image}
                alt="mac computer coding screen"
                placeholder="blur"
                blurDataURL={blurDataUrl}
              />
            </div>
          </motion.div>
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
              <p className={skillStyles.number}>{number}</p>
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
