describe('Login page', () => {
    it('requires login', () => {
        cy.visit('/')
        // 1, for editor
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 1)
        cy.get('[data-cy=editor] .quill').type('Hello, World')
        cy.get('[data-cy=save]').click()
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 1)
    })
    it('creates message', () => {
        cy.visit('/')
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 1)
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.get('[data-cy=editor] .quill').type('Hello, World')
        cy.get('[data-cy=save]').click()
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 2)
    })

    it('deletes message', () => {
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