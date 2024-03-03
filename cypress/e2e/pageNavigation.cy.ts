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
  it('verifies page navigation between internal links in header ', () => {
    navLinks.getContactLink().click();
    cy.url().should('eq', Cypress.config().baseUrl + CONTACT_PATH);
    navLinks.getLogoLink().click();
    cy.url().should('eq', Cypress.config().baseUrl + HOME_PATH);
    navLinks.getHomeLink().click();
    cy.url().should('eq', Cypress.config().baseUrl + HOME_PATH);
  });

  it('verifies page navigation between internal links in footer', () => {
    footerLinks.getHomeLink().click();
    cy.url().should('eq', Cypress.config().baseUrl + HOME_PATH);
    footerLinks.getContactLink().click();
    cy.url().should('eq', Cypress.config().baseUrl + CONTACT_PATH);
  });
  it('verifies page navigation for mission action button', () => {
    cy.getDataTest(ActionLinks.MISSION).click();
    cy.url().should('eq', Cypress.config().baseUrl + CONTACT_PATH);
  });
});
