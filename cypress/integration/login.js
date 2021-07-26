describe('Login page', () => {
    before(() => {
        cy.log(`Visiting http://localhost:3000`)
        cy.visit('/api/auth/signin')
    })
    it('Login with Github', () => {
        const username = Cypress.env('GITHUB_USER')
        const password = Cypress.env('GITHUB_PW')
        const loginUrl = Cypress.env('SITE_NAME') + '/api/auth/signin'
        const cookieName = Cypress.env('COOKIE_NAME')
        const socialLoginOptions = {
            username,
            password,
            loginUrl,
            headless: true,
            logs: false,
            isPopup: true,
            loginSelector: 'button',
            postLoginSelector: '[data-cy="signout"]',
        }

        return cy
            .task('GitHubSocialLogin', socialLoginOptions)
            .then(({ cookies }) => {
                cy.clearCookies()

                const cookie = cookies
                    .filter(cookie => cookie.name === cookieName)
                    .pop()
                if (cookie) {
                    cy.setCookie(cookie.name, cookie.value, {
                        domain: cookie.domain,
                        expiry: cookie.expires,
                        httpOnly: cookie.httpOnly,
                        path: cookie.path,
                        secure: cookie.secure,
                    })

                    Cypress.Cookies.defaults({
                        preserve: cookieName,
                    })

                    // remove the two lines below if you need to stay logged in
                    // for your remaining tests
                    cy.visit('/api/auth/signout')
                    cy.get('form').submit()
                }
            })
    })
})