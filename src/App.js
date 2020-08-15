import express from 'express';

import routes from './routes';
import connection from './db/config/database';

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    connection.con();
  }

  routes() {
    this.express.use('/api', routes);
  }
}

export default new App().express;
