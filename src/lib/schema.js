import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `
schema {
    query: query_root
    mutation: mutation_root
    subscription: subscription_root
  }
  
  # columns and relationships of "messages"
  type messages implements Node {
    id: ID!
    message: String!
    next_auth_token: String!
  }
  
  # Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'.
  input messages_bool_exp {
    _and: [messages_bool_exp!]
    _not: messages_bool_exp
    _or: [messages_bool_exp!]
    id: uuid_comparison_exp
    message: String_comparison_exp
    next_auth_token: String_comparison_exp
  }
  
  # unique or primary key constraints on table "messages"
  enum messages_constraint {
    # unique or primary key constraint
    messages_pkey
  }
  
  # input type for inserting data into table "messages"
  input messages_insert_input {
    id: uuid
    message: String
    next_auth_token: String
  }
  
  # response of any mutation on the table "messages"
  type messages_mutation_response {
    # number of rows affected by the mutation
    affected_rows: Int!
  
    # data from the rows affected by the mutation
    returning: [messages!]!
  }
  
  # on conflict condition type for table "messages"
  input messages_on_conflict {
    constraint: messages_constraint!
    update_columns: [messages_update_column!]! = []
    where: messages_bool_exp
  }
  
  # Ordering options when selecting data from "messages".
  input messages_order_by {
    id: order_by
    message: order_by
    next_auth_token: order_by
  }
  
  # primary key columns input for table: messages
  input messages_pk_columns_input {
    id: uuid!
  }
  
  # select columns of table "messages"
  enum messages_select_column {
    # column name
    id
  
    # column name
    message
  
    # column name
    next_auth_token
  }
  
  # input type for updating data in table "messages"
  input messages_set_input {
    id: uuid
    message: String
    next_auth_token: String
  }
  
  # update columns of table "messages"
  enum messages_update_column {
    # column name
    id
  
    # column name
    message
  
    # column name
    next_auth_token
  }
  
  # A Relay connection object on "messages"
  type messagesConnection {
    edges: [messagesEdge!]!
    pageInfo: PageInfo!
  }
  
  type messagesEdge {
    cursor: String!
    node: messages!
  }
  
  # mutation root
  type mutation_root {
    # delete data from the table: "messages"
    delete_messages(
      # filter the rows which have to be deleted
      where: messages_bool_exp!
    ): messages_mutation_response
  
    # delete single row from the table: "messages"
    delete_messages_by_pk(id: uuid!): messages
  
    # insert data into the table: "messages"
    insert_messages(
      # the rows to be inserted
      objects: [messages_insert_input!]!
  
      # on conflict condition
      on_conflict: messages_on_conflict
    ): messages_mutation_response
  
    # insert a single row into the table: "messages"
    insert_messages_one(
      # the row to be inserted
      object: messages_insert_input!
  
      # on conflict condition
      on_conflict: messages_on_conflict
    ): messages
  
    # update data of the table: "messages"
    update_messages(
      # sets the columns of the filtered rows to the given values
      _set: messages_set_input
  
      # filter the rows which have to be updated
      where: messages_bool_exp!
    ): messages_mutation_response
  
    # update single row of the table: "messages"
    update_messages_by_pk(
      # sets the columns of the filtered rows to the given values
      _set: messages_set_input
      pk_columns: messages_pk_columns_input!
    ): messages
  }
  
  # An object with globally unique ID
  interface Node {
    # A globally unique identifier
    id: ID!
  }
  
  # column ordering options
  enum order_by {
    # in ascending order, nulls last
    asc
  
    # in ascending order, nulls first
    asc_nulls_first
  
    # in ascending order, nulls last
    asc_nulls_last
  
    # in descending order, nulls first
    desc
  
    # in descending order, nulls first
    desc_nulls_first
  
    # in descending order, nulls last
    desc_nulls_last
  }
  
  type PageInfo {
    endCursor: String!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String!
  }
  
  type query_root {
    # fetch data from the table: "messages"
    messages_connection(
      after: String
      before: String
  
      # distinct select on columns
      distinct_on: [messages_select_column!]
      first: Int
      last: Int
  
      # sort the rows by one or more columns
      order_by: [messages_order_by!]
  
      # filter the rows returned
      where: messages_bool_exp
    ): messagesConnection!
    node(
      # A globally unique id
      id: ID!
    ): Node
  }
  
  # Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'.
  input String_comparison_exp {
    _eq: String
    _gt: String
    _gte: String
  
    # does the column match the given case-insensitive pattern
    _ilike: String
    _in: [String!]
  
    # does the column match the given POSIX regular expression, case insensitive
    _iregex: String
    _is_null: Boolean
  
    # does the column match the given pattern
    _like: String
    _lt: String
    _lte: String
    _neq: String
  
    # does the column NOT match the given case-insensitive pattern
    _nilike: String
    _nin: [String!]
  
    # does the column NOT match the given POSIX regular expression, case insensitive
    _niregex: String
  
    # does the column NOT match the given pattern
    _nlike: String
  
    # does the column NOT match the given POSIX regular expression, case sensitive
    _nregex: String
  
    # does the column NOT match the given SQL regular expression
    _nsimilar: String
  
    # does the column match the given POSIX regular expression, case sensitive
    _regex: String
  
    # does the column match the given SQL regular expression
    _similar: String
  }
  
  type subscription_root {
    # fetch data from the table: "messages"
    messages_connection(
      after: String
      before: String
  
      # distinct select on columns
      distinct_on: [messages_select_column!]
      first: Int
      last: Int
  
      # sort the rows by one or more columns
      order_by: [messages_order_by!]
  
      # filter the rows returned
      where: messages_bool_exp
    ): messagesConnection!
    node(
      # A globally unique id
      id: ID!
    ): Node
  }
  
  scalar uuid
  
  # Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'.
  input uuid_comparison_exp {
    _eq: uuid
    _gt: uuid
    _gte: uuid
    _in: [uuid!]
    _is_null: Boolean
    _lt: uuid
    _lte: uuid
    _neq: uuid
    _nin: [uuid!]
  }
`;

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});