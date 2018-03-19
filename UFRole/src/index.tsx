import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from './components/App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  test: "popopo"
}

function reducer(state=initialState, action){
  switch (action.type)
  {
    default:
      return state;
  }
}

const store= createStore(reducer);

render(
  <Provider store={store}>
  <AppContainer />
  </Provider>
  ,
  document.getElementById('root')
);
