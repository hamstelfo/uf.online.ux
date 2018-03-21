 import {combineReducers} from 'redux'
 import {TestState, testReducer} from './testReducer';
 import {TestUFRoleState, testUFRoleReducer} from './testUFRoleReducer';

export interface AppState{
  testState: TestState,
  testUFRoleState: TestUFRoleState,
}
//console.log(test);

 export const reducers = combineReducers<AppState>({
   testState: testReducer,
   testUFRoleState: testUFRoleReducer,
 })
