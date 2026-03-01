import classNames from 'classnames/bind';
import styles from './NewHome.module.scss';

const cx = classNames.bind(styles);

function NewHome() {
    return (
        <div className={cx('wrapper')}>
            <h1>Welcome to the New Home Page</h1>
            <p>This is a placeholder component created per your request.</p>
        </div>
    );
}

export default NewHome;
