const express = require('express')
const cors = require('cors')
const { postgraphile } = require("postgraphile");

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
        }
    )
);

app.get('/graphql', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    return res;
})

app.listen(process.env.PORT || 3000);