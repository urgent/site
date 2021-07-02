import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { Pool } from 'pg';
import crypto from "crypto";


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
            const pool = new Pool()
            // is email auth provider?
            if (message.email) {
                // look up invite by email to get organization id
                await pool.query(`SELECT set_config('user.id', 'server', false)`);
                const organizationRes = await pool.query(`SELECT organization_id FROM invite WHERE email=$1`, [message.email]);
                // has invite?
                if (organizationRes.rows.length > 0) {
                    // User has invite from invite signup page. Add user to invite organization
                    await pool.query(`INSERT INTO organization_user(organization_id, user_id) VALUES($1,$2)`, [organizationRes.rows[0]['organization_id'], message.id])
                }

            }
            // create organization for user
            var slug = crypto.randomBytes(20).toString('hex');
            await pool.query(`SELECT create_organization($1,$2)`, [message.id, slug])
            await pool.end()
        },
    }
})