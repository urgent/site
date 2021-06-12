const { makeExtendSchemaPlugin, gql } = require("graphile-utils");


module.exports = makeExtendSchemaPlugin(build => {

  const { pgSql: sql, inflection } = build;


  return {
    typeDefs: gql`
      extend type Query {
        userId: Int
      }
    `,
    resolvers: {
      Query: {
        async userId() {
          const { rows } = await context.pgClient.query(
            `current_setting('user.id', true)`, // e.g. "select * from users where id = $1"
          );
          console.log(rows)
          return // current_setting('user.id', true)
        },
      },
    },
  }
});