import express from 'express';
import { routes } from './src/routes/index.js';
import { errorMiddleWare } from './src/middleware/error.middleware.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

class Server {
  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.configureRoutes();
    this.startServer();
  }

  configureMiddleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  configureRoutes() {
    this.app.use('/', routes);
    this.app.use(errorMiddleWare);
  }

  startServer() {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}

// Create an instance of the Server class to start the server
const server = new Server();
