import express from 'express';
import morgan from 'morgan' ;
import usuarioRouter from './Router/router.usuario.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(morgan('dev'));
app.use(express.json());//que reconozca formato json
app.use(cookieParser());//CConvertir cookieen objeto json;

//se llama rutras 
app.use('/home',usuarioRouter);

// Configuración de rutas y middlewares
app.use(express.urlencoded({ extended: false }));


export default app