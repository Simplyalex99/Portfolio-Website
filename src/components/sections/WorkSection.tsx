'use client';
import React from 'react';
import workStyles from '@/styles/components/Work.module.scss';
import yaml from '@/templates/home.yaml';
import { LinkIds } from '@/enums/index';
import { Project } from '../others/Project';

export const WorkSection = (props: typeof yaml.workSection) => {
  const { content, blurDataUrls } = props;
  return (
    <section className={workStyles['work-section']}>
      <div className={workStyles['work-content-wrapper']} id={LinkIds.WORK_ID}>
        {content.map((data, index) => {
          return (
            <Project
              key={data.linkUrl}
              data={data}
              blurDataUrl={blurDataUrls[index]}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WorkSection;
