import Usuario from '../Model/model.usuario.js';
import bcrypt from 'bcryptjs';
import {MyToken} from '../Libs/jwt.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Función para agregar un nuevo usuario
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

    res.send('Registro Guardado');
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el registro' });
  } 
}

// Obtener todos los usuarios
export const findall  = async (req, res) => {
   
  try {
     const usuarios = await Usuario.find();

    // jwt.sign(
    //   {
    //     id: usuario._id,
    //   },
    //   'secret123',
    //   {expiresIn: '12h'},
    //   (err, token) => {
    //     if(err) console.log(err);
    //     res.json({token});
    //   }
    // );
   res.json(usuarios.map(usuario => ({
   id: usuario._id,
   name: usuario.name,
   phone: usuario.phone,
   email: usuario.email,
   password: usuario.password
  })));
   } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }

};

export const login = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ email: req.body.email, password: req.body.password }).exec();
    dotenv.config();

    
    if (!usuario) return res.status(400).json({message: "Usuario Invalido, verifique los Datos"})
    
    const SECRET = process.env.TOKEN_SECRET;
    const payload = {
     id: usuario._id,  
    };

    const token = await MyToken(payload)
    console.log('Token generado:', token);
    res.cookie("token", token);
    res.json({
      id: usuario._id,
      name: usuario.name,
      phone: usuario.phone,
      email: usuario.email,
      })  
      
 
  } catch (error) {
    res.status(500).json({ error: 'Error al realizar el inicio de sesión' });
  }
};

export const logout = async (req, res) => {
  res.cookie('token',"", {
  expires: new Date(0),
  });
  return res.sendStatus(200);
}