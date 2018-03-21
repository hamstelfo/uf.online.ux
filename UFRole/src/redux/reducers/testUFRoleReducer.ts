import {RoleType} from '../../models/UFModels';
import actionTypes from '../actions/actionTypes';

export class TestUFRoleState{
  isModalOpen: boolean;
  roleTestElements: RoleType[];
  selected: number;

  constructor(){
      const initRoles=() => {
        const roles = [];
        for (var r in RoleType) {
          if (typeof RoleType[r] === 'number') {
            roles.push(RoleType[r]);
          }
        }
        return roles;
      }

      this.isModalOpen= false;
      this.roleTestElements= initRoles();
      this.selected= -1;
    }
}

export const testUFRoleReducer= (state:TestUFRoleState = new TestUFRoleState(), action) => {
  switch (action.type)
  {
    case actionTypes.CHANGE_ALL_ROLES:
      // Es vital entender esta parte: NUNCA devolvemos el estado actual modificado, sino una copia de éste.
      // Object.assign recibe: el objeto destino sobre el q se va a copiar, el objeto a copiar, las propiedades a modificar.
      /* ES6 sin tipar.
      return Object.assign({}, state, {
        fecha: action.payload,
      });*/
      return (<any>Object).assign({}, state, {
        roleTestElements: action.payload(state.roleTestElements),
      });

    default:
      return state;
  }
}
