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
    all: [protect('password')],
  },
  error: {
    create: [
      (context) => {
        if (context.error.errors.username) {
          context.error.message =
            context.error.errors.username.properties.message;
        }
      },
    ],
  },
};