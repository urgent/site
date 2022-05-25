import { signIn } from './signIn';
import checkoutSession from '../webhooks/checkout-session';
import { pay, decode } from '../webhooks/index';
import { Pool } from 'pg';

describe('webhook', () => {
    let admin;
    let pool;

    beforeAll(async (done) => {
        pool = new Pool();
        admin = await new Pool({
            user: process.env.POSTGRES_USER,
            host: 'localhost',
            database: 'smooms',
            password: process.env.POSTGRES_PASSWORD,
            port: 5432,
        });
        // other tests add stripe records for new users
        await admin.query("DELETE FROM stripe WHERE user_id IS NULL");
        done();
    });
    afterAll(async (done) => {
        await admin.query("DELETE FROM stripe WHERE user_id IS NULL");
        await admin.end();
        await pool.end();
        done();
    })


    test('next-auth new user hook picks up on stripe payments', async (done) => {
        jest.setTimeout(300000);
        const nullUserRes = await admin.query("SELECT * FROM stripe WHERE user_id IS NULL");
        expect(nullUserRes.rows.length).toBe(0);
        checkoutSession.data.metadata.user_id = null;
        checkoutSession.data.customer_email = 'teststripe@test.com';
        const decoded = decode(checkoutSession);
        await pay(decoded);
        const afterPayRes = await admin.query("SELECT * FROM stripe WHERE user_id IS NULL");
        expect(afterPayRes.rows.length).toBe(1);
        await signIn({ user: { id: 9 }, account: { providerAccountId: 'teststripe@test.com' } });
        const signInRes = await admin.query("SELECT * FROM stripe WHERE user_id IS NULL");
        expect(signInRes.rows.length).toBe(0);
        done();
    })
})
