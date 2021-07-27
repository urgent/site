describe('Login page', () => {
    it('requires login', () => {
        cy.visit('/')
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 0)
        cy.get('[data-cy=editor] .quill').type('Hello, World')
        cy.get('[data-cy=save]').click()
        cy.get('[data-cy=tiles] [data-cy=message]').should('have.length', 0)
    })

})