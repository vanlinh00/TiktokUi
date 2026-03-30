import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // URL points to port 8080 as per your CURL
            const response = await fetch('http://localhost:8080/oauth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // This is the Client Authorization from your CURL
                    Authorization: 'Basic bW9iaWxlLWNsaWVudDptb2JpbGUtY2xpZW50',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    deviceToken: 'deviceTokendd', // Required by your API
                }),
            });

            const result = await response.json();

            // OAuth2 usually returns 'access_token'
            const token = result.access_token || result.token;
            // FIX: Access access_token through the 'data' property
            if (result.success && result.data && result.data.access_token) {
                const token = result.data.access_token;

                // 1. Save Token
                localStorage.setItem('token', token);

                // 2. Save User Info
                const userObj = { loginId: username }; // You can add more data here if needed
                localStorage.setItem('user', JSON.stringify(userObj));

                // 3. Success! Redirect
                navigate('/');
                window.location.reload();
            } else {
                // If success is false or data is missing
                alert('Login failed: ' + (result.message || 'Invalid credentials'));
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Could not connect to the server. Please check if your backend is running.');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <form className={cx('login-form')} onSubmit={handleLogin}>
                <h2 className={cx('title')}>Log in</h2>

                <div className={cx('input-group')}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className={cx('input-group')}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <Button primary large className={cx('login-btn')} type="submit">
                    Log in
                </Button>
            </form>
        </div>
    );
}

export default Login;
