const { AuthenticationService } = require('@feathersjs/authentication');
const { JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const hooks = require('./auth.hooks');
const { expressOauth } = require('@feathersjs/authentication-oauth');

module.exports = function (app) {
  app.use('/authentication', new AuthenticationService(app));
  app.configure(expressOauth());
  app.service('authentication').register('jwt', new JWTStrategy());
  app.service('authentication').register('local', new LocalStrategy());
  app.service('authentication').hooks(hooks);
};
