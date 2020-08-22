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

  async findUsersByMonth(month) {
    let resp;
    try {
      const usersFound = await User.find({ month });

      if (usersFound.length > 0) {
        resp = {
          users: usersFound,
          found: true,
        };
      } else {
        resp = {
          msg: 'Users not found',
          found: false,
        };
      }
    } catch (err) {
      resp = {
        msg: 'Error to find',
        found: false,
      };
    }

    return resp;
  },

  async findUsersCurrentMonth() {
    const month = new Date().getMonth() + 1;

    let resp;
    try {
      const usersFound = await User.find({ month });

      if (usersFound.length > 0) {
        resp = {
          users: usersFound,
          found: true,
        };
      } else {
        resp = {
          msg: 'Users not found',
          found: false,
        };
      }
    } catch (err) {
      resp = {
        msg: 'Error to find',
        found: false,
      };
    }

    return resp;
  },

  async findUsersByDayAndMonth(day, month) {
    let resp;
    try {
      const usersFound = await User.find({ day, month });

      if (usersFound.length > 0) {
        resp = {
          users: usersFound,
          found: true,
        };
      } else {
        resp = {
          msg: 'Users not found',
          found: false,
        };
      }
    } catch (err) {
      resp = {
        msg: 'Error to find',
        found: false,
      };
    }

    return resp;
  },
};

export default UserService;
