

import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

console.log("Hello World!")

const app = express();
app.use(cors());
const schema = gql`
  type Query {
    me: User
  }
  type User {
    username: String!
  }
`;
const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'Robin Wieruch',
      };
    },
  },
};
const data = {
    me:{
        username: 'Robin Wieruch'
    }
};
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});
server.applyMiddleware({ app, path: '/graphql' });
app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});