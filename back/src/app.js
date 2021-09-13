const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./logger');

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const mongoose = require('./mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express(feathers());
app.configure(configuration());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.get('*', function (_req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.configure(socketio());
app.configure(mongoose);
app.configure(services);
app.configure(channels);

app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

if(process.env.NODE_ENV === 'test') {
  const reset = async () => {
    await app.service('users').Model.deleteMany({});
    await app.service('bulletins').Model.deleteMany({});
  };
  reset();
}

module.exports = app;
