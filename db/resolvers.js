const Usuario = require("../models/Usuario")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

require('dotenv').config({ path: 'variables.env' })

const criarToken = (usuario, secreto, expiresIn)=>{
  const {id , email, nome, apelido}= usuario
  
  return jwt.sign({id, email, nome, apelido }, secreto,{expiresIn})
}


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
      const existeUsuario = await Usuario.findOne({ email });
      if (existeUsuario) {
        throw new Error('Usuario já existe')
      }
      //password
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt)

      try {
        //Salvar no DB
        const usuario = new (input);
        usuario.save();
        return usuario;
      } catch (error) {
        console.log(error)
      }
    },
    autenticarUsuario: async (_, {input}) => {


      const {email, password} = input;
  
      const existeUsuario = await Usuario.findOne({email});
      if (existeUsuario){
        throw new Error('Este Usuario esta cadastrado!')
      }
      
      const passwordCorreto = await bcryptjs.compare(password, existeUsuario.password);
      if(!passwordCorreto) {
        throw new Error('Senha incorreta...')
      }
  
      return{
        token:criarToken(existeUsuario, process.env.SECRETO, '24h')
      }
  } 
  }

}


module.exports = resolvers;