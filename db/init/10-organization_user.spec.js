import { Pool } from 'pg';

const test_username = 'stripe_unit_test'

describe('organizaton menu', () => {
    let pool;
    beforeAll(async () => {
        pool = new Pool();
    });
    afterAll(async () => {
        await pool.end();
    })

    test('organization menu returns multiple users', async () => {
        await pool.query(`SELECT set_config('user.id', $1, false)`, ['6c7b3cda-3908-4153-812c-4cb1f6f25b32']);
        const organizationRes = await pool.query(`SELECT user_id FROM organization_user WHERE organization_id=$1`, [1]);
        expect(organizationRes.rows.length).toBeGreaterThan(3)
    })
})