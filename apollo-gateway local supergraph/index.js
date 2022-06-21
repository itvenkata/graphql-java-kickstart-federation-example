
const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');
require('dotenv').config()

const gateway = new ApolloGateway();

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen();

console.log(`🚀 Apollo Gateway now ready at http://localhost:4000/graphql`);