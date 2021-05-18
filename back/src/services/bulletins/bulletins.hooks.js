const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt')],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      async (context) => {
        const UserModel = context.app.service('users').Model;
        const user = await UserModel.findOne({
          _id: context.params.user._id,
        });
        if (!user) throw new Error('User not found');
        user.bulletins = user.bulletins.concat(context.result._id);
        await user.save();
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
