import { Pool } from 'pg';

export default async (req, res) => {
    const {
        query: { email, slug },
        method,
    } = req
    // add to invitation table
    const pool = new Pool()
    const dbRes = await pool.query(`SELECT slug FROM organization WHERE slug=$1`, [req.id])
    await pool.end()
    // create next-auth user via email provider
    res.status(200).json({ email, slug })
}