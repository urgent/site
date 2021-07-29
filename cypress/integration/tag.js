describe('Tag', () => {
    it('requires login', () => {
        cy.visit('/')
        cy.get('[data-cy=category]').should('have.length', 0)
        cy.get('[data-cy=edit_mode]').click()
        cy.get('[data-cy=add_category_name]').type('cy test')
        cy.get('[data-cy=add_category_button]').click()
        cy.get('[data-cy=category]').should('have.length', 0)
    })
    it('creates', () => {
        cy.visit('/')
        // create category
        cy.get('[data-cy=category]').should('have.length', 0)
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.get('[data-cy=edit_mode]').click()
        cy.get('[data-cy=add_category_name]').type('cy test')
        cy.get('[data-cy=add_category_button]').click()
        cy.get('[data-cy=category]').should('have.length', 1)
        // create tag
        cy.get('[data-cy=add_tag_text]').type('test')
        cy.get('[data-cy=add_tag_button]').click()
        cy.get('[data-cy=category]:first-child [data-cy=tag]').should('have.length', 1)
        // create message
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 1)
        cy.get('[data-cy=editor] .quill').type('Hello, World')
        cy.get('[data-cy=save]').click()
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 2)
        // add tag to message
        cy.get('[data-cy=tiles] [data-cy=message]:first-child [data-cy=message_tag]').should('have.length', 0)
        cy.get('[data-cy=tiles] [data-cy=message]:first-child [data-cy=add_tag_to_message]').click()
        cy.get('[data-cy=category]:first-child [data-cy=tag]').click()
        cy.get('[data-cy=tiles] [data-cy=message]:first-child [data-cy=message_tag]').should('have.length', 1)
    })

    it('deletes', () => {
        cy.visit('/')
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 1)
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.get('[data-cy=editor] .quill').type('Hello, World')
        cy.get('[data-cy=save]').click()
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 2)
        cy.get('[data-cy=edit_mode]').click()
        cy.get('[data-cy=tiles] [data-cy=message]:first-child [data-cy=trash]').click();
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 1)
    })

})