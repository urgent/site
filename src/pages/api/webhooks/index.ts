import Cors from 'micro-cors';
import Stripe from 'stripe'
import { buffer } from 'micro'
import { Pool } from 'pg';
import { invite } from '../invite';

export async function pay(intent) {
    let pool;
    try {
        pool = new Pool({
            user: process.env.POSTGRES_USER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.POSTGRES_PASSWORD,
            port: 5432,
        });
    } catch (e) {
        console.log(e)
    }
    const { created, data } = intent;
    const { amount_total, metadata, customer_email } = data;
    let { seats=0, user_id=0 } = { ...metadata };
    
    if(user_id === 0) return;

    let res;
    if(user_id==='new') {
        try {
            res = await invite({email:customer_email, slug:'test'});
        } catch (e) {
            console.log(e);
        }
    user_id=null;
    }

    try {
        await pool.query(`INSERT INTO stripe(stripe_transaction_date, amount, quantity, email, user_id) VALUES(to_timestamp($1), $2, $3, $4, $5)`, [
            created,
            amount_total,
            seats,
            customer_email,
            user_id,
        ]);
    } catch (e) {
        console.log(e);
    }
    pool.end();
}

const stripe = new (Stripe as any)(process.env.STRIPE_SECRET_KEY);

const cors = Cors({
    allowMethods: ['POST', 'HEAD'],
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Stripe requires the raw body to construct the event.
export const config = {
    api: {
        bodyParser: false,
    },
}



const webhookHandler = async (req, res) => {
    if (req.method === 'POST') {
        const buf = await buffer(req)
        const sig = req.headers['stripe-signature'];
        let event;

        try {
            event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
        } catch (err) {
            // On error, log and return the error message
            console.log(`❌ Error message: ${err.message}`);
            res.status(400).send(`Webhook Error: ${err.message}`);
            return
        }

        // Successfully constructed event
        res.status(200).send('ack')

        console.log('✅ Success:', event.id)
    } else {
        res.status(400).send('Restricted')
    }
}
export default cors(webhookHandler);