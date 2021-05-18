const { Auth } = require('./auth.class');
const { JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const hooks = require('./auth.hooks');
const { expressOauth } = require('@feathersjs/authentication-oauth');

module.exports = function (app) {
  app.use('/authentication', new Auth(app));
  app.configure(expressOauth());
  const service = app.service('authentication');

  service.register('jwt', new JWTStrategy());
  service.register('local', new LocalStrategy());
  service.hooks(hooks);
};
