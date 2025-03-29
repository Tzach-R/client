import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

function Profile() {
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) return;
        const decoded = jwt_decode(token);
        const userId = decoded.id;

        axios.get(`/user/${userId}`).then((res) => {
            setUser(res.data);
            setFavorites(res.data.favorites);
        });
    }, []);

    function removeFromFavorites(bookId) {
        const token = localStorage.getItem('token');
        if (!token) return;

        const decoded = jwt_decode(token);
        const userId = decoded.id;

        axios.post('/favorites/remove', { userId, bookId }).then(() => {
            alert('Book removed from favorites!');
            setFavorites(favorites.filter(book => book._id !== bookId));
        });
    }

    return (
        <div>
            <h2>👤 User Profile</h2>
            {user && (
                <>
                    <p><strong>Email:</strong> {user.email}</p>
                    <h3>💖 Favorite Books:</h3>
                    {favorites.map(book => (
                        <div key={book._id}>
                            <h4>{book.title}</h4>
                            <button onClick={() => removeFromFavorites(book._id)}>Remove</button>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default Profile;
