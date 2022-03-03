describe('Category', () => {
    it('creates', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.get('[data-cy=category]').should('have.length', 0)
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/')
        cy.get('[data-cy=edit_mode]').click()
        cy.get('[data-cy=create_category]').click()
        cy.wait(4000)
        cy.get('[data-cy=editor] .ProseMirror').click()
        cy.get('[data-cy=editor] .ProseMirror').type('cy test')
        cy.wait(4000)
        cy.get('[data-cy=save]').click()
        cy.wait(2000)
        cy.url().should('contain', '/edit')
        cy.visit('/')
        cy.get('[data-cy=category]').first().contains('cy test')

    })

    /*it('deletes', () => {
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
    })*/

})