import { useState } from 'react';
import classNames from 'classnames/bind';
import ChatList from '~/components/ChatList/ChatList';
import ChatWindow from '~/components/ChatWindow/ChatWindow';
import styles from './Chat.module.scss';

const cx = classNames.bind(styles);

function Chat() {
    const [selectedConv, setSelectedConv] = useState(null);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <aside className={cx('sidebar')}>
                    <div className={cx('sidebarHeader')}>Đoạn chat</div>
                    <ChatList onSelect={(conv) => setSelectedConv(conv)} />
                </aside>
                <main className={cx('main')}>
                    <ChatWindow conversation={selectedConv} />
                </main>
            </div>
        </div>
    );
}

export default Chat;
