import { Pool } from 'pg';

export default async (req, res) => {
    const {
        query: { email, slug },
        method,
    } = req
    // add to invitation table
    const pool = new Pool()
    await pool.query(`SELECT set_config('user.id', 'server', false)`);
    const dbRes = await pool.query(`INSERT INTO invite(organization_id, email) SELECT organization.id, $1 FROM organization WHERE slug=$2`, [email, slug])
    await pool.end()
    // create next-auth user via email provider


    res.status(200).json({ email, slug })
}