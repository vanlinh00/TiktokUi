import { useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

const tabs = ['Videos', 'Reposts', 'Liked'];
const videos = [
    { id: 1, views: '12.8M', pinned: true },
    { id: 2, views: '20.8M', pinned: true },
    { id: 3, views: '22M', pinned: true },
    { id: 4, views: '647.5K' },
    { id: 5, views: '589.8K' },
    { id: 6, views: '5.5M' },
    { id: 7, views: '3.2M' },
    { id: 8, views: '1.9M' },
];

function Profile() {
    const { nickname } = useParams();
    const username = nickname || 'crisdevilgamer7';
    const [activeTab, setActiveTab] = useState('Videos');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('profile-panel')}>
                <div className={cx('avatar-wrapper')}>
                    <img
                        className={cx('avatar')}
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
                        alt="CrisDevilGamer"
                    />
                </div>

                <div className={cx('profile-info')}>
                    <div className={cx('name-row')}>
                        <h1 className={cx('author')}>CrisDevilGamer</h1>
                        <span className={cx('username')}>| {username}</span>
                        <span className={cx('verified')}>✔</span>
                    </div>

                    <div className={cx('stats')}>
                        <div className={cx('stat-item')}>
                            <strong>4</strong>
                            <span>Following</span>
                        </div>
                        <div className={cx('stat-item')}>
                            <strong>6M</strong>
                            <span>Followers</span>
                        </div>
                        <div className={cx('stat-item')}>
                            <strong>98.4M</strong>
                            <span>Likes</span>
                        </div>
                    </div>

                    <div className={cx('actions')}>
                        <Button primary large className={cx('follow-btn')}>
                            Follow
                        </Button>
                        <Button outline large className={cx('message-btn')}>
                            Message
                        </Button>
                        <Button outline className={cx('icon-btn')}>
                            +
                        </Button>
                        <Button outline className={cx('icon-btn')}>
                            👤
                        </Button>
                        <Button outline className={cx('icon-btn')}>
                            ⇪
                        </Button>
                        <Button outline className={cx('icon-btn')}>
                            ...
                        </Button>
                    </div>

                    <p className={cx('bio')}>CrisDevilGamer's Official TikTok</p>
                </div>
            </div>

            <div className={cx('tabs-row')}>
                <div className={cx('tabs')}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            className={cx('tab', { active: activeTab === tab })}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className={cx('filters')}>
                    <button className={cx('filter', 'active')}>Latest</button>
                    <button className={cx('filter')}>Popular</button>
                    <button className={cx('filter')}>Oldest</button>
                </div>
            </div>

            {activeTab === 'Videos' ? (
                <div className={cx('grid')}>
                    {videos.map((video) => (
                        <div key={video.id} className={cx('grid-item')}>
                            {video.pinned && <span className={cx('tag')}>Pinned</span>}
                            <div className={cx('thumbnail')} />
                            <div className={cx('overlay')}>
                                <span className={cx('view-count')}>
                                    <strong>{video.views}</strong>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={cx('empty-state')}>
                    <p>No {activeTab.toLowerCase()} yet.</p>
                </div>
            )}
        </div>
    );
}

export default Profile;
