import express from "express";
import { ApolloServer } from "apollo-server-express";
import { Query, Mutation } from "./schema/resolvers";

const typeDefs = `
type File {
  filename: String!
  mimetype: String!
  encoding: String!
}

type User {
  id: Int
  username: String
  imageuri: String
  image: File
}

type Query {
  getUser: [User]
}

type Mutation {
  createUser(username: String!, image: Upload!): User

  deleteUser: Boolean
}
`;

// The resolvers
const resolvers = {
  Query: Query,
  Mutation: Mutation,
};

// Put together a schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();
const route = "graphql";

server.applyMiddleware({ app, route });

// Start the server
app.listen(3000, () => {
  console.log("Go to http://localhost:3000/graphql to run queries!");
});
