import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './FollowingAccountItem.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function FollowingAccountItem({ data }) {
    // Senior tip: Xử lý video play/pause bằng ref hoặc event trực tiếp để tối ưu performance
    const handleMouseEnter = (e) => {
        e.target.play();
    };

    const handleMouseLeave = (e) => {
        e.target.pause();
        e.target.currentTime = 0; // Reset video về đầu
    };

    return (
        <div className={cx('account-card')}>
            {/* <div className={cx('video-preview')}>
                <video muted loop src={data.file_url} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </div> */}

            <div className={cx('info')}>
                <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.nickname} />
                <h3 className={cx('full-name')}>{data.user.full_name}</h3>
                <p className={cx('nickname')}>
                    {data.user.nickname}
                    {data.user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
        </div>
    );
}

FollowingAccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default FollowingAccountItem;
