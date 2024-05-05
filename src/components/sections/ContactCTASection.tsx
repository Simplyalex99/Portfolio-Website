import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/ContactCTA.module.scss';
import { playfair } from '@/fonts';
import { Links } from '@/enums';
import Button from '../common/Button';
import Magnetic from '../framer/Magnetic';
import MagneticWave from '../framer/MagneticWave';
export const ContactCTASection = () => {
  return (
    <section className={styles.section}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.container}>
          <h2 className={`${playfair.className} ${styles.heading}`}>
            Let&apos;s Talk
          </h2>
          <Magnetic>
            <Button type="button" className={styles.button}>
              <Link href={Links.CONTACT_PATH} className={styles.link}>
                {' '}
                Contact me
              </Link>
            </Button>
          </Magnetic>

          <div className={styles['divider-wrapper']}>
            <div className={styles.divider} />

            <div className={styles['emote-wrapper']}>
              <div className={styles['mail-emoji']}>
                <MagneticWave>
                  <Image
                    src="/images/hand-waving.png"
                    height={44}
                    width={44}
                    alt="hand waving emoji"
                    className={styles.img}
                  />
                </MagneticWave>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactCTASection;
