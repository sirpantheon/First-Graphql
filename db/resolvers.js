
//Resolver
const resolvers = {
  Query: {
    obterProjeto: ()=>"2322"
    },  
    Mutation:{
      novoUsuario:(_, input)=> {
        console.log(input);
        return "criando...";
      }
    }
  };


module.exports = resolvers;