'use client';
import Link from 'next/link';
import Image from 'next/image';
import { playfair, playfairSC } from '@/fonts';
import { RightArrowSVG, Navigation, SEO } from '@/components';
import yaml from '@/templates/home.yaml';
import { useParallax } from '@/hooks';
import homeStyles from '@/styles/pages/Home.module.scss';
import { LinkIds } from '@/enums';
import workStyles from '@/styles/components/Work.module.scss';

export const HeroSection = (props: typeof yaml.mainSection) => {
  const {
    image,
    subheading,
    heading,
    headingAccent,
    description,
    blurDataUrl,
  } = props;

  const imageId = 'carousel';

  const onMouseOverButton = () => {
    const element = document.getElementById('arrow-btn');
    if (element) {
      element.style.width = '120px';
      element.style.transition = '0.5s ease';
    }
  };
  const onMouseLeaveButton = () => {
    const element = document.getElementById('arrow-btn');
    if (element) {
      element.style.width = '100px';
    }
  };
  const onMouseOverImage = () => {
    const element = document.getElementById('hero-heading');
    const className = homeStyles['stroke-effect'];
    if (element) {
      element.classList.add(className);
    }
  };
  const onMouseLeaveImage = () => {
    const element = document.getElementById('hero-heading');
    const className = homeStyles['stroke-effect'];
    if (element) {
      element.classList.remove(className);
    }
  };

  useParallax();

  return (
    <>
      <SEO title="about Alex" description="beautiful portfolio  design" />
      <section className={homeStyles.hero}>
        <div
          className={`scroll ${homeStyles['hero-content']}`}
          data-rate="-.3"
          data-direction="vertical"
        >
          <div className={homeStyles['heading-wrapper']}>
            <p
              className={`${homeStyles['hero-subheading']} ${playfairSC.className}`}
            >
              {subheading}
            </p>
            <h2
              className={`${homeStyles['hero-heading']} ${playfairSC.className}`}
              id="hero-heading"
            >
              <span className={playfair.className}>{headingAccent}</span>
              <br />
              {heading}
            </h2>
          </div>

          <p className={homeStyles['hero-description']}>{description}</p>
          <div
            className={homeStyles['action-btn-wrapper']}
            onFocus={() => undefined}
            onMouseOver={onMouseOverButton}
            onMouseLeave={onMouseLeaveButton}
          >
            <RightArrowSVG
              width={100}
              id="arrow-btn"
              className={homeStyles['arrow-btn']}
            />
            <Link
              href={`#${LinkIds.WORK_ID}`}
              className={homeStyles['action-btn']}
            >
              See my work
            </Link>
          </div>
        </div>

        <div
          className={`${homeStyles['hero-img-wrapper']} scroll`}
          data-rate=".4"
          data-direction="vertical"
          onMouseOver={onMouseOverImage}
          onMouseLeave={onMouseLeaveImage}
          onFocus={() => undefined}
        >
          <div className={homeStyles['img-zoom']}>
            <Image
              src={image}
              alt="my hobby"
              id={imageId}
              width={400}
              height={800}
              sizes="(min-width: 1740px) 534px, (min-width: 1100px) 29.03vw, (min-width: 600px) 500px, calc(94.29vw - 47px)"
              className={homeStyles.img}
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
          </div>
        </div>
        <div
          className={`scroll ${homeStyles.navigation}`}
          data-rate="-.3"
          data-direction="vertical"
        >
          <Navigation />
        </div>
      </section>
      <div className={workStyles['work-content-wrapper']}>
        <h2
          className={`scroll ${homeStyles.work}`}
          data-rate="-.3"
          data-direction="vertical"
        >
          MY WORK AND PROJECTS
        </h2>
      </div>
    </>
  );
};

export default HeroSection;
