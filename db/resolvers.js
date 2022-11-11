const Usuario = require("../models/Usuario")
//Resolver
const resolvers = {
  Query: {
    obterProjeto: () => "2322"
  },
  Mutation: {
    novoUsuario: async (_, input) => {
      const { email, password } = input;
      //Verificar Usuario
      const usuarioExistente = await Usuario.findOne({email});
      if(usuarioExistente) {
        throw new Error ('Usuario já existe')
      } 
      //password

      try{
        //Salvar no DB
        const usuario = new Usuario(input);
        usuario.save();
        return usuario;
      }catch(error){
        console.log(error)
      }
    }
  }
};


module.exports = resolvers;