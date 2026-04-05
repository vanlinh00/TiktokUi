import { useEffect, useState, useCallback } from 'react';
import classNames from 'classnames/bind';

import styles from './Following.module.scss';
import FollowingAccountItem from '~/components/Following';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

function Following() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchFollowingData = useCallback(async () => {
        try {
            setIsLoading(true);
            const data = await userService.getFollowingList();
            setUsers(data);
        } catch (err) {
            setError(err.message);
            console.error('[Following Page Error]:', err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFollowingData();
    }, [fetchFollowingData]);

    // Conditional Rendering logic moved out of the return for cleaner JSX
    if (isLoading) {
        return <div className={cx('loading-state')}>Loading accounts...</div>;
    }

    if (error) {
        return <div className={cx('error-state')}>Error: {error}</div>;
    }

    return (
        <div className={cx('container')}>
            {users.length > 0 ? (
                users.map((user, index) => <FollowingAccountItem key={`${user.id}-${index}`} data={user} />)
            ) : (
                <div className={cx('empty-state')}>You aren't following anyone yet.</div>
            )}
        </div>
    );
}

export default Following;
