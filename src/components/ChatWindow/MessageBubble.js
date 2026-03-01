import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ChatWindow.module.scss';

const cx = classNames.bind(styles);

function MessageBubble({ message, isOwn }) {
    return <div className={cx('bubble', isOwn ? 'own' : 'other')}>{message.text}</div>;
}

MessageBubble.propTypes = {
    message: PropTypes.object.isRequired,
    isOwn: PropTypes.bool,
};

export default MessageBubble;
