import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard({ user }) {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get(`/books?search=${searchQuery}`).then(res => setBooks(res.data));
    }, [searchQuery]);

    return (
        <div>
            <h2>📚 Book Collection 📚</h2>
            <input
                type="text"
                placeholder="Search by title, author, or genre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {books.map(book => (
                <div key={book._id} className="book-card">
                    <h3>{book.title}</h3>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <p>{book.description}</p>
                    {user && user.role === 'admin' && (
                        <>
                            <button onClick={() => editBook(book._id)}>Edit</button>
                            <button onClick={() => deleteBook(book._id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

function editBook(bookId) {
    alert('Redirect to edit page (not implemented in this file)');
}

function deleteBook(bookId) {
    const userId = 'someUserId';
    axios.delete(`/books/${bookId}`, { data: { userId } }).then(() => {
        alert('Book deleted successfully!');
    }).catch(() => {
        alert('Failed to delete book!');
    });
}

export default Dashboard;
