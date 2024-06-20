'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { playfair } from '@/fonts';
import { Links, NavLinksTestIds, LinkIds } from '@/enums';
import navbarStyles from '@/styles/components/Navbar.module.scss';
import { usePathname } from 'next/navigation';
import { LazyMotion, m, AnimatePresence } from 'framer-motion';
import { loadFeatures } from '@/helpers';
import { HamburgerMenuSVG } from '../svg/common/HamburgerMenu';
import { CloseSVG } from '../svg/common/Close';

export enum ActiveTabType {
  HOME = 'HOME',
  CONTACT = 'CONTACT',
}
export const activeTabFactory = (pathname: string): ActiveTabType => {
  switch (pathname) {
    case Links.CONTACT_PATH:
      return ActiveTabType.CONTACT;
    default:
      return ActiveTabType.HOME;
  }
};
const menuVariants = {
  initial: {
    scaleY: 0,
  },
  open: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const linkVariants = {
  initial: {
    y: '30vh',
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: 1,
      delayChildren: 0.3,
    },
  },
};
export const Navbar = () => {
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState<ActiveTabType>(ActiveTabType.HOME);
  const getIsActive = (type: ActiveTabType) => {
    return activeTab === type ? navbarStyles['active-tab'] : '';
  };
  const { HOME_PATH } = Links;

  const toggleProps = {
    menuId: 'menu-wrapper',
    closeId: 'close',
    navbarId: 'nav',
    className: navbarStyles['open-nav'],
  };

  /**
   *
   * contain an id for testimonials and check if there then add black
   * background.
   *
   */
  useEffect(() => {
    const currentTab = activeTabFactory(pathname);
    setActiveTab(currentTab);
  }, [pathname]);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const openMenuHandler = () => {
    setIsOpenMenu(true);
  };
  const closeMenuHandler = () => {
    setIsOpenMenu(false);
  };
  return (
    <>
      <div className="container">
        <div
          id="navbar"
          className={`${navbarStyles['drop-shadow']} ${navbarStyles['navbar-bg']}`}
        >
          <header className={`flex  wrapper ${navbarStyles.container}`}>
            <div className={`flex ${navbarStyles['custom-link-wrapper']}`}>
              <Link href={HOME_PATH} data-testid={NavLinksTestIds.LOGO}>
                <button
                  type="button"
                  className={`${navbarStyles['custom-link']}`}
                  style={{ fontWeight: 500 }}
                >
                  Alex
                </button>
              </Link>
            </div>
            <nav
              id="nav"
              className={`${navbarStyles['nav-container']}

              `}
            >
              <div className={`${navbarStyles['links-wrapper']}`}>
                <Link href={HOME_PATH} data-testid={NavLinksTestIds.HOME}>
                  <div
                    role="presentation"
                    onClick={() => setActiveTab(ActiveTabType.HOME)}
                    className={`${navbarStyles['nav-item-wrapper']}`}
                  >
                    <button
                      type="button"
                      className={`${getIsActive(ActiveTabType.HOME)} ${
                        navbarStyles['nav-item']
                      }  `}
                    >
                      <span
                        className={`${playfair.className} ${navbarStyles.font}`}
                      >
                        {ActiveTabType.HOME}
                      </span>
                    </button>
                  </div>
                </Link>
                <Link
                  href={Links.CONTACT_PATH}
                  data-testid={NavLinksTestIds.CONTACT}
                >
                  <div
                    role="presentation"
                    className={`${navbarStyles['nav-item-wrapper']}`}
                    onClick={() => setActiveTab(ActiveTabType.CONTACT)}
                  >
                    <button
                      className={`${getIsActive(ActiveTabType.CONTACT)} ${
                        navbarStyles['nav-item']
                      }  ${navbarStyles.contact}`}
                    >
                      <span
                        className={`${playfair.className} ${navbarStyles.font}`}
                      >
                        {' '}
                        {ActiveTabType.CONTACT}
                      </span>
                    </button>
                  </div>
                </Link>
              </div>
            </nav>
          </header>
        </div>
      </div>
      <div className={`${navbarStyles['nav-sm']}`}>
        <div
          className={`wrapper ${navbarStyles.navigation}`}
          onClick={openMenuHandler}
        >
          <span className={navbarStyles['menu-wrapper']}>
            <HamburgerMenuSVG
              width="35"
              height="35"
              className={navbarStyles.menu}
              id={toggleProps.menuId}
            />
          </span>
        </div>
      </div>
      <AnimatePresence>
        {isOpenMenu && (
          <LazyMotion features={loadFeatures}>
            <m.div
              variants={menuVariants}
              initial="initial"
              animate="open"
              exit="exit"
              className={navbarStyles['mobile-menu']}
            >
              <m.div
                className={navbarStyles['flex-mobile']}
                variants={containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
              >
                <div className={navbarStyles.hidden}>
                  <m.div variants={linkVariants}>
                    <Link
                      href={HOME_PATH}
                      className={`${playfair.className} ${getIsActive(ActiveTabType.HOME)} ${navbarStyles['mobile-link']}`}
                    >
                      Home
                    </Link>
                  </m.div>
                </div>
                <div className={navbarStyles.hidden}>
                  <m.div variants={linkVariants}>
                    <Link
                      href={Links.CONTACT_PATH}
                      className={`${playfair.className} ${getIsActive(ActiveTabType.CONTACT)} ${navbarStyles['mobile-link']}`}
                    >
                      Contact
                    </Link>
                  </m.div>
                </div>
              </m.div>
              <div
                className={navbarStyles['close-wrapper']}
                onClick={closeMenuHandler}
              >
                <CloseSVG className={navbarStyles.close} />
              </div>
            </m.div>
          </LazyMotion>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
