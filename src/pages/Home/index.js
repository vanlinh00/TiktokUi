import { useState } from 'react';
import Video from '~/components/Video';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

// Mock data for videos
const MOCK_VIDEOS = [
    {
        id: 1,
        file_url:
            'https://v16-webapp.tiktok.com/video/tos/alisg/tos-alisg-pv-0037/9d3fa4fed5dd402ba38d51e79aa82d7d?a=1233&bti=MjUsMw%3D%3D&ch=0&cos=0&cr=0&cs=0cy87c3d37c39cdff&dl_list=1&dr=0&ds=3&er=7&expire=1649837432&l=202204122743530102290532020e00a8bd&lr=tiktok_m&ply=1835897201&rc=MWJtaXN6ZXRsMzMzNDE3M0ApPDk2OTc7PTw9Nzc3NzM1M0BCMjFFYS9eLS1kMTZgMzBhLWEtNDAxNzAxMl4tNl8tMTAxMV86c29jc185dnQ%3D&signature=&tk=0&vl=&vr=' ||
            'https://v16-webapp.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c003/7f3f1a5ea8c544018cddb2a2ba287a5e/?a=1233&bti=MjUsMw%3D%3D',
        user: {
            id: 1,
            nickname: '@kaoquyphi',
            full_name: 'Kao Quy Phi',
            avatar: 'https://p77-sign.tiktokcdn.com/avatar-pull-cdn-v2/1234567890/tiktok?x-expires=1649900400&x-signature=abc123',
        },
        description: 'Thà cá vào công dễ làm gì 🐟',
        likes_count: '62.4K',
        comments_count: 112,
        shares_count: 2408,
    },
    {
        id: 2,
        file_url:
            'https://v16-webapp.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c003/7f3f1a5ea8c544018cddb2a2ba287a5e/?a=1233',
        user: {
            id: 2,
            nickname: '@user2',
            full_name: 'Another Creator',
            avatar: 'https://p77-sign.tiktokcdn.com/avatar-pull-cdn-v2/1234567891/tiktok?x-expires=1649900400&x-signature=abc124',
        },
        description: 'Amazing food content! 🍱',
        likes_count: '45.2K',
        comments_count: 89,
        shares_count: 1230,
    },
    {
        id: 3,
        file_url:
            'https://v16-webapp.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c003/7f3f1a5ea8c544018cddb2a2ba287a5e/?a=1233',
        user: {
            id: 3,
            nickname: '@creator3',
            full_name: 'Creative Mind',
            avatar: 'https://p77-sign.tiktokcdn.com/avatar-pull-cdn-v2/1234567892/tiktok?x-expires=1649900400&x-signature=abc125',
        },
        description: 'Love this moment ❤️',
        likes_count: '128.9K',
        comments_count: 456,
        shares_count: 5601,
    },
];

function Home() {
    const [videos] = useState(MOCK_VIDEOS);

    return (
        <div className={cx('wrapper')}>
            {videos.map((video) => (
                <Video key={video.id} data={video} />
            ))}
        </div>
    );
}

export default Home;
