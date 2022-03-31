import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import categories from '../components/Categories.module.css';
import { setCategoryStatus } from '../redux/categories/Categories';

const Page = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="pt-12">
      <button
        type="button"
        className={categories.btn}
        onClick={() => {
          dispatch(setCategoryStatus('Under Construction, Come back later 🙂'));
        }}
      >
        {status}
      </button>
    </div>
  );
};

export default Page;
