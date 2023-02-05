import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Open given url',()=>{
    cy.visit('https://www.techivp.com/contact')
})

Then('verify the page title',()=>{
    cy.title().should('eq','Contact - TechiVP')
    
})

Given("Verify current page URL", function () {
    cy.url().should('contain','https://www.techivp.com/contact')
    });