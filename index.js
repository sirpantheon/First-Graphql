const { ApolloServer } = require("apollo-server");
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')

//server
const server = new ApolloServer({ typeDefs, resolvers });

//iniciar servidor
server.listen().then(({ url }) => {
  console.log(`iniciando ${url}`);
});
