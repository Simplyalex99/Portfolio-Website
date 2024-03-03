import { HeroLinksTestIds } from '../../../src/enums';

export default class HeroLinks {
  /**
   *
   * @returns {*}
   */
  getWorkLink() {
    return cy.getDataTest(HeroLinksTestIds.WORK);
  }
  /**
   *
   * @returns {*}
   */
  getProjectsLink() {
    return cy.getDataTest(HeroLinksTestIds.PROJECTS);
  }
  /**
   *
   * @returns {*}
   */
  getSkillsLink() {
    return cy.getDataTest(HeroLinksTestIds.SKILLS);
  }
  /**
   *
   * @returns {*}
   */
  getMissionLink() {
    return cy.getDataTest(HeroLinksTestIds.MISSION);
  }
}
