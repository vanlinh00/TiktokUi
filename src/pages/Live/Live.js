import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Live.module.scss';
import LiveItem from './LiveItem'; // Component vừa tách ở trên

const cx = classNames.bind(styles);

// Mock data thường được để ở file constants hoặc fetch từ API
const MOCK_LIVE = [
    {
        id: 1,
        user: 'theanh28entertainment',
        desc: 'Tin tức nóng hổi 24h',
        viewers: '12.5K',
        avatar: 'https://p16-sign-va.tiktokcdn.com/...', // Link ảnh thật
        thumb: 'https://p16-sign-va.tiktokcdn.com/...',
    },
    {
        id: 2,
        user: 'theanh28entertainment2',
        desc: 'Tin tức nóng hổi 24h',
        viewers: '12.5K',
        avatar: 'https://p16-sign-va.tiktokcdn.com/...', // Link ảnh thật
        thumb: 'https://p16-sign-va.tiktokcdn.com/...',
    },
    {
        id: 2,
        user: 'theanh28entertainment2',
        desc: 'Tin tức nóng hổi 24h',
        viewers: '12.5K',
        avatar: 'https://p16-sign-va.tiktokcdn.com/...', // Link ảnh thật
        thumb: 'https://p16-sign-va.tiktokcdn.com/...',
    },
    {
        id: 2,
        user: 'theanh28entertainment2',
        desc: 'Tin tức nóng hổi 24h',
        viewers: '12.5K',
        avatar: 'https://p16-sign-va.tiktokcdn.com/...', // Link ảnh thật
        thumb: 'https://p16-sign-va.tiktokcdn.com/...',
    },
    // ... thêm các item khác
];

function Live() {
    const [liveList, setLiveList] = useState([]);

    useEffect(() => {
        // Giả lập gọi API
        setLiveList(MOCK_LIVE);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <h2 className={cx('title')}>Livestreams for you</h2>
            </header>

            <main className={cx('live-list')}>
                {liveList.length > 0 ? (
                    liveList.map((item) => <LiveItem key={item.id} data={item} />)
                ) : (
                    <div className={cx('loading')}>Loading...</div>
                )}
            </main>
        </div>
    );
}

export default Live;
