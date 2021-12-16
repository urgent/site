BEGIN;

CREATE TABLE stripe (
    id SERIAL PRIMARY KEY,
    created_at timestamptz NOT NULL DEFAULT now(),
    stripe_transaction_date timestamptz NOT NULL,
    amount MONEY NOT NULL,
    quantity INTEGER NOT NULL,
    email TEXT NOT NULL
);

COMMIT