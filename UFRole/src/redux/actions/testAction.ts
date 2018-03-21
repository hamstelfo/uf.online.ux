import actionTypes from './actionTypes';

export const updateFecha = () =>{
  return {
    type: actionTypes.UPDATE_FECHA,
    payload: new Date(),
  }
}
