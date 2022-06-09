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
        await pool.query(`SELECT set_config('user.id', $1, false)`, ['0c43c253-287a-466c-94f8-016e9d4a217b']);
        const organizationRes = await pool.query(`SELECT user_id FROM organization_user WHERE organization_id=$1`, [1]);
        expect(organizationRes.rows.length).toBeGreaterThan(3)
    })
})