const { ApolloServer, gql } = require("apollo-server");


//Schema
const typeDefs = gql`
  type Projeto {
    titulo: String
    tecnologia: String
  }

  type Query {
    obterClientes: [Projeto]
  }
`;
const Projetos = [
  {
    titulo: "Curso de Nextjs",
    tecnologia: "Nextjs",
  },
  {
    titulo: "Curso de javascript",
    tecnologia: "javascript",
  },
  {
    titulo: "Curso de Typescript",
    tecnologia: "Typescript",
  },
];
//Resolver
const resolvers = {
  Query: {
    obterClientes: () => Projetos
  },
};

//server
const server = new ApolloServer({typeDefs, resolvers});

//iniciar servidor
server.listen().then(({ url }) => {
  console.log(`iniciando ${url}`);
});
