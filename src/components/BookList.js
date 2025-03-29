import React from "react";

const BookList = ({ books }) => {
    return (
        <ul className="space-y-4">
            {books.map((book) => (
                <li key={book._id} className="bg-gray-800 p-4 rounded-lg shadow">
                    <h3 className="text-lg font-bold">{book.title}</h3>
                    <p className="text-sm text-gray-400">by {book.author}</p>
                </li>
            ))}
        </ul>
    );
};

export default BookList;
