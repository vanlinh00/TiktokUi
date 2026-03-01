import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ChatList.module.scss';

const cx = classNames.bind(styles);

function ChatItem({ data, onClick }) {
    return (
        <div className={cx('item')} onClick={onClick}>
            <img className={cx('avatar')} src={data.avatar} alt={data.name} />
            <div className={cx('details')}>
                <div className={cx('name')}>{data.name}</div>
                <div className={cx('last')}>{data.lastMessage}</div>
            </div>
            {data.unread > 0 && <span className={cx('badge')}>{data.unread}</span>}
        </div>
    );
}

ChatItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default ChatItem;
