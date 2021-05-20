const { authenticate } = require('@feathersjs/authentication').hooks;
const decode = require('jwt-decode');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      async (context) => {
        authenticate('jwt');
        const userId = decode(context.params.authentication.accessToken).sub;
        context.data.user = userId;
        return context;
      },
    ],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')],
  },

  after: {
    all: [],
    find: [
      async (context) => {
        const bulletModel = context.app.service('bulletins').Model;
        const populated = await bulletModel
          .find({})
          .populate('user', { username: 1 });
        context.result = populated;
        return context;
      },
    ],
    get: [],
    create: [
      async (context) => {
        const UserModel = context.app.service('users').Model;
        const bulletModel = context.app.service('bulletins').Model;

        const userId = decode(context.params.authentication.accessToken).sub;
        const user = await UserModel.findOne({
          _id: userId,
        });
        if (!user) throw new Error('No user found :(');
        user.bulletins = user.bulletins.concat(context.result._id);
        await user.save();

        const populated = await bulletModel
          .findOne({ _id: context.result._id })
          .populate('user', { username: 1 });
        context.result = populated;
        return context;
      },
    ],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
