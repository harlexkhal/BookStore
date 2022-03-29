const SET_STATUS = 'SET_STATUS';

export const setCategoryStatus = (status) => ({
  type: SET_STATUS,
  status,
});

const Reducer = (state = 'Check Status', action) => {
  switch (action.type) {
    case SET_STATUS:
      return action.status;
    default:
      return state;
  }
};

export default Reducer;
