import NextAuth from 'next-auth'
import EmailProvider from "next-auth/providers/email"
import OktaProvider from "next-auth/providers/okta"
import { createUser } from './createUser';
import { signIn } from './signIn';
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter"

export default NextAuth({
    secret: process.env.NEXT_AUTH_SECRET,
    // Configure one or more authentication providers
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
        }),
        OktaProvider({
            clientId: process.env.OKTA_CLIENT_ID,
            clientSecret: process.env.OKTA_CLIENT_SECRET,
            issuer: process.env.OKTA_ISSUER
        })
        // ...add more providers here
    ],
    adapter: TypeORMLegacyAdapter(process.env.DATABASE_URL),
    events: {
        async createUser(message) {
            return createUser(message);
        },
        async signIn(message) {
            return signIn(message);
        }
    }
})