const ADD = 'ADD_BOOK';
const REMOVE = 'REMOVE_BOOK';

export const addBook = ({ name, category }) => ({
  type: ADD,
  id: Date.now(),
  name,
  category,
});

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          category: action.category,
        },
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducers;
