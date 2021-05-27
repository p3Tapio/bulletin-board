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

// Load app configuration
app.configure(configuration());

// Enable security, CORS, compression, favicon and body parsing
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder ( TODO HUOM PROD 404t)
// app.use('/', express.static(app.get('public')));
app.use(express.static(__dirname + '/public'));
app.get('*', function (_req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Set up Plugins and providers
app.configure(socketio());
app.configure(mongoose);

app.configure(services);
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
