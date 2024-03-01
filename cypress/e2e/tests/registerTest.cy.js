import { registerPage } from "../../pages/registerPage"
const registerObj = new registerPage()
import registerTestData from "../../fixtures/registerTestData.json"

describe('practice test automation', () => {

    it('test register flow', () => {

        registerObj.openUrl()
        registerObj.enterFirstName(registerTestData.firstName)
        registerObj.enterLastName(registerTestData.lastName)
        registerObj.enterEmailId(registerTestData.email)
        registerObj.enterTelephoneNumber(registerTestData.telephone)
        registerObj.enterPassword(registerTestData.password)
        registerObj.selectPolicyCheckbox()
        registerObj.clickOnContinue()

    })
})