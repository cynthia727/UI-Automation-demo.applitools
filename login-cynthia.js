/// <reference-types = "Cypress" />

describe('login test suite', () => {

    it('test a successful login', () => {
       
        // The following codes for testing on saucedemo.com 
        /*
        cy.visit('https://saucedemo.com')
        cy.get('[data-test=username').type('standard_user')
        cy.get('[data-test=password').type('secret_sauce')
        cy.get('[data-test=login-button').click()
        */

        // The following codes for testing on demo.applitools.com
        cy.visit('https://demo.applitools.com')
        cy.get('[id=username').type('standard_user')
        cy.get('[id=password').type('secret_sauce')
        cy.get('[id=log-in').click()
        

    })
})


