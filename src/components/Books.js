import React from 'react';
import BookCard from './BookCard';
import Form from './Form';

function Books() {
  return (
    <>
      <BookCard name="Design Patterns" author="Nystrom" category="Programming" />
      <BookCard name="Finding bugs" author="Compiler" category="Horror" />
      <Form />
    </>
  );
}

export default Books;
