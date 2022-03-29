import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import categories from '../components/Categories.module.css';
import { setCategoryStatus } from '../redux/categories/Categories';

const Page = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  return (
    <button
      type="button"
      className={categories.btn}
      onClick={() => {
        dispatch(setCategoryStatus('Under Construction, Come back later 🙂'));
      }}
    >
      {status}
    </button>
  );
};

export default Page;
