import * as React from 'react';
import * as toastr from 'toastr';
import { Modal } from './Modal';
import {RoleType} from '../models/UFModels';
import {UFRoleComponent} from './UFRole';
const classNames: any = require('../css/styles');
const classNamesTest: any = require('../css/stylesTest');

import {connect} from 'react-redux';
import {AppState} from '../redux/reducers';
import {TestState} from '../redux/reducers/testReducer';
import {updateFecha} from '../redux/actions/testAction';
import {changeAllRoles} from '../redux/actions/testUFRoleActions';

const mapStateToProps = (state: AppState) => {
  return state
}

interface AppProps extends AppState{
  updateFecha: any,
  changeAllRoles: any
}

export const AppContainer= connect(mapStateToProps, {
                                                      updateFecha,
                                                      changeAllRoles
                                                    })(
  class App extends React.Component<AppProps, AppState> {
//class App extends React.Component<{}, State> {
  constructor(props: AppProps) {
    super(props);
    props.updateFecha();
    //console.log("props.test:");
    //console.log(props);
/*
    const initRoles=() => {
      const roles = [];
      for (var r in RoleType) {
        if (typeof RoleType[r] === 'number') {
          roles.push(RoleType[r]);
        }
      }
      return roles;
    }

    this.state = {
      isModalOpen: false,
      roleTestElements: initRoles(),
      selected: -1,
      testState: new TestState()
    };*/

    /*this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeAllRoles = this.changeAllRoles.bind(this);
    this.selectRow = this.selectRow.bind(this);*/
  }

  const localLog = (will: boolean) =>{
    if (will){
      console.log("this.props will:");
    }
    else{
      console.log("this.props did:");
    }

    console.log("this.props:");
    console.log(this.props);
    // En tiempo de compilación: this.props.testState.fecha
    // En tiempo de ejecución: this.props.test.fecha

    //console.log(this.props.testState.fecha);
    //console.log(this.props.testState.test);
  }
    componentDidMount(){
      try {
        this.localLog(false);
        toastr.success(this.props.testState.test);
//        setInterval(()=>{ this.props.updateFecha(); }, 1000);
      }
      catch (e)
      {
        toastr.error(e);
      }
    }

    componentWillMount(){
      try {
        this.localLog(true);
      }
      catch (e)
      {
        toastr.error(e);
      }
    }
/*
  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  selectRow(i: number){
    if (this.state.selected===-1)
    {
      this.setState({ selected: i });
    }
    else
    {
      var roles= this.state.roleTestElements;
      var temp= roles[i];

      roles[i]= roles[this.state.selected];
      roles[this.state.selected] = temp;

      this.setState({ selected: -1 });
      this.setState({roleTestElements: roles});
    }
  }

  changeAllRoles(event) {
    event.preventDefault();
    var numRoleTypes= Object.keys(RoleType).length / 2;

    var roles= this.state.roleTestElements;
    for (var i:number=0; i < numRoleTypes; i++)
    {
      roles[i]= (roles[i] + 1) % numRoleTypes;
    }

    this.setState({roleTestElements: roles});
    toastr.success("All roles changed!")
  }*/

  roleTestRender = (idRole: number, index: number, big: boolean) => {
    const _big: string = (big)?classNamesTest.big:'';
    const key: string = _big + '_' + index;

    return (
      <div key={`c_${key}`} className={`${classNames.uFRoleContainer} ${_big} text-center`} style={{ marginTop: '50px' }}>
        <UFRoleComponent roleId={idRole} onRightClick={this.props.changeAllRoles} />
      </div>
    );
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }} >
        <span>{this.props.testState.fecha.toLocaleString()}</span>
        <div>{this.props.testUFRoleState.roleTestElements.map((rol, i) => this.roleTestRender(rol, i, false))}</div>
        <div>{this.props.testUFRoleState.roleTestElements.map((rol, i) => this.roleTestRender(rol, i, true))}</div>
      </div>
    );
  }
}
);


/*function mapStateToProps(store){
  return {
    test: store.test
  }
}*/
/*
const mapStateToProps = ({test}) => {
  return {
    test
  }
}*/

//export default connect(mapStateToProps)(App);
//export const AppContainer= connect(mapStateToProps)(App);
