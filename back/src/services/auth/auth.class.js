const { AuthenticationService } = require('@feathersjs/authentication');
// "Service method X for 'authentication' service must return a promise",
//  https://docs.feathersjs.com/api/authentication/service.html#authenticate-data-params-strategies
exports.Auth = class Auth extends AuthenticationService {
  // create(data, params) {
  //   console.log(`data`, data);
  //   console.log(`params`, params);
  //   console.log('LOGIN');
  // }
  // remove(id, param) {
  //   //
  //   console.log('LOGOUT');
  //
  // }
};
