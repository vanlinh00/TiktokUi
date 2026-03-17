import classNames from 'classnames/bind';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);

const FEED = [
    {
        id: '1',
        nickname: 'capyboii',
        fullname: 'Son Tung M-TP',
        caption:
            'MAKING MY WAY is officially out now !!! Show me your hands if you guys are listening to MAKING MY WAY...',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        poster: 'https://picsum.photos/id/1025/720/1280',
        stats: { likes: '1.3M', comments: '17.4K', shares: '22.3K' },
        commentsCount: '17400',
        comments: [
            { id: 1, user: 'MINH', text: 'Ra MV sớm đi sếp ơi' },
            { id: 2, user: 'Thanh T', text: 'Đẹp xỉu lên xỉu xuống huhu' },
            { id: 3, user: 'Huy', text: 'Nghe cuốn thật sự' },
        ],
    },
    {
        id: '2',
        nickname: 'denvau',
        fullname: 'Đen Vâu',
        caption: 'Nghe bài này lúc đêm muộn là đúng bài.',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        poster: 'https://picsum.photos/id/1005/720/1280',
        stats: { likes: '842K', comments: '9.1K', shares: '4.6K' },
        commentsCount: '9100',
        comments: [
            { id: 1, user: 'Lan', text: 'Chill ghê' },
            { id: 2, user: 'Khoa', text: 'Nghe phát nghiện' },
        ],
    },
    {
        id: '3',
        nickname: 'kaoquyphi',
        fullname: 'Kao Quý Phi',
        caption: 'Đoạn này hay quá trời ơi.',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        poster: 'https://picsum.photos/id/1011/720/1280',
        stats: { likes: '2.1M', comments: '31K', shares: '58K' },
        commentsCount: '31000',
        comments: [
            { id: 1, user: 'Duy', text: 'Replay 100 lần' },
            { id: 2, user: 'Vy', text: 'Đỉnh thật' },
            { id: 3, user: 'Hà', text: 'Cười xỉu' },
        ],
    },
];

function Watch() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [videoStates, setVideoStates] = useState(() => FEED.map(() => ({ loading: true, error: false })));
    const [isFollowing, setIsFollowing] = useState(false);
    const [comment, setComment] = useState('');

    const feedRef = useRef(null);
    const itemRefs = useRef([]);

    const activeVideo = useMemo(() => FEED[activeIndex] ?? FEED[0], [activeIndex]);

    useEffect(() => {
        const root = feedRef.current;
        if (!root) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

                if (!visible) return;
                const nextIndex = Number(visible.target.getAttribute('data-index'));
                if (!Number.isNaN(nextIndex)) setActiveIndex(nextIndex);
            },
            { root, threshold: [0.65, 0.8, 0.92] },
        );

        itemRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        setIsFollowing(false);
        setComment('');
    }, [activeIndex]);

    const scrollToIndex = (nextIndex) => {
        const el = itemRefs.current[nextIndex];
        if (!el) return;
        el.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };

    return (
        <div className={cx('page')}>
            <div className={cx('left')}>
                <div ref={feedRef} className={cx('feed')}>
                    {FEED.map((item, index) => {
                        const state = videoStates[index] ?? { loading: true, error: false };
                        const isActive = index === activeIndex;

                        return (
                            <section
                                key={item.id}
                                className={cx('feedItem')}
                                data-index={index}
                                ref={(el) => (itemRefs.current[index] = el)}
                            >
                                <div className={cx('videoFrame')}>
                                    {state.error ? (
                                        <div className={cx('videoFallback')}>
                                            <div className={cx('videoFallbackTitle')}>Video can’t be loaded</div>
                                            <div className={cx('videoFallbackDesc')}>
                                                Try again, or replace the MP4 URL.
                                            </div>
                                        </div>
                                    ) : null}

                                    <video
                                        className={cx('video', { hidden: state.error })}
                                        src={item.src}
                                        controls
                                        autoPlay={isActive}
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        poster={item.poster}
                                        onLoadedData={() =>
                                            setVideoStates((prev) => {
                                                const next = [...prev];
                                                next[index] = { loading: false, error: false };
                                                return next;
                                            })
                                        }
                                        onError={() =>
                                            setVideoStates((prev) => {
                                                const next = [...prev];
                                                next[index] = { loading: false, error: true };
                                                return next;
                                            })
                                        }
                                    />

                                    {state.loading ? <div className={cx('videoLoading')}>Loading…</div> : null}
                                </div>
                            </section>
                        );
                    })}
                </div>

                <div className={cx('nav')}>
                    <button
                        className={cx('navBtn')}
                        onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                        aria-label="Previous"
                    >
                        ↑
                    </button>
                    <button
                        className={cx('navBtn')}
                        onClick={() => scrollToIndex(Math.min(FEED.length - 1, activeIndex + 1))}
                        aria-label="Next"
                    >
                        ↓
                    </button>
                </div>
            </div>

            <div className={cx('right')}>
                <div className={cx('header')}>
                    <div className={cx('creator')}>
                        <div className={cx('avatar')} />
                        <div className={cx('creatorInfo')}>
                            <div className={cx('nickname')}>{activeVideo.nickname}</div>
                            <div className={cx('fullname')}>{activeVideo.fullname}</div>
                        </div>
                    </div>

                    <button
                        className={cx('followBtn', { following: isFollowing })}
                        onClick={() => setIsFollowing((v) => !v)}
                    >
                        {isFollowing ? 'Following' : 'Follow'}
                    </button>
                </div>

                <div className={cx('caption')}>{activeVideo.caption}</div>

                <div className={cx('stats')}>
                    <div className={cx('statItem')}>
                        <span className={cx('statValue')}>{activeVideo.stats.likes}</span>
                        <span className={cx('statLabel')}>Likes</span>
                    </div>
                    <div className={cx('statItem')}>
                        <span className={cx('statValue')}>{activeVideo.stats.comments}</span>
                        <span className={cx('statLabel')}>Comments</span>
                    </div>
                    <div className={cx('statItem')}>
                        <span className={cx('statValue')}>{activeVideo.stats.shares}</span>
                        <span className={cx('statLabel')}>Shares</span>
                    </div>
                </div>

                <div className={cx('commentsHeader')}>
                    <div className={cx('commentsTitle')}>Comments</div>
                    <div className={cx('commentsCount')}>({activeVideo.commentsCount})</div>
                </div>

                <div className={cx('comments')}>
                    {activeVideo.comments.map((c) => (
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
