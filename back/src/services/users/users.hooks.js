const { authenticate } = require('@feathersjs/authentication').hooks;

const { hashPassword, protect } =
  require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [hashPassword('password')],
    update: [hashPassword('password'), authenticate('jwt')],
    patch: [hashPassword('password'), authenticate('jwt')],
    remove: [authenticate('jwt')],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password'),
    ],
    find: [],
    get: [],
    create: [
      async (context) => {
        const userData = {
          username: context.data.username,
          password: context.data.passwordConfirm,
          strategy: 'local',
        };
        context.dispatch = await context.app
          .service('authentication')
          .create(userData, context.result);
        delete context.dispatch.user.password;
      },
    ],
  },
  error: {
    all: [
      (context) => {
        console.log(context.error);
      },
    ],
  },
};
