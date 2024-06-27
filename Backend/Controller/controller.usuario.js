import Usuario from '../Model/model.usuario.js';
import bcrypt from 'bcryptjs';
import {MyToken} from '../Libs/jwt.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Agregar un nuevo usuario
export const register = async (req, res) => {
    
    const {name, phone, email, password} = req.body
  
    try {
      const paswordencrypt = await bcrypt.hash(password , 10)
    //Creamos el objeto Usuario
    const nuevoUsuario = new Usuario({
      name,
      phone,
      email,
      password :paswordencrypt
    });

    console.log(nuevoUsuario); 

    await nuevoUsuario.save();//Se guarda
    const token = await MyToken(payload)
    console.log('Token generado:', token);
    res.cookie("token", token);
    res.json({
      id: nuevoUsuario._id,
      name: nuevoUsuario.name,
      })  

    res.send('Registro Guardado');
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el registro' });
  } 
}

// Obtener todos los usuarios
export const findall  = async (req, res) => {
   
  try {
     const usuarios = await Usuario.find();

   res.json(usuarios.map(usuario => ({
   id: usuario._id,
   name: usuario.name,
   phone: usuario.phone,
   email: usuario.email,
   //password: usuario.password
  })));
   } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }

};
//iniciar session
export const login = async (req, res) => {
  const {email,password} =req.body
  try {
    const userFound = await Usuario.findOne({ email });
    dotenv.config();

    
    if (!userFound) return res.status(400).json({message: "Usuario Invalido, verifique los Datos"})
    
    const isMatch = bcrypt.compare(password,userFound.password);
    if (!isMatch) return res.status(400).json({message: "Password Incorrecto"});

    const SECRET = process.env.TOKEN_SECRET;
    const payload = {
     id: userFound._id,  
    };

    const token = await MyToken(payload)
    console.log('Token generado:', token);
    res.cookie("token", token);
    res.json({
      id: userFound._id,
      name: userFound.name,
      phone: userFound.phone,
      email: userFound.email,
      })  
      
 
  } catch (error) {
    res.status(500).json({ error: 'Error al realizar el inicio de sesión' });
  }
};

//Cerrar sesion
export const logout = async (req, res) => {
  res.cookie('token',"", {
  expires: new Date(0),
  });
  return res.sendStatus(200);
};
//Ver perfil usuario
export const profile =  async(req,res)=>{
  
  const userFound = await Usuario.findById(req.user.id)

  if (!userFound) return res.status(400).json({message: "User not Found"});

  return res.json({
    id: userFound._id,
    name: userFound.name,
    phone: userFound.phone,
    email: userFound.email,
  })
 
}