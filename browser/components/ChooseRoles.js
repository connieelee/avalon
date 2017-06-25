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
    <h3>ready?</h3>
    <button onClick={props.submitSelections}>go!</button>
  </div>
);

export default ChooseRoles;
