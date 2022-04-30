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
        await pool.query(`SELECT set_config('user.id', $1, false)`, ['3c38b7f1-bafc-4acc-a505-16866690ab87']);
        const organizationRes = await pool.query(`SELECT user_id FROM organization_user WHERE organization_id=$1`, [1]);
        expect(organizationRes.rows.length).toBeGreaterThan(3)
    })
})