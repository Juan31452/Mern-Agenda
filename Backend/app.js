import express from 'express';
import morgan from 'morgan' ;
import usuarioRouter from './Router/router.usuario.js';
import diaryRouter from './Router/diary.router.js'
import cookieParser from 'cookie-parser';

const app = express();
app.use(morgan('dev'));
app.use(express.json());//que reconozca formato json
app.use(cookieParser());//Convertir cookieen objeto json;

  
//se llama rutras 
app.use('/home',usuarioRouter);
app.use('/home',diaryRouter);
console.log('Versión de Node.js:', process.version);

// Configuración de rutas y middlewares
app.use(express.urlencoded({ extended: false }));


export default app