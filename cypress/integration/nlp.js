describe('Category', () => {
    it('gets', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('SITE_NAME') + '/api/nlp',
            body: {
                text: 'Align helps bay area tech reps stay ahead of the pack when it comes to understanding the tech they sell.'
            }
        })
    })
})