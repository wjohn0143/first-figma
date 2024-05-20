// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Divider } from 'antd';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            setMessage('Login successful');
        } catch (err) {
            setMessage('Login failed');
        }
    };

    return (

        <div className="w-100" style={{padding:"160px"}}>
            <form onSubmit={handleSubmit}>
                <h2 className='pb-5'>Login</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
                <p>{message}</p>
            </form>
        </div>
    );
};

export default Login;
