'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '@/styles/framer/MaskButton.module.scss';
export const MaskButton = ({
  children,
  classNameContainer,
  classNameText,
  classNameMask,
  text = null,
}: {
  children: React.ReactNode;

  text?: string | null;
  classNameText?: string;
  classNameContainer?: string;
  classNameMask?: string;
}) => {
  const circle = useRef(null);

  const timeline = useRef<GSAPTimeline>();
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        {
          top: '-10%',
          duration: 0.5,
          width: '150%',
          ease: 'power3.in',
        },
        'enter'
      )
      .to(
        circle.current,
        { top: '100%', duration: 0.3, width: '150%' },
        'exit'
      );
  }, []);
  const handleMouseEnter = () => {
    timeline.current?.tweenFromTo('enter', 'exit');
  };
  const handleMouseLeave = () => {
    timeline.current?.play();
  };

  return (
    <div
      className={`${styles.container} ${classNameContainer}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      <div ref={circle} className={`${styles.circle} ${classNameMask}`}>
        <p className={`${styles.text} ${classNameText}`}>{text ?? 'Explore'}</p>
      </div>
    </div>
  );
};
