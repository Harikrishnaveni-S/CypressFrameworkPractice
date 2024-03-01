export class registerPage {


    webLocators = {

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '[id="input-password"]',
        passwordConfirm: '#input-confirm',
        policyCheckbox: '[type="checkbox"]',
        continue: '[type="submit"]'

    }

    openUrl() {
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(firstNameValue) {
        cy.get(this.webLocators.firstName).type(firstNameValue)
    }

    enterLastName(lastNameValue) {
        cy.get(this.webLocators.lastName).type(lastNameValue)
    }

    enterEmailId(emailId) {
        cy.get(this.webLocators.email).type(emailId)
    }

    enterTelephoneNumber(telephoneNumber) {
        cy.get(this.webLocators.telephone).type(telephoneNumber)
    }

    enterPassword(passwordValue) {
        cy.get(this.webLocators.password).type(passwordValue)
        cy.get(this.webLocators.passwordConfirm).type(passwordValue)
    }

    selectPolicyCheckbox() {
        cy.get(this.webLocators.policyCheckbox).check()
    }

    clickOnContinue() {
        cy.get(this.webLocators.continue).click()
    }
}