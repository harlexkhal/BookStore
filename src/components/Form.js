import React from 'react';
import form from './Form.module.css';

function Form() {
  return (
    <div className="ml-x">
      <h2 className={form.desc}>ADD NEW BOOK</h2>
      <form className={form.main}>
        <input type="text" placeholder="Book title" />
        <select>
          <option value="">Category</option>
          <option value="saab">Action</option>
          <option value="opel">Romance</option>
          <option value="audi">Horror</option>
        </select>
        <button type="button">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
