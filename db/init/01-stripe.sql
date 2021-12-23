BEGIN;

-- foreign key for user id, need constraints
CREATE TABLE stripe (
    id SERIAL PRIMARY KEY,
    created_at timestamptz NOT NULL DEFAULT now(),
    stripe_transaction_date timestamptz NOT NULL,
    amount MONEY NOT NULL,
    quantity INTEGER NOT NULL,
    email TEXT NOT NULL
    user_id INTEGER NOT NULL
);

--- no payments today - 1 month, inactivate

--- On insert of org user, sum of existing users + 1 for the org owner must be less than last payment quantity <-- RLS Policy


COMMIT