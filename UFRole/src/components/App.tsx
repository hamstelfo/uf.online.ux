import * as React from 'react';
import * as toastr from 'toastr';
import { Modal } from './Modal';
import UFRoleComponent from './UFRole';
const classNames: any = require('../css/styles');
const classNamesTest: any = require('../css/stylesTest');

import {connect} from 'react-redux';
import {AppState} from '../redux/reducers';
import {updateFecha} from '../redux/actions/testAction';
import {changeAllRoles} from '../redux/actions/testUFRoleActions';

const mapStateToProps = (state: AppState) => {
  return state
}

interface AppProps extends AppState{
  updateFecha: any,
  changeAllRoles: any
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    props.updateFecha();

    this.changeAllRolesEvent = this.changeAllRolesEvent.bind(this);
  }

  localLog = (will: boolean) =>{
    if (will){
      console.log("this.props will:");
    }
    else{
      console.log("this.props did:");
    }

    console.log("this.props:");
    console.log(this.props);
    //console.log(this.props.testState.fecha);
    //console.log(this.props.testState.test);
  }

  changeAllRolesEvent(event){
    event.preventDefault();
    this.props.changeAllRoles(event);
  }
    componentDidMount(){
      try {
        this.localLog(false);
        toastr.success(this.props.test.test);
        //setInterval(()=>{ this.props.changeAllRoles(); this.props.updateFecha(); }, 1000);
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
  }*/

  roleTestRender = (idRole: number, index: number, big: boolean) => {
    const _big: string = (big)?classNamesTest.big:'';
    const key: string = _big + '_' + index;

    return (
      <div key={`c_${key}`} className={`${classNames.uFRoleContainer} ${_big} text-center`} style={{ marginTop: '50px' }}>
        <UFRoleComponent roleId={idRole} onRightClick={this.changeAllRolesEvent} />
      </div>
    );
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }} >
        <span>{this.props.test.fecha.toLocaleString()}</span>popo
        <div>{this.props.testUFRole.roleTestElements.map((rol, i) => this.roleTestRender(rol, i, false))}</div>
        <div>{this.props.testUFRole.roleTestElements.map((rol, i) => this.roleTestRender(rol, i, true))}</div>
      </div>
    );
  }
}

export const AppContainer= connect(mapStateToProps,
                                  { updateFecha, changeAllRoles }
                                )(App);
