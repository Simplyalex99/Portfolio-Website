'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '@/styles/components/Project.module.scss';
import yaml from '@/templates/home.yaml';
import { LinkIds } from '@/enums/index';
import { CardAccentDrop } from '../effects/CardAccentDrop';
import { playfair } from '@/fonts';
export const ProjectSection = (props: typeof yaml.projectSection) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const updateIndex = (index: number) => {
    setActiveIndex(index);
  };
  const resetIndex = () => {
    setActiveIndex(-1);
  };

  const { content, mobileImages, heading, blurMobileDataUrls } = props;

  return (
    <div className={styles.section} id={LinkIds.WORK_ID}>
      <div className="wrapper">
        <div className={` ${styles['content-wrapper']} `}>
          <div className={styles.content}>
            <div className={styles['heading-wrapper']}>
              <h2 className={styles.heading}>{heading}</h2>
            </div>
            <p className={styles.subheading}>Featured Projects</p>
            <div className={styles['card-accents']}>
              <CardAccentDrop
                data={yaml.projectSection}
                activeIndex={activeIndex}
                translateY={90}
                offset={15}
              />
            </div>

            <div className={styles['container-lg']}>
              {content.map((data, index) => {
                const { title, linkUrl } = data;
                return (
                  <div className={`${styles['project-wrapper']}`} key={title}>
                    <p
                      className={`${styles.project} ${playfair.className} `}
                      onMouseEnter={() => updateIndex(index)}
                      onMouseLeave={() => resetIndex()}
                    >
                      <Link href={linkUrl}>{title}</Link>
                    </p>
                  </div>
                );
              })}
            </div>
            <div className={styles.gallery}>
              {content.map((data, index) => {
                const { title, linkUrl } = data;
                return (
                  <div className={styles.flex} key={index}>
                    <div
                      className={`${styles['img-wrapper']} ${styles['img-zoom']}`}
                    >
                      <Image
                        src={mobileImages[index]}
                        fill={true}
                        alt=""
                        className={styles.img}
                        sizes="400px"
                        placeholder="blur"
                        blurDataURL={blurMobileDataUrls[index]}
                      />
                    </div>
                    <p className={`${styles['project-sm']}`}>
                      <Link href={linkUrl}>{title}</Link>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
