/// <reference types="cypress"/>
/*global Given, Then, When*/
let usuarioAmazon = Cypress.env('usuario')
let senhaAmazon = Cypress.env('password')

Given('Estou logado no site amazon', () => {
    cy.visit('https://www.amazon.com.br/')
})

And('Clico no efetuar login', () => {
    cy.get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner').click()
})

And('Informo o email', () => {
    cy.get('#ap_email')
        .type(usuarioAmazon)
})

And('Clico no continuar', () => {
    cy.get('.a-button-inner > #continue').click()
})

And('Informo senha', () => {
    cy.get('#ap_password')
        .type(senhaAmazon)
})

And('Efetuo login', () => {
    cy.get('#signInSubmit').click()
})