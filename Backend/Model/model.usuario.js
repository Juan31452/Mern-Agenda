// models/Usuario.js
import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true   //Limpiar campos vacios
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
},    
  {
    timestamps: true //Se agrega fecha de creacion documento
  });
  
  export default mongoose.model('Usuario', usuarioSchema);
  