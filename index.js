const { ApolloServer } = require("apollo-server");
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')

const conectDB = require('./config/db')

//conecta a base de dados
conectDB();

//server
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
});

//iniciar servidor
server.listen().then(({ url }) => {
  console.log(`iniciando ${url}`);
});
