import { homePage } from "../../pages/homePage"
const homePageObj = new homePage()
import addToCartTestData from '../../fixtures/addToCartTestData.json'


describe('test automation practice', () => {
    it('addToCart test', () => {

        cy.login(addToCartTestData.email, addToCartTestData.password)
        homePageObj.searchProduct(addToCartTestData.productName)
        homePageObj.addItemToCart()
        homePageObj.verifySuccessMessage().should('be.visible')

    })
})