import { Pool } from 'pg';
import crypto from "crypto";

export async function createUser(message) {
    const pool = new Pool()
    console.log(message);
    // stripe only credentials
    await pool.query(`SELECT set_config('user.id', 'webhook', false)`);
    // add a balance for stripe rls
    // add two in case of invite, one for invite, one for user's org
    await pool.query(`INSERT INTO stripe(stripe_transaction_date, amount, quantity, user_id, email) SELECT NOW() + INTERVAL '1 year', 2, 2, $1, $2` , [message.user.id, message.user.email])
    // non-stripe credentials
    await pool.query(`SELECT set_config('user.id', 'server', false)`);
    // create organization for user
    var slug = crypto.randomBytes(20).toString('hex');
    const res = await pool.query(`INSERT INTO public.organization(user_id, slug) VALUES($1, $2) RETURNING id`, [message.user.id, slug])
    await pool.query(`INSERT INTO public.organization_user (organization_id, user_id) VALUES($1, $2)`, [res.rows[0]['id'], message.user.id])
    // is email auth provider?
    if (message.user.email) {
        // look up invite by email to get organization id
        const organizationRes = await pool.query(`SELECT organization_id FROM invite WHERE email=$1`, [message.user.email]);
        // has invite?
        if (organizationRes.rows.length > 0) {
            // User has invite from invite signup page. Add user to invite organization
            await pool.query(`INSERT INTO organization_user(organization_id, user_id) VALUES($1,$2)`, [organizationRes.rows[0]['organization_id'], message.user.id])
            await pool.query(`DELETE FROM user_config WHERE user_id=$1`, [message.user.id])
            await pool.query(`INSERT INTO public.user_config(default_organization, user_id) VALUES($1,$2)`, [organizationRes.rows[0]['organization_id'], message.user.id]);
        }
    }
    await pool.end()
}
