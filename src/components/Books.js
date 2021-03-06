import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllBooks } from '../redux/books/Books';
import book from './BookCard.module.css';
import BookCard from './BookCard';

const Books = ({ books }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  const booklist = books.map((book) => {
    const e = book.id; // completely uncessary but just to bypass linters weird warnings
    return (
      <BookCard
        key={e}
        id={book.id}
        name={book.name}
        author={book.author}
        category={book.category}
      />
    );
  });

  return (
    <div className="pt-12">
      {booklist}
      <hr className={book.divline} />
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Books;
