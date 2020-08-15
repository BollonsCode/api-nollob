import UserService from '../services/UserService';

const UserController = {
  async store(req, res) {
    const user = req.body;

    const userCreated = await UserService.create(user);

    if (userCreated.created === false) {
      return res.status(406).json(userCreated);
    }

    return res.status(200).json(userCreated);
  },
};

export default UserController;
