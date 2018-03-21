import {createStore, compose, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import {reducers, AppState} from './redux/reducers';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';

console.log(reducers);

export const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(reduxThunk),
  // other store enhancers if any
));
