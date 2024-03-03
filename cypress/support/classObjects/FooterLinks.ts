import { FooterLinksTestIds } from '../../../src/enums';

export default class NavLinks {
  /**
   *
   * @returns {*}
   */
  getHomeLink() {
    return cy.getDataTest(FooterLinksTestIds.HOME);
  }
  /**
   *
   * @returns {*}
   */
  getGithubLink() {
    return cy.getDataTest(FooterLinksTestIds.GITHUB);
  }
  /**
   *
   * @returns {*}
   */
  getContactLink() {
    return cy.getDataTest(FooterLinksTestIds.CONTACT);
  }
}
