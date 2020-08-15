import mongoose from 'mongoose';

import '../models/User';

const User = mongoose.model('User');

const UserService = {
  async create(user) {
    const { userName } = user;

    const userExists = await User.findOne({ userName });

    if (userExists === null) {
      let resp;
      try {
        const userCreated = await User.create(user);

        resp = {
          user: userCreated,
          created: true,
        };
      } catch (err) {
        resp = {
          msg: "User don't created",
          created: false,
        };
      }
      return resp;
    }

    return {
      msg: 'this user already exists',
      created: false,
    };
  },

  async findUsersByMonth() {},
};

export default UserService;
