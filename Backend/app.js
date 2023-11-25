import express from 'express';
import morgan from 'morgan' ;
import usuarioRouter from './Router/router.usuario.js';
import diaryRouter from './Router/diary.router.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(morgan('dev'));
app.use(express.json());//que reconozca formato json
app.use(cookieParser());//CConvertir cookieen objeto json;

app.use(
    cors({
      origin: ["http://localhost:4000", "https://app-agenda.onrender.com"],
    })
  );
  
//se llama rutras 
app.use('/home',usuarioRouter);
app.use('/home',diaryRouter);

// Configuración de rutas y middlewares
app.use(express.urlencoded({ extended: false }));


export default app