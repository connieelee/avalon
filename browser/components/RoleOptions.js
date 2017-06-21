import React from 'react';

const RoleOptions = ({ category, roles, selectRole }) => (
  <div id={`${category}-select`}>
    <h3>{category}</h3>
    {
      Object.keys(roles).map((role) => {
        const selected = roles[role];
        return (
          <button
            key={role}
            onClick={selectRole}
            className={selected ? 'selected' : ''}
          >{role}</button>
        );
      })
    }
  </div>
);

export default RoleOptions;
