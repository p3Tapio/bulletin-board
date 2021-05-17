import feathers from '@feathersjs/client';
import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';
import axios from 'axios';

const feathersClient = feathers();
const restClient = rest(process.env.REACT_APP_API_URL);

feathersClient.configure(restClient.axios(axios));
feathersClient.configure(feathers.authentication());
feathersClient.configure(
  auth({
    // eslint-disable-next-line no-undef
    storage: window.localStorage,
    storageKey: 'accessToken',
  })
);
export const userService = feathersClient.service('users');

export default feathersClient;
