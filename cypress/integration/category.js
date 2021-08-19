import { login } from './login'
describe('Category', () => {
    beforeEach(() => {
        cy.log(`Visiting http://localhost:3000`)
        cy.visit('/api/auth/signin')
        login();
    })
    it('creates', () => {
        cy.visit('/')
        cy.get('[data-cy=category]').should('have.length', 0)
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.get('[data-cy=edit_mode]').click()
        cy.get('[data-cy=add_category_name]').type('cy test')
        cy.get('[data-cy=add_category_button]').click()
        cy.get('[data-cy=category]').should('have.length', 1)
        cy.get('[data-cy=category]:first-child [data-cy=trash]').click()
        cy.get('[data-cy=alert_confirm').click()
        cy.get('[data-cy=category]').should('have.length', 0)
    })

    it('deletes', () => {
        cy.visit('/')
        cy.get('[data-cy=category]').should('have.length', 0)
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.get('[data-cy=edit_mode]').click()
        cy.get('[data-cy=add_category_name]').type('cy test')
        cy.get('[data-cy=add_category_button]').click()
        cy.get('[data-cy=category]').should('have.length', 1)
        cy.get('[data-cy=category]:first-child [data-cy=trash]').click()
        cy.get('[data-cy=alert_confirm').click()
        cy.get('[data-cy=category]').should('have.length', 0)
    })

})