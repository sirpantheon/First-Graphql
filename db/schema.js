const { gql } = require("apollo-server");
//Schema
const typeDefs = gql`

  type Usuario {
    id: ID
    nome: String
    apelido: String
    email: String
    criador: String
  } 

  type Token {
    token: String 
  }

  input AutenticarInput{
    email: String!
    password: String!  
  }

  input UsuarioInput {
    nome: String
    apelido: String
    email: String
    password: String
  }

  type Query {
    obterProjeto: String
  }

  type Mutation {
    novoUsuario(input: UsuarioInput): Usuario
    autenticarUsuario(input: AutenticarInput): Token
  }
`;

module.exports = typeDefs;