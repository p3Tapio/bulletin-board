// Initializes the `bulletins` service on path `/bulletins`
const { Bulletins } = require('./bulletins.class');
const createModel = require('../../models/bulletins.model');
const hooks = require('./bulletins.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/bulletins', new Bulletins(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('bulletins');

  service.hooks(hooks);
};
