const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');
const { readFileSync } = require('fs');

 const superGraphSchema=readFileSync('./supergraph.graphql').toString();

const gateway = new ApolloGateway({

    supergraphSdl: superGraphSchema,
    //serviceList: [
     //   { name: 'shows', url: 'http://localhost:8081/graphql' },
      //  { name: 'reviews', url: 'http://localhost:8082/graphql' },
   // ]
});

const server = new ApolloServer({
    
    gateway,
   // playground: process.env.NODE_ENV !== 'production',
    subscriptions: false,
});


server.listen();

console.log(`🚀 Apollo Gateway now ready at http://localhost:4000/graphql`);