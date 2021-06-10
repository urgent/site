const express = require('express')
const cors = require('cors')
const { postgraphile } = require("postgraphile");
const cookie = require('cookie');

const app = express()
app.use(cors({ credentials: true, origin: process.env.CORS }))
app.use(
    postgraphile(
        process.env.DATABASE_URL,
        "public",
        {
            watchPg: true,
            graphiql: true,
            enhanceGraphiql: true,
            classicIds: true,
            pgSettings: (req) => {
                if (req.headers.cookie) {
                    const cookies = cookie.parse(req.headers.cookie);
                    return {
                        'user.id': cookies['next-auth.session-token']
                    }
                }
                return;
            }
        }
    )
);

app.listen(process.env.PORT || 3000);