const FileService = require('./FileService');
const hooks = require('./file.hooks');

module.exports = function (app) {
  app.use('/file', new FileService(app));
  const service = app.service('file');
  service.hooks(hooks);
};