
//Resolver
const resolvers = {
  Query: {
    obterProjeto: (_, { input }, ctx) => {
      const resultado = Projetos.filter( Projetos => Projetos.tecnologia === input.tecnologia)

      return resultado
    }
  },
};

module.exports = resolvers;