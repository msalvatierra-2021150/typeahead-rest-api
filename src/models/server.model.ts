import express, { Express } from 'express';
import cors from 'cors';
import { dbConnection } from '../database/db-config'

export class Server {
    app: Express;
    port: string;
    paths: { [key: string]: string };
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
        this.paths = {
            request: '/api/request',
        }
        this.middlewares();
        this.routes();
        this.connectToDB();
    }

    //Función de conexión
    async connectToDB() {
        await dbConnection();
    }

    middlewares () {
        //CORS 
        this.app.use(cors());

        //Read and parse the Body
        this.app.use(express.json());

        //used to serve static files (such as images, CSS files) from a specific directory on your web server. 
        this.app.use('/public', express.static('/public'));
    }

    routes() {
        this.app.use(this.paths.request , require('../routes/typeahead.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in:', this.port);
        })
    }
}