import * as React from 'react';
import * as toastr from 'toastr';
import { Modal } from './Modal';
import {RoleType} from '../models/UFModels';
import {UFRoleComponent} from './UFRole';
const classNames: any = require('../css/styles');
const classNamesTest: any = require('../css/stylesTest');

import {connect} from 'react-redux';

interface State {
  isModalOpen: boolean;
  roleTestElements: RoleType[];
  selected: number;
  test: string;
}

class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);

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
      test: ""
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeAllRoles = this.changeAllRoles.bind(this);
    this.selectRow = this.selectRow.bind(this);
  }

  componentDidMount(){
    try {
      toastr.success(this.props['test']);
    }
    catch (e)
    {
      toastr.error(e);
    }
  }

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
  }

  roleTestRender = (idRole: number, index: number, big: boolean) => {
    const _big: string = (big)?classNamesTest.big:'';
    const key: string = _big + '_' + index;

    return (
      <div key={`c_${key}`} className={`${classNames.uFRoleContainer} ${_big} text-center`} style={{ marginTop: '50px' }}>
        <UFRoleComponent roleId={idRole} onRightClick={this.changeAllRoles} />
      </div>
    );
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div>{this.state.roleTestElements.map((rol, i) => this.roleTestRender(rol, i, false))}</div>
        <div>{this.state.roleTestElements.map((rol, i) => this.roleTestRender(rol, i, true))}</div>
      </div>
    );
  }
};


function mapStateToProps(store){
  return {
    test: store.test
  }
}

//export default connect(mapStateToProps)(App);
export const AppContainer= connect(mapStateToProps)(App);
