const { gql } = require("apollo-server");
//Schema
const typeDefs = gql`
  type Projeto {
    titulo: String
  }
  type Tecnologia {
    tecnologia: String
  }

  type Query {
    obterProjeto: [Projeto]
    obterTecnologia: [Tecnologia]
  }
`;

module.exports = typeDefs;