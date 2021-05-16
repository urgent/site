import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import jwt from "jsonwebtoken";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // ...add more providers here
    ],
    // The secret should be set to a reasonably long random string.
    // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
    // a separate secret is defined explicitly for encrypting the JWT.
    secret: process.env.SECRET,

    session: {
        // Use JSON Web Tokens for session instead of database sessions.
        // This option can be used with or without a database for users/accounts.
        // Note: `jwt` is automatically set to `true` if no database is specified.
        jwt: true,

        // Seconds - How long until an idle session expires and is no longer valid.
        // maxAge: 30 * 24 * 60 * 60, // 30 days

        // Seconds - Throttle how frequently to write to database to extend a session.
        // Use it to limit write operations. Set to 0 to always update the database.
        // Note: This option is ignored if using JSON Web Tokens
        // updateAge: 24 * 60 * 60, // 24 hours
    },
    jwt: {
        secret: process.env.SECRET,
        encode: async ({ secret, token, maxAge }) => {
            if (!token.id) {
                return;
            }
            const jwtClaims = {
                "sub": token.id.toString(),
                "name": token.name,
                "email": token.email,
                "iat": Date.now() / 1000,
                "exp": Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                "https://hasura.io/jwt/claims": {
                    "x-hasura-allowed-roles": ["user"],
                    "x-hasura-default-role": "user",
                    "x-hasura-role": "user",
                    "x-hasura-user-id": token.id,
                }
            };
            const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: 'HS256' });
            return encodedToken;
        },
        decode: async ({ secret, token, maxAge }) => {
            const decodedToken = jwt.verify(token, secret, { algorithms: ['HS256'] });
            return decodedToken;
        },
    },
    callbacks: {
        async session(session, token) {
            const encodedToken = jwt.sign(token, process.env.SECRET, { algorithm: 'HS256' });
            session.id = token.id;
            session.token = encodedToken;
            return Promise.resolve(session);
        },
        async jwt(token, user, account, profile, isNewUser) {
            const isUserSignedIn = user ? true : false;
            // make a http call to our graphql api
            // store this in postgres

            if (isUserSignedIn) {
                token.id = user.id.toString();
            }
            return Promise.resolve(token);
        }
    }
})