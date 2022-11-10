const { gql } = require("apollo-server");
//Schema
const typeDefs = gql`
  type Projeto {
    titulo: String
  }
  type Tecnologia {
    tecnologia: String
  }
  input projetoInput{
    tecnologia: String
  }

  type Query {
    obterProjeto(input: projetoInput!): [Projeto]
    obterTecnologia: [Tecnologia]
  }
`;

module.exports = typeDefs;