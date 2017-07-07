function reducer(prevState = {}, action) {
  switch (action.type) {
    case 'response':
      return { response: action.data };
    default:
      return prevState;
  }
}

export default reducer;
