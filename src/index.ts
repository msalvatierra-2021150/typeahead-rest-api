import dotenv from 'dotenv';
import { Server } from "./models/server.model";

// Load environment variables from a .env file
dotenv.config();

//Instancing Server
const startedServer = new Server();

//Server starts to listen
startedServer.listen();