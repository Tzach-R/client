import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import BooksPage from "./components/BooksPage";



function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="title">📖 Cozy Book Club 📖</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Book</Link> | <Link to="/favorites">Favorites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/favorites" element={<FavoriteBooks />} />
          <Route path="/books" element={<BooksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/books').then(res => setBooks(res.data));
  }, []);

  return (
    <div>
      <h2>📚 Book Collection 📚</h2>
      {books.map(book => (
        <div key={book._id} className="book-card">
          <h3>{book.title}</h3>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p>{book.description}</p>
          <button onClick={() => addToFavorites(book._id)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
}

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/books', { title, author, genre, description, userId: 'someUserId' });
    alert('Book Added!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
      <input type="text" placeholder="Genre" onChange={(e) => setGenre(e.target.value)} required />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} required></textarea>
      <button type="submit">Add Book</button>
    </form>
  );
}

function FavoriteBooks() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('/favorites/someUserId').then(res => setFavorites(res.data));
  }, []);

  return (
    <div>
      <h2>💖 Favorite Books 💖</h2>
      {favorites.map(book => (
        <div key={book._id} className="book-card">
          <h3>{book.title}</h3>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}

function addToFavorites(bookId) {
  axios.post('/favorites', { userId: 'someUserId', bookId }).then(() => {
    alert('Book added to favorites!');
  });
}

export default App;
