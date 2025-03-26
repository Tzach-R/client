import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const userId = 'someUserId'; // Replace with actual user ID from authentication
        axios.get(`/user/${userId}`).then((res) => {
            setUser(res.data);
            setFavorites(res.data.favorites);
        });
    }, []);

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

function removeFromFavorites(bookId) {
    axios.post('/favorites/remove', { userId: 'someUserId', bookId }).then(() => {
        alert('Book removed from favorites!');
    });
}

export default Profile;
