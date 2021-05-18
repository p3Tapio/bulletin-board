// login = context.method: create, path: authentication
//  reg = method: create, path; users --->  user.hooks.js
//  console.log(`context.data`, context.data); --> sisääntuleva objekti
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      async (context) => {
        const User = context.app.service('users').Model;
        // console.log(`context.data`, context.result.user._id);
        const id = context.result.user._id;
        const populated = await User.findOne({
          _id: id,
        }).populate('bulletins');

        if (context.result.authentication) delete context.result.authentication;

        if (context.result.user && populated && populated.bulletins) {
          console.log('populated ----------------', populated);
          context.result.user = {
            ...context.result.user,
            bulletins: populated.bulletins,
          };
        }
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
