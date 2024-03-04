import { ModalTestIds } from '../../../src/enums';

export default class ContactForm {
  /**
   *
   * @returns {*}
   */
  getModalSuccess() {
    return cy.getDataTest(ModalTestIds.MODAL_SUCCESS);
  }
  /**
   *
   * @returns {*}
   */
  getModalError() {
    return cy.getDataTest(ModalTestIds.MODAL_ERROR);
  }
}
