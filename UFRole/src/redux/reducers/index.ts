import {RoleType} from '../../models/UFModels';
 import {combineReducers} from 'redux'
 import {TestState, testReducer} from './testReducer';

 interface State {
   isModalOpen: boolean;
   roleTestElements: RoleType[];
   selected: number;
 }

export interface AppState extends State{
  testState: TestState,
}
//console.log(test);

 export const reducers = combineReducers<AppState>({
   testState: testReducer,
 })
