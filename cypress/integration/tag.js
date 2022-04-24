describe('Tag', () => {
    it('creates for category', () => {
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/')
        cy.get('[data-cy=edit_mode]').click()
        cy.wait(1000)
        // create tag
        cy.get('[data-cy=add_tag_text]').first().type('test')
        cy.get('[data-cy=add_tag_button]').first().click()
        cy.wait(1000)
        cy.get('[data-cy=category]:first-child [data-cy=add_category_tag]').last().find('div input').should('have.value', 'test')
    })
    it('deletes for category', () => {
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/')
        cy.get('[data-cy=edit_mode]').click()
        cy.wait(1000)
        cy.get('[data-cy=category]:first-child ul [data-cy=add_category_tag]').last().find('div input').should('have.value', 'test')
        cy.get('[data-cy=category]:first-child ul [data-cy=add_category_tag]').last().find('div [data-cy=delete_tag_button]').click()
        cy.get('[data-cy=confirm_delete_tag]').click()
        cy.wait(1000)
        cy.get('[data-cy=category]:first-child ul [data-cy=add_category_tag]').last().find('div input').should('not.have.value', 'test')
    })
    it('adds tag to message', () => {
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/')
        cy.get('[data-cy=tag]').first().click()
        cy.wait(2000)
        cy.get('[data-cy=message]').last().find('[data-cy=tags] [data-cy=add_tag_to_message]').click()
        cy.wait(1000)
        cy.get('[data-cy=tag]').eq(1).click()
        cy.get('[data-cy=message]').last().find('[data-cy=tags] [data-cy=message_tag]').last().should('have.text', 'CIO')
    })
    it('delete tag to message', () => {
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/')
        cy.get('[data-cy=tag]').first().click()
        cy.wait(2000)
        cy.get('[data-cy=message]').last().find('[data-cy=tags] [data-cy=message_tag]').last().should('have.text', 'CIO')
        cy.get('[data-cy=message]').last().dblclick()
        cy.wait(2000)
        cy.get('[data-cy=message]').last().find('[data-cy=tags] [data-cy=message_tag]').last().find('[data-cy=remove_tag_from_message]').click()
        cy.wait(1000)
        cy.get('[data-cy=message]').last().find('[data-cy=tags] [data-cy=message_tag]').last().should('not.have.text', 'CIO')

    })
})