const { gql } = require("apollo-server-lambda");

module.exports = gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    allTodos: [Todo]
  }
`;
