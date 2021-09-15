const hooks = require('./file.hooks');
const FileService = require('./FileService');

module.exports = function (app) {
  app.use('/file', new FileService());
  const service = app.service('fileservice');
  service.hooks(hooks);
};
