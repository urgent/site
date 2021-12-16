import { Pool } from 'pg';

describe('db smoke test', () => {
    let pool;
    beforeAll(() => {
        pool = new Pool()
    });
    afterAll(async () => {
        await pool.end();
    })

    test('one user', async () => {
        const organizationRes = await pool.query(`SELECT id FROM users`);
        expect(organizationRes.rows.length).toBeGreaterThan(1)
    })

    test('20 messages', async () => {
        const organizationRes = await pool.query(`SELECT id FROM message`);
        expect(organizationRes.rows.length).toBeGreaterThan(20)
    })
})