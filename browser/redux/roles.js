const SET_ROLES = 'SET_ROLES';

export const setRoles = roles => ({ type: SET_ROLES, roles });

const rolesReducer = (prevState = [], action) => {
  switch (action.type) {
    case SET_ROLES:
      return action.roles;
    default:
      return prevState;
  }
};

export default rolesReducer;
