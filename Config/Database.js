import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// URL de conexión de MongoDB (obtenida desde las variables de entorno)
const url = process.env.MONGODB_URI;

const mongoConnect = async () => {
    try {
        mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

      console.log('Conexión exitosa a MongoDB ');
    } catch (error) {
      console.error('Error al conectar a MongoDB :', error);
    }
  };
  
export default mongoConnect;