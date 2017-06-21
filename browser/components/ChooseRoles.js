import React from 'react';
import RoleOptions from './RoleOptions';

const ChooseRoles = props => (
  <div>
    <h2>choose roles</h2>
    <RoleOptions
      category="good"
      roles={props.selectedGood}
      selectRole={props.selectRole}
    />
    <RoleOptions
      category="evil"
      roles={props.selectedEvil}
      selectRole={props.selectRole}
    />
    <button onClick={props.submitSelections}></button>
  </div>
);

export default ChooseRoles;
