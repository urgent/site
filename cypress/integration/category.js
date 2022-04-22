describe('Category', () => {
    it('creates', () => {
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/')
        cy.get('[data-cy=edit_mode]').click()
        cy.wait(3000)
        cy.get('[data-cy=add_category_name]').type('cy test')

        cy.get('[data-cy=add_category_button]'
        ).click()
        cy.wait(2000)
        cy.visit('/')
        cy.get('[data-cy=category]').first().contains('cy test')
    })
    it('deletes', () => {
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/')
        cy.get('[data-cy=edit_mode]').click()
        cy.wait(3000)
        cy.get('[data-cy=category]').first().contains('cy test')
        cy.get('[data-cy=delete_category]').first().click()
        cy.wait(1000)
        cy.get('[data-cy=confirm_delete_category]').click()
        cy.wait(1000)
        cy.visit('/')
        cy.wait(2000)
        cy.get('[data-cy=category]').first().should('not.contain', 'cy test')
    })
})