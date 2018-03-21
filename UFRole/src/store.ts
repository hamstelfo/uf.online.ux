import {createStore, compose, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import {reducers, AppState} from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import DevTools from './redux/containers/DevTools';

const enhancer = compose(
  applyMiddleware(reduxThunk),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export const store = createStore(
  reducers,
  composeWithDevTools(
    enhancer // other store enhancers if any
  )
);
