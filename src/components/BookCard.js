import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';
import book from './BookCard.module.css';

const BookCard = ({
  id, name, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={book.card}>
      <div className="ml-2">
        <h5 className="primary-font disabled-black">{category}</h5>
        <h1 className={`secondary-font ${book.mtminus26px}`}>{name}</h1>
        <p className={`secondary-font cl-blue ${book.mtminus26px}`}>{author}</p>
        <ul className={book.action}>
          <li className="secondary-font cl-blue disabled-blue">Comments</li>
          <li><hr className={book.actionline} /></li>
          <li>
            <button
              className="secondary-font cl-blue fz-16"
              type="button"
              onClick={() => {
                dispatch(removeBook(id));
              }}
            >
              Remove
            </button>
          </li>
          <li><hr className={book.actionline} /></li>
          <li className="secondary-font cl-blue disabled-blue">Edit</li>
        </ul>
      </div>
      <div className={book.progress}>
        <div className={book.chart} />
        <div>
          <h1 className="primary-font mb-3">75%</h1>
          <p className={`primary-font disabled-black ${book.completed}`}>Completed</p>
        </div>
      </div>
      <div className="mr-7">
        <p className="primary-font disabled-black">Current Chapter</p>
        <p className="primary-font">Chapter 17</p>
        <button type="button" className={`primary-font ${book.btn}`}>UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookCard;
