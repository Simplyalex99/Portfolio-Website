import HeroLinks from '../support/classObjects/HeroLinks';
import { LinkIds } from '../../src/enums';

describe('hero side navigation tests', () => {
  const heroLinks = new HeroLinks();
  const idPrefix = '#';

  beforeEach(() => {
    cy.visit('/');
  });

  context('given user clicks on side navigation', () => {
    it('redirects to work section', () => {
      heroLinks.getProjectsLink().click();
      cy.url().then((currentUrl) => {
        const lastSegment = currentUrl.split('/').pop();
        cy.get(`#${LinkIds.WORK_ID}`).should(($el) => {
          const elementId = idPrefix + $el.attr('id');
          expect(elementId).to.equal(lastSegment);
        });
      });
    });

    it('redirects to mission section', () => {
      heroLinks.getMissionLink().click();
      cy.url().then((currentUrl) => {
        const lastSegment = currentUrl.split('/').pop();
        cy.get(`#${LinkIds.MISSION_ID}`).should(($el) => {
          const elementId = idPrefix + $el.attr('id');
          expect(elementId).to.equal(lastSegment);
        });
      });
    });

    it('redirects to skill section', () => {
      heroLinks.getSkillsLink().click();
      cy.url().then((currentUrl) => {
        const lastSegment = currentUrl.split('/').pop();
        cy.get(`#${LinkIds.SKILLS_ID}`).should(($el) => {
          const elementId = idPrefix + $el.attr('id');
          expect(elementId).to.equal(lastSegment);
        });
      });
    });
  });

  it('redirects to see my work', () => {
    heroLinks.getWorkLink().click();
    cy.url().then((currentUrl) => {
      const lastSegment = currentUrl.split('/').pop();
      cy.get(`#${LinkIds.WORK_ID}`).should(($el) => {
        const elementId = idPrefix + $el.attr('id');
        expect(elementId).to.equal(lastSegment);
      });
    });
  });
});
