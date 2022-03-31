import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import books from './books/Books';
import categories from './categories/Categories';

const rootReducer = combineReducers({
  books,
  categories,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
