import actionTypes from './actionTypes';
import {RoleType} from '../../models/UFModels';
import * as toastr from 'toastr';

export const changeAllRoles = () =>{
  var numRoleTypes= Object.keys(RoleType).length / 2;

  const roles = (roleTestElements) => {
    var roles= roleTestElements;
    for (var i:number=0; i < numRoleTypes; i++)
    {
      roles[i]= (roles[i] + 1) % numRoleTypes;
    }

    toastr.success("All roles changed!")

    return roles;
  }

  return {
    type: actionTypes.CHANGE_ALL_ROLES,
    payload: roles,
  }
}
