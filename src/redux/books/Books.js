const ADD = 'BookStore/Controller/ADD_BOOK';
const REMOVE = 'BookStore/Controller/REMOVE_BOOK';

export const addBook = ({ name, category, author }) => ({
  type: ADD,
  id: Date.now(),
  name,
  category,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

const Reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          category: action.category,
          author: action.author,
        },
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default Reducer;
