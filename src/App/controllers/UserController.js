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

  async findByMonth(req, res) {
    const { month } = req.params;

    const usersFound = await UserService.findUsersByMonth(month);

    if (usersFound.found === false) {
      return res.status(404).json(usersFound);
    }

    return res.status(200).json(usersFound);
  },

  async findByCurrentMonth(req, res) {
    const usersFound = await UserService.findUsersCurrentMonth();

    if (usersFound.found === false) {
      return res.status(404).json(usersFound);
    }

    return res.status(200).json(usersFound);
  },

  async findByDayAndMonth(req, res) {
    const { day, month } = req.params;

    const usersFound = await UserService.findUsersByDayAndMonth(day, month);

    if (usersFound.found === false) {
      return res.status(404).json(usersFound);
    }

    return res.status(200).json(usersFound);
  },

  async destroy(req, res) {
    const { userName } = req.params;

    const userDeleted = await UserService.deleteUser(userName);

    if (userDeleted.deleted === false) {
      return res.status(404).json(userDeleted);
    }

    return res.status(200).json(userDeleted);
  },
};

export default UserController;
