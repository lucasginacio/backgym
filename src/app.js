import express from 'express';
import routes from './routes';

import './database';

class App {
  // toda vez que o metodo é chamado o constructor é executado
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
