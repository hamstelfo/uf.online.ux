import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {reducers} from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(reduxThunk),
  // other store enhancers if any
));
