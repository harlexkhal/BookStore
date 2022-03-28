export const setCategoryStatus = (status) => ({
  type: 'SET_STATUS',
  status,
});

export const CategoryStatus = {
  UNDER_CONSTRUCTION: 'UNDER_CONSTRUCTION',
};

const categories = (state = CategoryStatus.UNDER_CONSTRUCTION, action) => {
  switch (action.type) {
    case 'SET_STATUS':
      return action.status;
    default:
      return state;
  }
};

export default categories;
