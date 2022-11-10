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
    obterProjeto: (_, { input }, ctx) => {
      const resultado = Projetos.filter( Projetos => Projetos.tecnologia === input.tecnologia)

      return resultado
    }
  },
};

module.exports = resolvers;