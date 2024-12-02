import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import createError from 'http-errors';
import indexRoute from './Route/indexRoute'

const app = express();

// Configuración de CORS
app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    methods: 'GET, POST, OPTIONS, PUT, DELETE'
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para rutas no encontradas
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404));
});

app.use('/', indexRoute)

// Manejo de errores
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({ error: err.message });
});

export default  app;
