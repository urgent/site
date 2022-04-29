describe('Category', () => {
    it('gets', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('SITE_NAME') + '/api/nlp',
            body: JSON.stringify({
                text: 'Align helps bay area tech reps stay ahead of the pack when it comes to understanding the tech they sell.'
            })
        })
    })

    it('generates predictive text', () => {
        cy.setCookie(Cypress.env('COOKIE_NAME'), Cypress.env('SESSION_TOKEN'));
        cy.visit('/')
        cy.get('[data-cy=tag]').first().click()
        cy.wait(3000)
        cy.get('[data-cy=editor] .ProseMirror').first().dblclick()
        cy.wait(1000)
        cy.get('[data-cy=editor] .ProseMirror').type('cy test')
        cy.wait(10000)
        cy.get('[data-cy=editor] .ProseMirror').invoke('text').then((text) => {
            expect(text.length).to.be.at.least(0)
        })
    })
})