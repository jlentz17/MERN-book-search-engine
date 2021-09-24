// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create typedefs
const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }

  type Book {
    _id: ID  
    authors: String
    description: String
    image: String
    link: String
    title: String
  }

  type Query {
    users: [User]
    user(username:String!): User  
    books(username: String): [Book]
  }
`;

// export typeDefs
module.exports = typeDefs;
