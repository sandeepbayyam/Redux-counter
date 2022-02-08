const initialState = {
  count: 1,
};
const reducer = (state = initialState, action) => {
  console.log('reducer called', action);
  if (action.type === 'inc') {
    return { count: state.count + 1 };
  }
  if (action.type === 'dec') {
    return { count: state.count - 1 };
  }
  return state;
};
export default reducer;
