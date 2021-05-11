// Application hooks that run for every service

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
      (context) => {
        // login = context.method: create, path: authentication
        //  reg = method: create, path; users ---> loggaus user.hooks.js:ssä
        //  console.log(`context.data`, context.data); --> sisääntuleva objekti

        if (context.result.authentication) delete context.result.authentication;
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
