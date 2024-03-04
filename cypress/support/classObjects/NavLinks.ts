import { NavLinksTestIds } from '../../../src/enums';

export default class NavLinks {
  /**
   *
   * @returns {*}
   */
  getHomeLink() {
    return cy.getDataTest(NavLinksTestIds.HOME);
  }
  /**
   *
   * @returns {*}
   */
  getLogoLink() {
    return cy.getDataTest(NavLinksTestIds.LOGO);
  }
  /**
   *
   * @returns {*}
   */
  getContactLink() {
    return cy.getDataTest(NavLinksTestIds.CONTACT);
  }
}
