
describe('Message', () => {
    it('creates', () => {
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/');
        cy.get('[data-cy=tag]').first().click()
        cy.wait(2000)
        cy.get('[data-cy=editor] .ProseMirror').click()
        cy.get('[data-cy=editor] .ProseMirror').type('Hello, World')
        cy.get('[data-cy=save]').click()
        cy.wait(1000)
        cy.get('[data-cy=message] .ProseMirror').last().should('have.text', "Hello, World")
    })

    it('deletes', () => {
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/');
        cy.get('[data-cy=tag]').first().click()
        cy.wait(2000)
        cy.get('[data-cy=message] .ProseMirror').last().should('have.text', "Hello, World")
        cy.get('[data-cy=message] .ProseMirror').last().dblclick()
        cy.get('[data-cy=delete_message]').click()
        cy.wait(1000)
        cy.get('[data-cy=message] .ProseMirror').last().should('not.have.text', "Hello, World")
    })
})