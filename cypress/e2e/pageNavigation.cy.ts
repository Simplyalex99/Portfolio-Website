import NavLinks from '../support/classObjects/NavLinks';
import FooterLinks from '../support/classObjects/FooterLinks';
import { ActionLinks, Links } from '../../src/enums';

describe('page navigation tests', () => {
  const { HOME_PATH, CONTACT_PATH } = Links;
  const navLinks = new NavLinks();
  const footerLinks = new FooterLinks();

  beforeEach(() => {
    cy.visit('/');
  });

  context('given user clicks on header links', () => {
    it('redirects to homepage', () => {
      navLinks.getLogoLink().click();
      cy.url().should('eq', Cypress.config().baseUrl + HOME_PATH);
      navLinks.getHomeLink().click();
      cy.url().should('eq', Cypress.config().baseUrl + HOME_PATH);
    });
    it('redirects to contact page', () => {
      navLinks.getContactLink().click();
      cy.url().should('eq', Cypress.config().baseUrl + CONTACT_PATH);
    });
  });

  context('given user clicks on footer links', () => {
    it('redirects to homepage', () => {
      footerLinks.getHomeLink().click();
      cy.url().should('eq', Cypress.config().baseUrl + HOME_PATH);
    });

    it('redirects to contact page', () => {
      footerLinks.getContactLink().click();
      cy.url().should('eq', Cypress.config().baseUrl + CONTACT_PATH);
    });
  });

  it('redirects to get in touch page ', () => {
    cy.getDataTest(ActionLinks.MISSION).click();
    cy.url().should('eq', Cypress.config().baseUrl + CONTACT_PATH);
  });
});
