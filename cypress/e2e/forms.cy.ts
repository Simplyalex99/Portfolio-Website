import ContactForm from '../support/classObjects/ContactForm';
import Modal from '../support/classObjects/Modal';

describe('contact form tests', () => {
  const contactForm = new ContactForm();
  const modal = new Modal();

  it('displays form validation and submits when valid', () => {
    cy.visit('/contact');
    // --------------------------------------------------------------------------
    // FORM VALIDATION

    contactForm.getNameField().clear();
    contactForm.getEmailField().clear();
    contactForm.getMessageField().clear();
    contactForm.getSubmitButton().click();
    contactForm.getNameError().should('be.visible');
    contactForm.getEmailError().should('be.visible');
    contactForm.getMessageError().should('be.visible');

    // --------------------------------------------------------------------------
    // FORM SUBMISSION

    contactForm.getNameField().clear().type('Joe Tester');
    contactForm.getEmailField().clear().type('Joe_Tester@gmail.com');
    contactForm.getMessageField().clear().type('This is a test');
    contactForm.getSubmitButton().click();
    contactForm.getSubmitButton().should('be.disabled');
    modal.getModalSuccess().should('be.visible');
  });
});
