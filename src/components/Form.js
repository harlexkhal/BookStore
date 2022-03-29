import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/Books';
import form from './Form.module.css';

const Form = () => {
  let inputName;
  let inputCategory;

  const dispatch = useDispatch();

  const [localState, setState] = useState({
    name: null,
    category: null,
    author: 'Alex',
  });

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
          dispatch(addBook(localState));
          inputName.value = '';
          inputCategory.value = '';
        }}
      >
        <input
          type="text"
          placeholder="Book title"
          ref={(node) => { inputName = node; }}
          onChange={(e) => {
            const State = {
              ...localState,
              name: e.target.value,
            };
            setState(State);
          }}
        />
        <select
          ref={(node) => { inputCategory = node; }}
          onChange={(e) => {
            const State = {
              ...localState,
              category: e.target.value,
            };
            setState(State);
          }}
        >
          <option value="">-- Select a Category --</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
