import * as React from 'react';
import images from './images';
import {RoleType} from '../models/UFModels';
import {UFRoleShowMode} from '../models/auxModels';
import { hot } from 'react-hot-loader';
const classNames: any = require('../css/styles');

interface Props extends React.Props<{}> {
  onRightClick?: (event) => void;
  roleId: RoleType;
  showMode?: UFRoleShowMode,
  tooltip?: boolean
}

const UFRoleComponent: React.StatelessComponent<Props> = (props) => {
  const showMode = (props.showMode==UFRoleShowMode.Graphic) ? classNames.graphic : classNames.text;
  const circle= (props.roleId==RoleType.PORTERO)?images.circleYellow:images.circle;

  return (
    <div className={`${showMode} ${classNames['roleId'+props.roleId]}`} onContextMenu={props.onRightClick}>
      <img src={images.field} />
      <img src={circle} />
    </div>
  );
};

UFRoleComponent.defaultProps = {
  tooltip: false,
  roleId: RoleType.PORTERO,
  showMode: UFRoleShowMode.Graphic,
};


export default hot(module)(UFRoleComponent);
