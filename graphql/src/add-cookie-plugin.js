const { makeExtendSchemaPlugin, gql } = require("graphile-utils");


module.exports = makeExtendSchemaPlugin(build => {

  const { pgSql: sql, inflection } = build;


  return {
    typeDefs: gql`
      
      type CreateMessageInput {
        Content: String
      }

      type CreateMessagePayload {
        userId: Int
      }
    


      extend type Mutation {
        createMessage(input: CreateMessageInput):CreateMessagePayload
      }
    `,
    resolvers: {
      Mutation: {
        createMessage: {
          userId: async (parentObject, args, context, info) => {
            const { rows } = await context.pgClient.query(
              `current_setting('user.id', true)`, // e.g. "select * from users where id = $1"
            );
            console.log(rows)
            return 2;
            // current_setting('user.id', true)
          },
        },
      },
    }
  }
});