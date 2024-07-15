import React, { useState } from 'react';
import { registerUser, loginUser } from '../services/api';

const Auth = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const { data } = await registerUser({ username, password });
            setToken(data.token);
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await loginUser({ username, password });
            setToken(data.token);
        } catch (err) {
            console.error(err);
        }
    };
  return (
    <div>
        <form onSubmit={handleRegister}>
                <h2>Register</h2>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Register</button>
            </form>

            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>

    </div>
  )
}

export default Auth