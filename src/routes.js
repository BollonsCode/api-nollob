import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).json({ msg: 'Server OK!' });
});

export default routes;
