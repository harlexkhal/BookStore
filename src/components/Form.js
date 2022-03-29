import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/Books';
import form from './Form.module.css';

function Form() {
  let inputName;
  let inputCategory;

  const dispatch = useDispatch();

  return (
    <div className="ml-x">
      <h2 className={form.desc}>ADD NEW BOOK</h2>
      <form
        className={form.main}
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputName.value.trim() || !inputCategory.value.trim()) {
            return;
          }
          const book = {
            name: inputName.value,
            category: inputCategory.value,
            author: 'Alex',
          };
          dispatch(addBook(book));
          inputName.value = '';
          inputCategory.value = '';
        }}
      >
        <input type="text" placeholder="Book title" ref={(node) => { inputName = node; }} />
        <select ref={(node) => { inputCategory = node; }}>
          <option value="">-- Select a Category --</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
