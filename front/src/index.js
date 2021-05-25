/* eslint-disable no-undef */
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MessageQueue } from '@react-md/alert';
import store from './state/store';

import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MessageQueue id="main-alerts">
        <App />
      </MessageQueue>
    </Router>
  </Provider>,
  document.getElementById('root')
);
