import { Pool } from 'pg';

export async function signIn(message) {
    const pool = new Pool()
    await pool.query(`SELECT set_config('user.id', 'server', false)`);
    // for invites to an already existing user
    // is email auth provider?
    if (message.user.email) {
        // look up any invites missing org permissions
        const organizationRes = await pool.query(`INSERT INTO organization_user(organization_id, user_id) SELECT organization_id, u.id
        FROM  invite i LEFT JOIN users u ON u.email = i.email
        WHERE  NOT EXISTS (
            SELECT organization_id
            FROM organization_user
            WHERE  user_id = u.id AND organization_id = i.organization_id
            ) AND i.email=$1 RETURNING *`, [message.user.email]);
        if (organizationRes.rows.length > 0) {
            // Set new organization as default, to show user invite has occurred
            await pool.query(`DELETE FROM user_config WHERE user_id=$1`, [organizationRes.rows[0]['user_id']])
            await pool.query(`INSERT INTO public.user_config(default_organization, user_id) VALUES($1,$2)`, [organizationRes.rows[0]['organization_id'], organizationRes.rows[0]['user_id']]);
        }
        // clear out invite, all added
        await pool.query(`DELETE FROM invite WHERE email=$1`, [message.user.email])
        // search for any stripe transactions by email, and assign them
        // next-auth creates user id on first login
        // need stripe rls
        const stripe = await pool.query(`SELECT * FROM stripe WHERE email = $1`, [message.user.email]);
        if (stripe.rows.length > 0) {
            await pool.query(`UPDATE stripe SET user_id = $1 WHERE email = $2`, [message.user.id, message.user.email])
        }
    }
    pool.end();
}
