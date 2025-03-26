import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`/books/${id}`).then(res => setBook(res.data));
    }, [id]);

    if (!book) return <p>Loading...</p>;

    return (
        <div>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p>{book.description}</p>
        </div>
    );
}

export default BookDetails;
