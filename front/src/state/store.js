import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import bulletinReducer from './reducers/bulletinReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  bulletinsState: bulletinReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
