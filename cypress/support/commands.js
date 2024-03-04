import { loginPage } from "../pages/loginPage"
const loginObj = new loginPage()

Cypress.Commands.add('login', (username, password) => {

    cy.visit(Cypress.env('URL'))
    loginObj.enterEmailId(username)
    loginObj.enterPassword(password)
    loginObj.clickOnLogin()
})