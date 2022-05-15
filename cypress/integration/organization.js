describe('Organization', () => {
    it('adds users', () => {
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/')
        cy.get('[data-cy=org_mode]').click()
        cy.wait(3000)
        cy.get('[data-cy=email]').type('cytest')
        cy.get('[data-cy=add]').click()
        cy.wait(2000)
        cy.get('[data-cy=invite_email]').last().contains('cytest')
    })
})