export class homePage {

    webLocators = {
        searchInput: '[class="form-control input-lg"]',
        searchIconButton: '[class="btn btn-default btn-lg"]',
        addToCart: 'Add to Cart',
        successMessage: '[class*="alert"]'
    }


    searchProduct(productName) {
        cy.get(this.webLocators.searchInput).type(productName)
        cy.get(this.webLocators.searchIconButton).click()
    }

    addItemToCart() {
        cy.contains(this.webLocators.addToCart).first().click()
    }

    verifySuccessMessage() {
        return cy.get(this.webLocators.successMessage)
    }
}