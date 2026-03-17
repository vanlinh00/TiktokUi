import classNames from 'classnames/bind';
import { useMemo, useState } from 'react';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);

const MOCK_COMMENTS = [
    { id: 1, user: 'MINH', text: 'Ra MV sớm đi sếp ơi' },
    { id: 2, user: 'Thanh T', text: 'Đẹp xỉu lên xỉu xuống huhu' },
    { id: 3, user: 'Huy', text: 'Nghe cuốn thật sự' },
];

function Watch() {
    const [isFollowing, setIsFollowing] = useState(false);
    const [comment, setComment] = useState('');

    const videoSrc = useMemo(
        () =>
            // Public demo MP4 (fallback if your API isn’t wired yet)
            'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        [],
    );

    return (
        <div className={cx('page')}>
            <div className={cx('left')}>
                <div className={cx('videoFrame')}>
                    <video className={cx('video')} src={videoSrc} controls autoPlay muted loop />
                </div>
            </div>

            <div className={cx('right')}>
                <div className={cx('header')}>
                    <div className={cx('creator')}>
                        <div className={cx('avatar')} />
                        <div className={cx('creatorInfo')}>
                            <div className={cx('nickname')}>capyboii</div>
                            <div className={cx('fullname')}>Son Tung M-TP</div>
                        </div>
                    </div>

                    <button className={cx('followBtn', { following: isFollowing })} onClick={() => setIsFollowing((v) => !v)}>
                        {isFollowing ? 'Following' : 'Follow'}
                    </button>
                </div>

                <div className={cx('caption')}>
                    MAKING MY WAY is officially out now !!! Show me your hands if you guys are listening to MAKING MY WAY...
                </div>

                <div className={cx('stats')}>
                    <div className={cx('statItem')}>
                        <span className={cx('statValue')}>1.3M</span>
                        <span className={cx('statLabel')}>Likes</span>
                    </div>
                    <div className={cx('statItem')}>
                        <span className={cx('statValue')}>17.4K</span>
                        <span className={cx('statLabel')}>Comments</span>
                    </div>
                    <div className={cx('statItem')}>
                        <span className={cx('statValue')}>22.3K</span>
                        <span className={cx('statLabel')}>Shares</span>
                    </div>
                </div>

                <div className={cx('commentsHeader')}>
                    <div className={cx('commentsTitle')}>Comments</div>
                    <div className={cx('commentsCount')}>(17400)</div>
                </div>

                <div className={cx('comments')}>
                    {MOCK_COMMENTS.map((c) => (
                        <div key={c.id} className={cx('comment')}>
                            <div className={cx('commentAvatar')} />
                            <div className={cx('commentBody')}>
                                <div className={cx('commentUser')}>{c.user}</div>
                                <div className={cx('commentText')}>{c.text}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={cx('composer')}>
                    <input
                        className={cx('input')}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Log in to comment"
                        disabled
                    />
                    <button className={cx('postBtn')} disabled>
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Watch;

