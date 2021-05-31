const express = require('express')
const cors = require('cors')
const { postgraphile } = require("postgraphile");

const app = express()
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

app.use(
    postgraphile(
        process.env.DATABASE_URL,
        "public",
        {
            watchPg: true,
            graphiql: true,
            enhanceGraphiql: true,
            classicIds: true,
        }
    )
);

app.listen(process.env.PORT || 3000);