const express = require('express')
const cors = require('cors')
const { postgraphile } = require("postgraphile");
const cookie = require('cookie');
const PgManyToManyPlugin = require("@graphile-contrib/pg-many-to-many");
const PostGraphileNestedMutations = require('postgraphile-plugin-nested-mutations');

const app = express()
app.use(cors({ credentials: true, origin: process.env.CORS }))
app.use(
    postgraphile(
        process.env.DATABASE_URL,
        "public",
        {
            classicIds: true,
            disableDefaultMutations: true,
            appendPlugins: [PgManyToManyPlugin, PostGraphileNestedMutations],
            pgSettings: (req) => {
                if (req.headers.cookie) {
                    const cookies = cookie.parse(req.headers.cookie);
                    return {
                        'user.id': cookies[process.env.COOKIE_NAME]
                    }
                }
                return;
            },
        }
    )
);

app.listen(process.env.PORT || 3000);