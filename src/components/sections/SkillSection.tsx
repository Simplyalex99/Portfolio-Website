'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { playfair, playfairSC } from '@/fonts';
import skillStyles from '@/styles/components/Skills.module.scss';
import { useScroll, useTransform, LazyMotion, m } from 'framer-motion';
import { loadFeatures } from '@/helpers';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import yaml from '@/templates/home.yaml';
import { LinkIds } from '@/enums';
import SplitType, { TargetElement } from 'split-type';

export const SkillSection = (props: typeof yaml.skillSection) => {
  const ref = useRef(null);
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
  }
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const { image, blurDataUrl, content } = props;
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleAccentRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  useGSAP(() => {
    const targets = [
      subheadingRef.current,
      titleRef.current,
      titleAccentRef.current,
    ];
    const descriptionTarget = descriptionRef.current;
    const texts = new SplitType(descriptionTarget as TargetElement, {
      types: 'chars',
    });
    gsap.from(texts.chars, {
      scrollTrigger: {
        trigger: descriptionTarget,
        start: 'top 100%',
        end: 'top 47%',
        scrub: true,
        markers: false,
      },
      opacity: 0.2,
      stagger: 0.1,
    });

    targets.forEach((target) => {
      const texts = new SplitType(target as TargetElement, {
        types: 'chars',
      });
      gsap.from(texts.chars, {
        scrollTrigger: {
          trigger: target,
          start: 'top 100%',
          end: 'top 55%',
          scrub: true,
          markers: false,
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
      });
    });
  }, []);

  return (
    <section className={skillStyles['skill-section']} id={LinkIds.SKILLS_ID}>
      <div className={skillStyles['title-lg']}>
        <p
          ref={subheadingRef}
          className={`${skillStyles['title-subheading']} ${playfair.className}`}
        >
          WHAT I OFFER
        </p>

        <p
          className={`${playfair.className} ${skillStyles.accent}`}
          ref={titleAccentRef}
        >
          Unique
        </p>
        <p
          ref={titleRef}
          className={`${skillStyles.title} ${playfairSC.className}`}
        >
          SKILLS
        </p>

        <p className={skillStyles['title-description']} ref={descriptionRef}>
          As a self-taught front-end developer, I made it my goal to learn
          designing beautiful interfaces, SEO , web accessibility, machine
          learning, and writing clean code so that I can bring value.
        </p>
      </div>

      <div className={skillStyles['wrapper']}>
        <h2 className={skillStyles['title-sm']}>THE SKILLS I BRING FOR YOU</h2>
        <div>
          <div className={skillStyles.spacer} />
          <div className={skillStyles['scroll-content']} ref={ref}>
            <LazyMotion features={loadFeatures}>
              <m.div style={{ y }} className={skillStyles.page}>
                <div
                  style={{
                    height: '100%',
                    width: '100%',
                    position: 'relative',
                  }}
                >
                  <div className={skillStyles['img-wrapper']}>
                    <Image
                      fill
                      className={skillStyles.img}
                      src={image}
                      alt="mac computer coding screen"
                      sizes="(min-width: 340px) 1000px, calc(3500vw - 10200px)"
                      placeholder="blur"
                      blurDataURL={blurDataUrl}
                    />
                  </div>
                </div>
              </m.div>
            </LazyMotion>
          </div>
          <div className={skillStyles.spacer} />
        </div>
        {content.map((data) => {
          const images = data?.images ?? [];
          const svgs = images.map((image) => {
            const { imageUrl, height, width, alt } = image;
            return (
              <Image
                src={imageUrl}
                alt={alt ?? 'tech'}
                key={imageUrl}
                height={height}
                width={width}
              />
            );
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
      </div>
    </section>
  );
};
export default SkillSection;
