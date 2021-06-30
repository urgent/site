import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Providers.Email({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
        }),
        // ...add more providers here
    ],
    database: process.env.DATABASE_URL,
    events: {
        async createUser(message) {
            // is email provider?

            // look up invite by email, to get organization id
            console.log(message);

            // add user to organization
        },
    }
})