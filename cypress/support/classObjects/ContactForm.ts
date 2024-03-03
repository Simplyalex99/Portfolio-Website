import { ContactPageTestIds } from '../../../src/enums';

export default class ContactForm {
  /**
   *
   * @returns {*}
   */
  getNameField() {
    return cy.getDataTest(ContactPageTestIds.NAME_FIELD);
  }
  /**
   *
   * @returns {*}
   */
  getEmailField() {
    return cy.getDataTest(ContactPageTestIds.EMAIL_FIELD);
  }
  /**
   *
   * @returns {*}
   */
  getMessageField() {
    return cy.getDataTest(ContactPageTestIds.MESSAGE_FIELD);
  }
  /**
   *
   * @returns {*}
   */
  getSubmitButton() {
    return cy.getDataTest(ContactPageTestIds.SUBMIT_BUTTON);
  }
  /**
   *
   * @returns {*}
   */
  getNameError() {
    return cy.getDataTest(ContactPageTestIds.NAME_ERROR);
  }
  /**
   *
   * @returns {*}
   */
  getMessageError() {
    return cy.getDataTest(ContactPageTestIds.MESSAGE_ERROR);
  }
  /**
   *
   * @returns {*}
   */
  getEmailError() {
    return cy.getDataTest(ContactPageTestIds.EMAIL_ERROR);
  }
}
