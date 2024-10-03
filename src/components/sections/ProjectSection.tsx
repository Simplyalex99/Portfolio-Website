import yaml from '@/templates/home.yaml';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/components/Project.module.scss';
import HorizontalScroll from '../framer/HorizontalScroll';
export const ProjectSection = () => {
  const { content, heading, blurDataUrls, briefHeading } = yaml.projectSection;

  return (
    <>
      <section className={`wrapper ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>{heading}</h2>
            <h2 className={styles['heading-brief']}>{briefHeading}</h2>
          </div>
          <div className={styles.gallery}>
            {content.map((data, i) => {
              const { imageUrl, linkUrl, title, description, alt } = data;

              return (
                <div key={imageUrl} className={styles.card}>
                  <div className={styles['img-wrapper']}>
                    <Image
                      src={imageUrl}
                      fill
                      alt={alt}
                      className={styles.img}
                      placeholder="blur"
                      blurDataURL={blurDataUrls[i]}
                    />
                  </div>
                  <div className={styles['title-wrapper']}>
                    <p className={styles.title}>
                      <Link href={linkUrl} className={styles.link}>
                        {title}
                      </Link>
                    </p>
                    <p className={styles.count}>(0{i + 1})</p>
                  </div>
                  <p className={styles.description}>{description}</p>
                </div>
              );
            })}
          </div>
          <HorizontalScroll className={styles.carousel}>
            {content.map((data, i) => {
              const { imageUrl, linkUrl, title, description, alt } = data;

              return (
                <div key={imageUrl} className={styles.card}>
                  <div className={styles['img-wrapper']}>
                    <Image
                      src={imageUrl}
                      fill
                      alt={alt}
                      className={styles.img}
                      placeholder="blur"
                      blurDataURL={blurDataUrls[i]}
                    />
                  </div>
                  <div className={styles['title-wrapper']}>
                    <p className={styles.title}>
                      <Link href={linkUrl} className={styles.link}>
                        {title}
                      </Link>
                    </p>
                    <p className={styles.count}>(0{i + 1})</p>
                  </div>
                  <p className={styles.description}>{description}</p>
                </div>
              );
            })}
          </HorizontalScroll>
        </div>
      </section>
    </>
  );
};
export default ProjectSection;
