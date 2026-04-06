// Tạo file riêng hoặc viết cùng file nhưng tách component
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Live.module.scss';
import Image from '~/components/Image'; // Giả sử bạn đã có component Image xử lý lỗi fallback

const cx = classNames.bind(styles);

function LiveItem({ data }) {
    return (
        <div className={cx('live-item')}>
            <div className={cx('video-preview')}>
                <Image className={cx('thumb')} src={data.thumb} alt={data.user} />
                <div className={cx('overlay')}>
                    <span className={cx('live-tag')}>LIVE</span>
                    <span className={cx('view-count')}>{data.viewers} viewers</span>
                </div>
            </div>

            <div className={cx('user-info')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.user} />
                <div className={cx('text-info')}>
                    <h4 className={cx('user-name')}>{data.user}</h4>
                    <p className={cx('live-desc')}>{data.desc}</p>
                </div>
            </div>
        </div>
    );
}

LiveItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default LiveItem;
