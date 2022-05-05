import checkoutSession from './checkout-session'
import { decode, handle } from './index'
import { Pool } from 'pg';


describe('webhook', () => {
    let pool;
    beforeAll(async () => {
        pool = new Pool({
            user: process.env.POSTGRES_USER,
            host: 'localhost',
            database: 'smooms',
            password: process.env.POSTGRES_PASSWORD,
            port: 5432,
        });
    });
    afterAll(async (done) => {
        await pool.end();
        done();
    })

    test('decode works', () => {
        const res = decode(checkoutSession);
        expect(res.amount_total).toBeGreaterThan(0);
        expect(res.seats).toBeGreaterThan(0);
    })

    test('insert database records with payment intent event', async (done) => {
        jest.setTimeout(30000);
        // simulate user creation:
        checkoutSession.data.metadata.user_id = 1;
        // not in db
        await pool.query(`DELETE FROM stripe WHERE email=$1`, [checkoutSession.data.customer_email]);
        const emptyRes = await pool.query(`SELECT * FROM stripe WHERE email=$1`, [checkoutSession.data.customer_email]);
        expect(emptyRes.rows.length).toEqual(0);
        await handle(checkoutSession);
        const payRes = await pool.query(`SELECT * FROM stripe WHERE email=$1`, [checkoutSession.data.customer_email]);
        expect(new Date(payRes.rows[0].stripe_transaction_date)).toEqual(new Date(checkoutSession.created * 1000));
        expect(payRes.rows[0].amount).toEqual(new Intl.NumberFormat(`en-US`, {
            currency: `USD`,
            style: 'currency',
        }).format(checkoutSession.data.amount_total));
        expect(payRes.rows[0].quantity).toEqual(checkoutSession.data.metadata.seats);
        expect(payRes.rows[0].user_id).toEqual(checkoutSession.data.metadata.user_id);
        await pool.query(`DELETE FROM stripe WHERE email=$1`, [checkoutSession.data.customer_email]);
        done();
    })

    test('create new user with payment intent event', async (done) => {
        jest.setTimeout(30000);
        // simulate user creation:
        checkoutSession.data.metadata.user_id = 'new';
        // delete test user
        await pool.query(`DELETE FROM verification_tokens WHERE identifier=$1`, [checkoutSession.data.customer_email]);
        //pay
        await handle(checkoutSession);
        //check test user
        const userRes = await pool.query(`SELECT * FROM verification_tokens WHERE identifier=$1`, [checkoutSession.data.customer_email]);
        expect(userRes.rows.length).toBeGreaterThan(0);
        await pool.query(`DELETE FROM stripe WHERE email=$1`, [checkoutSession.data.customer_email]);
        done();
    })
});