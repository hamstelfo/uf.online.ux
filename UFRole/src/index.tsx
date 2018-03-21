import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from './components/App';
import {Provider} from 'react-redux';
import {store} from './store';

render(
  <Provider store={store}>
  <AppContainer />
  </Provider>
  ,
  document.getElementById('root')
);
