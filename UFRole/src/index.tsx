import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from './components/App';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducers} from './redux/reducers';
/*
const initialState = {
  test: "popopo ppi"
}

const popo = (state=initialState, action) => {
  switch (action.type)
  {
    default:
      return state;
  }
}*/

const store= createStore(reducers, {}, applyMiddleware(logger));

//console.log(reducers);

render(
  <Provider store={store}>
  <AppContainer />
  </Provider>
  ,
  document.getElementById('root')
);
