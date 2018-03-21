 import {combineReducers} from 'redux'
 import {TestState, testReducer} from './testReducer';
 import {TestUFRoleState, testUFRoleReducer} from './testUFRoleReducer';

export interface AppState{
  test: TestState,
  testUFRole: TestUFRoleState,
}

 export const reducers = combineReducers<AppState>({
   test: testReducer,
   testUFRole: testUFRoleReducer,
 })
