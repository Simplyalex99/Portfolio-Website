import Link from 'next/link';
import FooterStyles from '@/styles/components/Footer.module.scss';

import { Links, FooterLinksTestIds } from '@/enums';

export const Footer = () => {
  const { HOME_PATH, CONTACT_PATH, GITHUB_LINK } = Links;
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer
      className={`

    ${FooterStyles['footer-bg']}`}
    >
      <div className={`container wrapper ${FooterStyles.container}`}>
        <div className={FooterStyles.footer}>
          <div className={FooterStyles['footer-wrapper']}>
            <p className={FooterStyles.trademark}>
              Copyright &copy; {currentYear}
            </p>
            <div
              className={`${FooterStyles['footer-links']}
          `}
            >
              <Link href={HOME_PATH} data-testid={FooterLinksTestIds.HOME}>
                <p className={FooterStyles['footer-link']}>Home</p>
              </Link>
              <Link
                href={CONTACT_PATH}
                data-testid={FooterLinksTestIds.CONTACT}
              >
                <p className={FooterStyles['footer-link']}>Contact</p>
              </Link>
              <Link href={GITHUB_LINK} data-testid={FooterLinksTestIds.GITHUB}>
                <p className={FooterStyles['footer-link']}>GitHub</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
