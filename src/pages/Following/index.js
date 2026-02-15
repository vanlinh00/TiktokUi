import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import FollowingAccountItem from '~/components/Following';

const cx = classNames.bind(styles);

// Dữ liệu fake chuẩn cấu trúc API TikTok
const MOCK_DATA = [
    {
        id: 1,
        file_url: 'https://v16-webapp.tiktok.com/...', // Thay bằng link mp4 bất kỳ để test
        user: {
            nickname: 'sontungmtp',
            full_name: 'Sơn Tùng M-TP',
            avatar: 'https://p16-sign-va.tiktokcdn.com/...',
            tick: true,
        },
    },
    {
        id: 2,
        file_url: 'https://v16-webapp.tiktok.com/...',
        user: {
            nickname: 'denvau',
            full_name: 'Đen Vâu',
            avatar: 'https://p16-sign-va.tiktokcdn.com/...',
            tick: true,
        },
    },
    {
        id: 2,
        file_url: 'https://v16-webapp.tiktok.com/...',
        user: {
            nickname: 'denvau',
            full_name: 'Đen Vâu',
            avatar: 'https://p16-sign-va.tiktokcdn.com/...',
            tick: true,
        },
    },
    {
        id: 2,
        file_url: 'https://v16-webapp.tiktok.com/...',
        user: {
            nickname: 'denvau',
            full_name: 'Đen Vâu',
            avatar: 'https://p16-sign-va.tiktokcdn.com/...',
            tick: true,
        },
    },
    {
        id: 2,
        file_url: 'https://v16-webapp.tiktok.com/...',
        user: {
            nickname: 'denvau',
            full_name: 'Đen Vâu',
            avatar: 'https://p16-sign-va.tiktokcdn.com/...',
            tick: true,
        },
    },
    {
        id: 2,
        file_url: 'https://v16-webapp.tiktok.com/...',
        user: {
            nickname: 'denvau',
            full_name: 'Đen Vâu',
            avatar: 'https://p16-sign-va.tiktokcdn.com/...',
            tick: true,
        },
    },
    {
        id: 2,
        file_url: 'https://v16-webapp.tiktok.com/...',
        user: {
            nickname: 'denvau',
            full_name: 'Đen Vâu',
            avatar: 'https://p16-sign-va.tiktokcdn.com/...',
            tick: true,
        },
    },
    {
        id: 2,
        file_url: 'https://v16-webapp.tiktok.com/...',
        user: {
            nickname: 'denvau',
            full_name: 'Đen Vâu',
            avatar: 'https://p16-sign-va.tiktokcdn.com/...',
            tick: true,
        },
    },
    {
        id: 2,
        file_url: 'https://v16-webapp.tiktok.com/...',
        user: {
            nickname: 'denvau',
            full_name: 'Đen Vâu',
            avatar: 'https://p16-sign-va.tiktokcdn.com/...',
            tick: true,
        },
    },
];

function Following() {
    const [users, setUsers] = useState(MOCK_DATA); // Để mặc định là mock data để thấy giao diện ngay

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=2')
            .then((res) => res.json())
            .then((res) => {
                if (res.data) {
                    setUsers(res.data);
                }
            })
            .catch(() => console.log('Dùng dữ liệu fake do lỗi kết nối'));
    }, []);

    return (
        <div className={cx('container')}>
            {users.map((user) => (
                <FollowingAccountItem key={user.id} data={user} />
            ))}
        </div>
    );
}

export default Following;
