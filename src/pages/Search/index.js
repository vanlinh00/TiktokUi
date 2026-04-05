import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { SearchIcon, HomeIcon } from '~/components/Icons';
import config from '~/config';
import images from '~/assets/images';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [query, setQuery] = useState('');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-panel')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <div className={cx('search-box')}>
                    <SearchIcon className={cx('search-icon')} />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search"
                        spellCheck={false}
                    />
                </div>

                <button type="button" className={cx('for-you-btn')}>
                    <span className={cx('for-you-icon')}>
                        <HomeIcon />
                    </span>
                    <span>For You</span>
                </button>
            </div>
        </div>
    );
}

export default Search;
