'use client';

import React, { useEffect, useState } from 'react';
import Link, { LinkProps } from 'next/link';
import { playfair } from '@/fonts';
import { Links, NavLinksTestIds } from '@/enums';
import navbarStyles from '@/styles/components/Navbar.module.scss';
import { usePathname } from 'next/navigation';
import { HamburgerMenuSVG } from '../svg/common/HamburgerMenu';
import { CloseSVG } from '../svg/common/Close';
import { useToggleNavbarMenu } from '../../hooks/index';

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
  useToggleNavbarMenu(toggleProps);
  useEffect(() => {
    const currentTab = activeTabFactory(pathname);
    setActiveTab(currentTab);
  }, [pathname]);
  return (
    <div className="container">
      <div
        id="navbar"
        className={`${navbarStyles['drop-shadow']} ${navbarStyles['navbar-bg']}`}
      >
        <header className={`flex  wrapper ${navbarStyles.container}`}>
          <div className={`flex ${navbarStyles['custom-link-wrapper']}`}>
            <div
              id="menu-wrapper"
              data-testid={NavLinksTestIds.MENU}
              role="presentation"
              className={`
                ${navbarStyles['menu-wrapper']}
            }`}
            >
              <HamburgerMenuSVG
                className={`${navbarStyles['menu-icon']}  `}
                width="35"
                height="35"
              />
            </div>

            <Link href={HOME_PATH} data-testid={NavLinksTestIds.LOGO}>
              <button
                type="button"
                className={`${navbarStyles['custom-link']} ${playfair.className}`}
              >
                MyPortfolio
              </button>
            </Link>
          </div>
          <nav
            id="nav"
            className={`${navbarStyles['nav-container']}

              `}
          >
            <div
              role="presentation"
              id="close"
              data-testid={NavLinksTestIds.CLOSE}
              className={navbarStyles['close-icon-wrapper']}
            >
              <CloseSVG
                className={`${navbarStyles['close-icon']} ${navbarStyles['close-icon-light']}`}
              />
            </div>
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
                    <span>{ActiveTabType.HOME}</span>
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
                    type="button"
                    className={`${navbarStyles['nav-item']} ${navbarStyles.contact}`}
                  >
                    <span> {ActiveTabType.CONTACT}</span>
                  </button>
                </div>
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
export default Navbar;
