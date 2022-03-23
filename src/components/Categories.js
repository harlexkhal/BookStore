import React from 'react';
import categories from './Categories.module.css';

function Categories() {
  return (
    <button type="button" className={categories.btn}>Check Status</button>
  );
}

export default Categories;
