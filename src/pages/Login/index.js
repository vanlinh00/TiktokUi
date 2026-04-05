import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import Button from '~/components/Button';
import { loginService } from '~/services/authService';

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();

    // UI State
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Atomic update for input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
        if (error) setError(null); // Clear error when user starts typing again
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const result = await loginService(credentials.username, credentials.password);

            if (result?.success && result?.data?.access_token) {
                const { access_token } = result.data;

                // Persistence
                localStorage.setItem('token', access_token);
                localStorage.setItem('user', JSON.stringify({ loginId: credentials.username }));

                // Standard practice: Navigate to home.
                // Note: Instead of window.location.reload(),
                // your App.js should react to the localStorage/AuthContext change.
                navigate('/', { replace: true });
                window.location.reload();
            } else {
                throw new Error(result?.message || 'Invalid server response');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <form className={cx('login-form')} onSubmit={handleLogin} noValidate>
                <h2 className={cx('title')}>Log in</h2>

                {error && <div className={cx('error-banner')}>{error}</div>}

                <div className={cx('input-group')}>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={handleChange}
                        disabled={isLoading}
                        required
                    />
                </div>

                <div className={cx('input-group')}>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        disabled={isLoading}
                        required
                    />
                </div>

                <Button primary large className={cx('login-btn')} type="submit" disabled={isLoading}>
                    {isLoading ? 'Authenticating...' : 'Log in'}
                </Button>
            </form>
        </div>
    );
}

export default Login;
