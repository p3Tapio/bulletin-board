import feathers from '@feathersjs/feathers';
import auth from '@feathersjs/authentication-client';
import io from 'socket.io-client';
import socketio from '@feathersjs/socketio-client';

const feathersClient = feathers();
const socket = io(process.env.REACT_APP_API_URL, {
  transports: ['websocket'],
  forceNew: true,
});

feathersClient.configure(socketio(socket));
feathersClient.configure(
  auth({
    // eslint-disable-next-line no-undef
    storage: window.localStorage,
    storageKey: 'accessToken',
  })
);

export const userService = feathersClient.service('users');
export const bulletinService = feathersClient.service('bulletins');

export default feathersClient;
