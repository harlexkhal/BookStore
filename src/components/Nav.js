import React from 'react';
import { Link } from 'react-router-dom';
import nav from './Nav.module.css';

const Nav = () => {
  const categoryPage = '/categories'; // once again another unecessary declaration just to avoid linters warnings :)
  return (
    <nav className={nav.main}>
      <div className={`ml-6 ${nav.menu}`}>
        <Link to="/"><h1 className="mr-4 cl-blue">Bookstore CMS</h1></Link>
        <Link to="/"><p className="mr-4 mt-2p5">Books</p></Link>
        <Link to={categoryPage}><p className="mt-2p5">Categories</p></Link>
      </div>
      <div className={nav.user} />
    </nav>
  );
};

export default Nav;
