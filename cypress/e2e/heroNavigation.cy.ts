import HeroLinks from '../support/classObjects/HeroLinks';
import { LinkIds } from '../../src/enums';

describe('hero side navigation tests', () => {
  const heroLinks = new HeroLinks();
  beforeEach(() => {
    cy.visit('/');
  });
  it('verifies page nagivation to work section', () => {
    heroLinks.getProjectsLink().click();
    cy.url().then((currentUrl) => {
      const lastSegment = currentUrl.split('/').pop();
      cy.get(`#${LinkIds.WORK_ID}`).should(($el) => {
        const elementId = '#' + $el.attr('id');
        expect(elementId).to.equal(lastSegment);
      });
    });
  });
  it('verifies page nagivation to mission section', () => {
    heroLinks.getMissionLink().click();
    cy.url().then((currentUrl) => {
      const lastSegment = currentUrl.split('/').pop();
      cy.get(`#${LinkIds.MISSION_ID}`).should(($el) => {
        const elementId = '#' + $el.attr('id');
        expect(elementId).to.equal(lastSegment);
      });
    });
  });

  it('verifies page nagivation to skill section', () => {
    heroLinks.getSkillsLink().click();
    cy.url().then((currentUrl) => {
      const lastSegment = currentUrl.split('/').pop();
      cy.get(`#${LinkIds.SKILLS_ID}`).should(($el) => {
        const elementId = '#' + $el.attr('id');
        expect(elementId).to.equal(lastSegment);
      });
    });
  });
  it('verifies hero action navigation to work section', () => {
    heroLinks.getWorkLink().click();
    cy.url().then((currentUrl) => {
      const lastSegment = currentUrl.split('/').pop();
      cy.get(`#${LinkIds.WORK_ID}`).should(($el) => {
        const elementId = '#' + $el.attr('id');
        expect(elementId).to.equal(lastSegment);
      });
    });
  });
});
