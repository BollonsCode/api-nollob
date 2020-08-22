import express from 'express';

import UserController from './App/controllers/UserController';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).json({ msg: 'Server OK!' });
});

routes.post('/users', UserController.store);
routes.get('/users/month/:month', UserController.findByMonth);
routes.get('/users/month', UserController.findByCurrentMonth);
routes.get('/users/day/:day/month/:month', UserController.findByDayAndMonth);

export default routes;
