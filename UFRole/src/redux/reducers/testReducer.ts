import actionTypes from '../actions/actionTypes';

export class TestState{
    public test: string;
    public fecha: Date;

    constructor(){
      this.test= "prraaa pupupu pá";
      this.fecha= new Date();
    }
}

export const testReducer= (state:TestState = new TestState(), action) => {
  switch (action.type)
  {
    case actionTypes.UPDATE_FECHA:
      // Es vital entender esta parte: NUNCA devolvemos el estado actual modificado, sino una copia de éste.
      // Object.assign recibe: el objeto destino sobre el q se va a copiar, el objeto a copiar, las propiedades a modificar.
      /* ES6 sin tipar.
      return Object.assign({}, state, {
        fecha: action.payload,
      });*/
      return (<any>Object).assign({}, state, {
        fecha: action.payload,
      });

    default:
      return state;
  }
}
