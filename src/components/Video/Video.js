import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Video({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.user.avatar} alt="" />

            <div className={cx('content')}>
                <div className={cx('info-wrapper')}>
                    <div className={cx('user-info')}>
                        <h3 className={cx('author')}>{data.user.nickname}</h3>
                        <p className={cx('name')}>{data.user.full_name}</p>
                    </div>
                    <Button outline small className={cx('follow-btn')}>
                        Follow
                    </Button>
                    <p className={cx('description')}>{data.description}</p>
                </div>

                <div className={cx('video-wrapper')}>
                    <div className={cx('video-card')}>
                        <video controls src={data.file_url} loop />
                    </div>

                    <div className={cx('action-bar')}>
                        <div className={cx('action-item')}>
                            <div className={cx('icon-circle')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <strong className={cx('count')}>{data.likes_count}</strong>
                        </div>
                        <div className={cx('action-item')}>
                            <div className={cx('icon-circle')}>
                                <FontAwesomeIcon icon={faCommentDots} />
                            </div>
                            <strong className={cx('count')}>{data.comments_count}</strong>
                        </div>
                        <div className={cx('action-item')}>
                            <div className={cx('icon-circle')}>
                                <FontAwesomeIcon icon={faBookmark} />
                            </div>
                            <strong className={cx('count')}>{data.shares_count}</strong>
                        </div>
                        <div className={cx('action-item')}>
                            <div className={cx('icon-circle')}>
                                <FontAwesomeIcon icon={faShare} />
                            </div>
                            <strong className={cx('count')}>{data.shares_count}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
