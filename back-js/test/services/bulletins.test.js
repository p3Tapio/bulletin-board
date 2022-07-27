const app = require('../../src/app');

describe('\'bulletins\' service', () => {
  it('registered the service', () => {
    const service = app.service('bulletins');
    expect(service).toBeTruthy();
  });
});
