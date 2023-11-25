import app from "./app.js"
import dotenv from "dotenv";
import mongoConnect from './Config/Database.js';
import cors from 'cors';



// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// puerto (obtenida desde las variables de entorno)
const puerto = process.env.PORT || 3000; 
// Utiliza el puerto 3000 si no se encuentra en .env

//Conexion a Mongodb
mongoConnect();

app.use(
    cors({
      origin: [puerto, "https://app-agenda.onrender.com"],
    })
  );

//http://localhost:4000
app.get("/",(req,res) =>{
    res.send('Hola Mundo');
});


// Iniciar el servidor y escuchar en el puerto especificado
app.listen(puerto, () => {
    console.log(`Conectado en el puerto:${puerto}`);
  });