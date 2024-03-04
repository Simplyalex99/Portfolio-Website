import Link from 'next/link';
import FooterStyles from '@/styles/components/Footer.module.scss';

import { Links, FooterLinksTestIds } from '@/enums';

export const Footer = () => {
  const { HOME_PATH, CONTACT_PATH, GITHUB_LINK } = Links;
  return (
    <div className="container wrapper">
      <footer
        className={`${FooterStyles.footer} ${FooterStyles['footer-bg']}
}`}
      >
        <div className={FooterStyles['footer-wrapper']}>
          <div
            className={`${FooterStyles['footer-links']}
          `}
          >
            <Link href={HOME_PATH} data-testid={FooterLinksTestIds.HOME}>
              <p className={FooterStyles['footer-link']}>Home</p>
            </Link>
            <Link href={CONTACT_PATH} data-testid={FooterLinksTestIds.CONTACT}>
              <p className={FooterStyles['footer-link']}>Contact</p>
            </Link>
            <Link href={GITHUB_LINK} data-testid={FooterLinksTestIds.GITHUB}>
              <p className={FooterStyles['footer-link']}>GitHub</p>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
