import { combineReducers, createStore } from 'redux';
import books from './books/Books';
import categories from './categories/Categories';

const rootReducer = combineReducers({
  books,
  categories,
});

const store = createStore(rootReducer);

export default store;
