const users = require('./users/users.service.js');
const auth = require('./auth/auth.service.js');
const bulletins = require('./bulletins/bulletins.service.js');
const file = require('./file/file.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(auth);
  app.configure(bulletins);
  app.configure(file);
};