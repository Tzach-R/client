import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('/books').then((res) => {
            setBooks(res.data);
        });
    }, []);

    return (
        <div>
            <h2>📚 Book Collection 📚</h2>
            {books.map((book) => (
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

export default Dashboard;
