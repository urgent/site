describe('Tag', () => {
    it('creates for category', () => {
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/')
        cy.get('[data-cy=edit_mode]').click()
        // create tag
        cy.get('[data-cy=add_tag_text]').first().type('test')
        cy.get('[data-cy=add_tag_button]').first().click()
        cy.get('[data-cy=category]:first-child [data-cy=add_category_tag]').last().should('have.value', 'test')
    })
    it('deletes for category', () => {
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/')
        cy.get('[data-cy=edit_mode]').click()
        // create tag
        cy.get('[data-cy=add_tag_text]').type('test')
        cy.get('[data-cy=add_tag_button]').click()
        cy.get('[data-cy=category]:first-child [data-cy=tag]:last-child').contains('test')
        cy.get('[data-cy=category]:first-child [data-cy=tag]:last-child [data-cy=delete_tag]').click()
    })
})