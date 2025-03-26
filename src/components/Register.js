import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long and include an uppercase letter, lowercase letter, a number, and a special character.");
            return;
        }

        try {
            await axios.post('/register', { username, email, password });
            alert('Registration Successful!');
        } catch (err) {
            alert('Registration Failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
