import Cors from 'micro-cors';
import Stripe from 'stripe'
import { buffer } from 'micro'
import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: 'localhost',
    database: 'smooms',
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
});

export async function pay(intent) {
    await pool.query(`INSERT INTO stripe(stripe_transaction_date, amount, quantity, email, user_id) VALUES(to_timestamp($1), $2, $3, $4, $5)`, [
        intent.created,
        intent.data.amount_total,
        intent.data.metadata.seats,
        intent.data.customer_email,
        intent.data.metadata.user_id,
    ]);
    pool.end();
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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

        // create user id from nextauth

        // Successfully constructed event
        res.status(200).send('ack')
        pay(event)
        console.log('✅ Success:', event.id)
    } else {
        res.status(400).send('Restricted')
    }
}
export default cors(webhookHandler);