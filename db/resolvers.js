const Usuario = require("../models/Usuario")
const bcryptjs = require("bcryptjs")
//Resolver
const resolvers = {
  Query: {
    obterProjeto: () => "2322"
  },
  Mutation: {
    novoUsuario: async (_, input) => {
      // console.log(input)
      // return "criando.."
      const { email, password } = input;
      //Verificar Usuario
      const usuarioExistente = await Usuario.findOne({email});
      if(usuarioExistente) {
        throw new Error ('Usuario já existe')
      } 
      //password
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt)

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