
describe('Message', () => {
    it('creates', () => {
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/');
        cy.get('[data-cy=tag]').first().click()
        cy.wait(3000
        )
        cy.get('[data-cy=editor] .ProseMirror').click()
        cy.get('[data-cy=editor] .ProseMirror').type('Hello, World')
        cy.get('[data-cy=save]').click()
        cy.get('[data-cy=message] .ProseMirror').last().should('have.text', "Hello, World")
    })

    /*it('deletes', () => {
        cy.visit('/')
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 1)
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.get('[data-cy=editor] textarea').type('Hello, World')
        cy.get('[data-cy=save]').click()
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 2)
        cy.get('[data-cy=edit_mode]').click()
        cy.get('[data-cy=tiles] [data-cy=message]:first-child [data-cy=trash]').click();
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 1)
    })*/

})