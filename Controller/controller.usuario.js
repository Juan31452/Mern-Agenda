import Usuario from '../Model/model.usuario.js';

// Función para agregar un nuevo usuario
export const register = async (req, res) => {
  try {
    
    const {name, phone, email, password} = req.body
 
    //Creamos el objeto Usuario
    const nuevoUsuario = new Usuario({
      name,
      phone,
      email,
      password
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
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }

};

export const login = (req, res) => {
    res.send('login')
}