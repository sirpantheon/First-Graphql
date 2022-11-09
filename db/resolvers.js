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
      obterProjeto: () => Projetos,
      obterTecnologia: () => Projetos,
    },
  };

  module.exports = resolvers;