export class loginPage {

    webLocators = {
        email: '#input-email',
        password: '[id="input-password"]',
        login: '[type="submit"]'
    }

    enterEmailId(emailId) {
        cy.get(this.webLocators.email).type(emailId)
    }

    enterPassword(password) {
        cy.get(this.webLocators.password).type(password)
    }

    clickOnLogin() {
        cy.get(this.webLocators.login).click()
    }
}