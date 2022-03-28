export const addBook = ({ name, category }) => ({
  type: 'ADD_BOOK',
  id: Date.now(),
  name,
  category,
});

export const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  id,
});

const books = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          category: action.category,
        },
      ];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default books;
