import express from 'express';

import UserController from './App/controllers/UserController';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).json({ msg: 'Server OK!' });
});

routes.post('/users', UserController.store);

export default routes;
