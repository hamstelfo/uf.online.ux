import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from './components/App';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducers} from './redux/reducers';
import {store} from './store';

render(
  <Provider store={store}>
  <AppContainer />
  </Provider>
  ,
  document.getElementById('root')
);
