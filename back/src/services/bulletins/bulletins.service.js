// Initializes the `bulletins` service on path `/bulletins`
const { Service } = require('feathers-mongoose');
const createModel = require('../../models/bulletins.model');
const hooks = require('./bulletins.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };
  app.use('/bulletins', new Service(options, app));
  const service = app.service('bulletins');
  service.hooks(hooks);
};
