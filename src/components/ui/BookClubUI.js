import React from "react";

const BookClubUI = ({ books }) => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Book Club Library</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {books.length > 0 ? (
                    books.map((book) => (
                        <div key={book._id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold">{book.title}</h2>
                            <p className="text-sm text-gray-400">by {book.author}</p>
                            <p className="mt-2">{book.description}</p>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-400">No books available.</p>
                )}
            </div>
        </div>
    );
};

export default BookClubUI;
