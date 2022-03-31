import { Routes, Route } from 'react-router-dom';
import './App.css';
import Book from './pages/Book';
import Categories from './pages/Categories';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
